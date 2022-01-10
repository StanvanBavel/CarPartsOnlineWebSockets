FROM node:carbon
RUN npm install -g nodemon
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install && mv /usr/src/app
COPY . /usr/src/app
EXPOSE 5002
CMD [ "nodemon server.js" ]
