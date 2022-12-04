#
# Stage 1: React production build
#
FROM node:16-slim as frontend

# Create app directory
WORKDIR /frontend

# Install app dependencies
COPY package.json  ./

RUN npm install

COPY . .

ENV NODE_ENV=production

RUN npm build

EXPOSE 3000

CMD ["npm","start"]