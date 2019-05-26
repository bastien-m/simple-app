FROM node:12.3.1-alpine

WORKDIR /usr/simple-app
COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .

CMD ["npm", "start"]

EXPOSE 3000
