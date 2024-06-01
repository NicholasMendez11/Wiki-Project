# backend/Dockerfile
FROM node:18.12.1

WORKDIR /app

# Instalar dependencias del sistema necesarias
RUN apt-get update && apt-get install -y \
    build-essential \
    libsqlite3-dev

COPY package*.json ./

# Instalar dependencias de npm
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
