FROM node:16

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3800

CMD ["node", "app.js"]