FROM node:20-alpine

WORKDIR /react/app

COPY . .

RUN npm i -g npm@latest
RUN npm install

ENTRYPOINT [ "sh", "run.sh" ]