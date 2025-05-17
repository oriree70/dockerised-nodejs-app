# Use lightweight Alpine Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Install optional dependencies for native modules (optional, but helpful)
# Especially if you're using modules like bcrypt, sharp, etc.
RUN apk add --no-cache python3 make g++ 

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Expose app port
EXPOSE 8080

# Start the application
CMD ["node", "app.js"]
