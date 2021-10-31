FROM node:latest
RUN mkdir /next-app
WORKDIR /next-app
COPY . .
RUN rm -rf node_modules package-lock.json
RUN npm install -g npm@8.1.2
RUN npm install

CMD ["npm", "run", "dev"]