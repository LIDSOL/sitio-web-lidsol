FROM docker.io/node:20-alpine AS builder
WORKDIR /app

# Instalar dependencias de forma segura
COPY package*.json ./
RUN npm ci && npm cache clean --force

# Copiar código y build
COPY . .
RUN npm run build

# Runtime con Nginx
FROM docker.io/nginx:alpine
COPY --from=builder --chown=nginx:nginx /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]