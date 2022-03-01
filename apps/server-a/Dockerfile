FROM node:16-alpine3.14
WORKDIR /app/server-a
COPY ./dist/apps/server-a /app/server-a
RUN npm i --production
CMD [ "node","main.js" ]
