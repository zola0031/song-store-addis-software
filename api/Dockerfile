FROM node:16

COPY . .

COPY package*.json ./

RUN npm install

EXPOSE 5000

CMD ["npm", "run", "start"]
