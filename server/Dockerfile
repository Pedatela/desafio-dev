FROM node:erbium-buster

WORKDIR /usr/src/by_coders/server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3333

ENV NODE_ENV=development
ENV APP_URL=http://localhost:3333

# POSTGRES
ENV DB_HOST=
ENV DB_USER=
ENV DB_PASSWORD=
ENV DB_NAME= 


CMD [ "npm", "start" ]