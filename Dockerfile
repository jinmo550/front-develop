# Step 1: Use node image
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy all project files
COPY . .

# Step 5: Expose port and run
EXPOSE 3000
CMD ["npm", "start"]
