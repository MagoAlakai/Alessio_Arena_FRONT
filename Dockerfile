# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
# Clears the static files
RUN rm -rf /usr/share/nginx/html
# Copy the static web content
ADD ./content /usr/share/nginx/ht
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]