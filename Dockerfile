# frontend/Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

# npm install 실행
RUN npm install

COPY . .

EXPOSE 3173

CMD ["npm", "run", "dev"]
