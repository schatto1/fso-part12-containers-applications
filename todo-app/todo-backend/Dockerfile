FROM node:16
  
WORKDIR /usr/src/server

# COPY ./todo-backend .
COPY --chown=node:node ./todo-backend .
RUN npm ci 

ENV DEBUG=todo-backend:*

# USER node
CMD npm start