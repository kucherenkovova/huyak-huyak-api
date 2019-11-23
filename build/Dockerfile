FROM node:12.13-alpine

COPY package.json package-lock.json /app/
WORKDIR /app
RUN npm i --production

COPY . /app/
CMD ["npm", "start"]