FROM node:alpine

COPY . /app

WORKDIR /app

RUN npm install
RUN node deploy-commands.js

CMD node index.js