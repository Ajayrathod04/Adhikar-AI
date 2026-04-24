# Build Stage
FROM node:20-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production Stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Create a startup script to handle the dynamic $PORT from Cloud Run
RUN echo 'server { \
    listen 8080; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Re-configure to listen on the port provided by Cloud Run ($PORT)
# Cloud Run sets the PORT env var. Nginx doesn't support env vars in config by default.
# We use a simple shell command to replace the port at runtime.
CMD ["/bin/sh", "-c", "sed -i 's/8080/'\"${PORT:-8080}\"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
