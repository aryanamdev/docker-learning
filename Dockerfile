# Use the lastest LTS of node.js, I am using 18 for intance
FROM node:20-alpine

# Set the work dir inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application
COPY . .

# Expose the port your app runs on
EXPOSE 5173

# Define the command to start your app
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]

