# Use the official nginx image as the base image (alpine version because it's smaller)
FROM nginx:alpine

# Copy website to the nginx html directory
COPY dist /usr/share/nginx/html

# Copy a custom nginx configuration file
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Expose port 80
# This for documentation purposes (or inter-container communication), we still need to use the -p flag with the docker run command to map the port to your host machine)
EXPOSE 80