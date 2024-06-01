# backend/Dockerfile
FROM node:18.12.1

WORKDIR /app

# Instalar dependencias del sistema necesarias
RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    g++

COPY package*.json ./

# Instalar dependencias de npm con --legacy-peer-deps para evitar conflictos de dependencias
RUN npm install --legacy-peer-deps

COPY . .

# Construir el proyecto
RUN npm run build

EXPOSE 3000

# Ejecutar el proyecto
CMD ["npm", "run", "start:prod"]
