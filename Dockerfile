# Build the React app
FROM node:20-alpine as build

WORKDIR /app

COPY package.json ./ 
COPY . .

RUN npm install
RUN npm run build

# Use Nginx to serve the built React app
FROM nginx:alpine

# Copy the build folder from the previous stage to Nginx's default directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
