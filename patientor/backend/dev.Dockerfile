FROM node:16
  
WORKDIR /usr/src/patientor/


COPY --chown=node:node ./backend .
RUN npm install

ENV DEBUG=patientor-backend:*

CMD ["npm", "run", "dev"]