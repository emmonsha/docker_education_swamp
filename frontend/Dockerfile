# Этап сборки
FROM node:18-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
#RUN npm ci
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
# Этап запуска (чистая статика)
#FROM caddy:latest

#COPY --from=builder /app/build /usr/share/caddy
#COPY Caddyfile /etc/caddy/Caddyfile

#RUN apk add --no-cache bash
#WORKDIR /usr/share/caddy
#COPY --from=builder /app/build .
