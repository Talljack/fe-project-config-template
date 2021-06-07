# Base 18.04 nginx frontend
FROM hub.docker.com/docker-base/os/ubuntu:18.04-frontend-nginx-prod

# Set the working directory to /app
WORKDIR /app

# Add the current directory contents into the container at /app
ADD dist/ ./

# Add nginx configuration
ADD nginx_front.conf /etc/nginx/sites-enabled/nginx_front.conf

CMD nginx -g "daemon off;"