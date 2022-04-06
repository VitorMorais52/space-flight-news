FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN apk add --no-cache bash

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev", "--host"]