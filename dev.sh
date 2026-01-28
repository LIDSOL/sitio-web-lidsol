#!/usr/bin/env bash
# --------------------------------------------------------------
#  LIDSOL – Entorno de desarrollo continuo (versión corregida)
# --------------------------------------------------------------

set -euo pipefail   # aborta ante errores, variables no definidas, pipelines fallidos

# ---------- CONFIGURACIÓN ----------
DEV_PORT=3000                     # Vite
PROD_PORT=8080                    # Nginx dentro del contenedor
IMAGE_NAME="lidsol-react-dev"    # Nombre de la imagen que vamos a construir
CONTAINER_NAME="lidsol-react"    # Nombre del contenedor en ejecución
PROJECT_ROOT="$(pwd)"             # Ruta absoluta del proyecto

# ---------- COLORES ----------
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
BLUE='\033[0;34m'; MAGENTA='\033[0;35m'; CYAN='\033[0;36m'
NC='\033[0m'   # No Color

# ---------- FUNCIONES DE IMPRESIÓN ----------
print() {
    printf "${CYAN}%s${NC}\n" "$*"
}
info() {
    printf "${BLUE}%s${NC}\n" "$*"
}
ok() {
    printf "${GREEN}%s${NC}\n" "$*"
}
warn() {
    printf "${YELLOW}%s${NC}\n" "$*"
}
error() {
    printf "${RED}%s${NC}\n" "$*"
}

# ---------- COMPROBACIONES ----------
check_deps() {
    info "🔎 Verificando dependencias…"
    for cmd in node npm podman; do
        if ! command -v "$cmd" >/dev/null 2>&1; then
            error "❌ $cmd no está instalado."
            exit 1
        fi
    done
    ok "✅ Todas las dependencias básicas están presentes."
}

check_node_version() {
    local ver
    ver=$(node -v | sed 's/^v//')   # e.g. 25.4.0

    # Advertir solo si la versión es menor que 20.0.0
    if [[ "$(printf '%s\n' "20.0.0" "$ver" | sort -V | head -n1)" != "20.0.0" ]]; then
        warn "⚠️ Node.js $ver es anterior a 20. Se recomienda usar Node 20+."
    else
        ok "✅ Node.js $ver"
    fi
}

check_npm_version() {
    ok "✅ npm $(npm -v)"
}

# ---------- CONSTRUCCIÓN DE LA IMAGEN ----------
build_image() {
    info "🏗️ Construyendo la imagen Podman ($IMAGE_NAME)…"
    podman build -t "$IMAGE_NAME" . \
        --build-arg BUILD_TYPE=development \
        --quiet
    ok "✅ Imagen $IMAGE_NAME creada."
}

# ---------- INICIO DEL CONTENEDOR ----------
run_container() {
    # Eliminar contenedor previo (si existe)
    if podman ps -a -q -f name="$CONTAINER_NAME" | grep -q .; then
        warn "🧹 Eliminando contenedor previo $CONTAINER_NAME…"
        podman rm -f "$CONTAINER_NAME"
    fi

    info "🚀 Lanzando contenedor $CONTAINER_NAME (bind‑mount ./build)…"
    podman run -d \
        --name "$CONTAINER_NAME" \
        -p "$PROD_PORT":80 \
        -v "$PROJECT_ROOT/build:/usr/share/nginx/html:ro" \
        --restart unless-stopped \
        nginx:alpine > /dev/null

    ok "✅ Contenedor $CONTAINER_NAME escuchando en http://localhost:$PROD_PORT"
}

# ---------- INSTALACIÓN DE DEPENDENCIAS ----------
install_deps() {
    if [ ! -d "node_modules" ]; then
        info "📦 Instalando dependencias npm por primera vez…"
        npm ci
        ok "✅ Dependencias instaladas."
    else
        if [ "package.json" -nt "node_modules" ]; then
            info "🔄 package.json actualizado → reinstalando dependencias…"
            npm ci
            ok "✅ Dependencias actualizadas."
        else
            ok "✅ node_modules ya está presente y actualizado."
        fi
    fi
}

# ---------- SERVIDOR DE DESARROLLO VITE ----------
start_vite() {
    info "🚀 Arrancando Vite (http://localhost:$DEV_PORT)…"
    npm run dev &
    VITE_PID=$!
    sleep 3
    if curl -sf "http://localhost:$DEV_PORT" >/dev/null; then
        ok "✅ Vite corriendo (PID $VITE_PID)."
    else
        error "❌ Vite no respondió."
        kill "$VITE_PID" 2>/dev/null || true
        exit 1
    fi
}

# ---------- WATCHER DE ARCHIVOS ----------
watch_src() {
    info "👀 Iniciando watcher de src/ → npm run build"
    if command -v inotifywait >/dev/null 2>&1; then
        while inotifywait -r -e modify,create,delete --exclude 'node_modules|build' src/; do
            echo -e "\n🔄 Cambios detectados → npm run build"
            npm run build
            ok "✅ Build completado."
        done &
        WATCH_PID=$!
    else
        warn "⚠️ inotifywait no está disponible → usando polling (menos eficiente)."
        while true; do
            sleep 2
            if find src/ -type f -newer build/index.html 2>/dev/null | grep -q .; then
                echo -e "\n🔄 Cambios detectados → npm run build"
                npm run build
                ok "✅ Build completado."
            fi
        done &
        WATCH_PID=$!
    fi
    ok "✅ Watcher activo (PID $WATCH_PID)."
}

# ---------- LIMPIEZA ----------
cleanup() {
    echo -e "\n🧹 Limpieza en curso…"
    [ -n "${VITE_PID-}" ] && kill "$VITE_PID" 2>/dev/null && ok "✅ Vite detenido."
    [ -n "${WATCH_PID-}" ] && kill "$WATCH_PID" 2>/dev/null && ok "✅ Watcher detenido."
    # Si deseas que el contenedor se elimine al salir, descomenta:
    # podman rm -f "$CONTAINER_NAME" && ok "✅ Contenedor $CONTAINER_NAME eliminado."
    echo "✅ Todo listo. ¡Hasta la próxima!"
    exit 0
}
trap cleanup INT TERM

# ---------- FLUJO PRINCIPAL ----------
main() {
    print "\n=== LIDSOL – Entorno de desarrollo continuo ===\n"
    check_deps
    check_node_version
    check_npm_version
    install_deps
    build_image
    run_container
    start_vite

    info "🏗️ Build inicial..."
    npm run build
    ok "✅ Build inicial completado."

    watch_src

    echo -e "\n🎉 Entorno listo"
    echo "--------------------------------------------------"
    echo -e "${MAGENTA}🔹 Desarrollo (Vite)   :${NC} http://localhost:${DEV_PORT}"
    echo -e "${MAGENTA}🔹 Producción (Nginx) :${NC} http://localhost:${PROD_PORT}"
    echo "--------------------------------------------------"
    echo "Presiona Ctrl+C para detener todo."

    wait   # mantiene el script vivo mientras Vite y el watcher corren en background
}

main "$@"
