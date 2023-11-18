FROM node:16
  
WORKDIR /usr/src/patientor/


COPY ./backend .
RUN npm ci

RUN npm run tsc

ENV DEBUG=patientor-backend:*

CMD npm start