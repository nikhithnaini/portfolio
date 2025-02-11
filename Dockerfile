# Use an official Node.js LTS image as base (Alpine for smaller size)
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json separately for better caching
COPY package*.json ./

# Install dependencies with production flag
//RUN npm ci --only=production

# Copy the rest of the application
COPY . .

# Build the application (if needed)
RUN npm run build

# Use a minimal runtime image for production
FROM node:20-alpine AS runner

# Set working directory
WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app /app

# Set non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expose the application port
EXPOSE 3000

# Start the Node.js app
CMD ["node", "server.js"]
