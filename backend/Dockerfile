# Dockerfile for Node client

# Build react client
FROM node

# Working directory be app
WORKDIR /app

COPY package*.json ./

###  Installing dependencies

RUN npm install --silent

# copy local files to app folder
COPY . .

EXPOSE 5000

CMD ["node","index.js"]
