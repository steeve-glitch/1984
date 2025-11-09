# Use the official Node.js 20 image. 'alpine' is a lightweight version.
FROM node:20-alpine

WORKDIR /app
COPY package*.json ./

# Install dependencies and dos2unix for script compatibility
RUN npm install && apk add --no-cache dos2unix

COPY . .
RUN npm run build

# Make the entrypoint script executable and fix line endings from Windows
RUN dos2unix /app/entrypoint.sh && chmod +x /app/entrypoint.sh

ENV PORT=8080
EXPOSE 8080

# Set the entrypoint to our script
ENTRYPOINT ["/app/entrypoint.sh"]

# The command that the entrypoint will execute after it's done
CMD ["npm", "start"]