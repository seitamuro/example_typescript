FROM node:latest

RUN npx create-next-app next-app -y

ENV APP_PATH=/next-app
WORKDIR $APP_PATH

RUN npm install superagent -y

CMD ["npm", "run", "dev"]