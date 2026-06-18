# Use official Node.js image
FROM node:22-alpine

# Create app directory inside container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Run the application
ENTRYPOINT ["node", "src/index.js"]

# Default command (shows help)
CMD ["help"]

