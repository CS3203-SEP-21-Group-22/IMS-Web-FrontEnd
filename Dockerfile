# Stage 1: Build the React app
FROM node:20.10.0-alpine as build

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

# Expose port 80
EXPOSE 80

# Set environment variable to run on port 80
ENV PORT 80

# Start the React app
CMD ["npm", "start"]
