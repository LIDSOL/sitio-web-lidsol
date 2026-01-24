FROM node:20-alpine AS builder
WORKDIR /app
RUN addgroup -g 1001 -S nodejs
RUN adduser -S react -u 1001

# Instalar dependencias de forma segura
COPY package*.json ./
RUN npm ci && npm cache clean --force

# Copiar código y build
COPY . .
RUN npm run build && chown -R react:nodejs /app

# Runtime con Nginx (similar al contenedor actual)
FROM nginx:alpine
RUN addgroup -g 1001 -S nginx
RUN adduser -S www -u 1001

COPY --from=builder --chown=www:nginx /app/build /usr/share/nginx/html
COPY container/nginx.conf /etc/nginx/conf.d/default.conf
USER www
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]