FROM node:14-alpine3.12

WORKDIR /usr/src/client
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
ENV REACT_APP_API_HOST=
CMD [ "npm", "start" ]