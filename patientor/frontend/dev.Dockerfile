FROM node:16

WORKDIR /usr/src/patientor

COPY ./frontend .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install

ENV DEBUG=patientor-frontend:*

# npm start is the command to start the application in development mode
CMD ["npm", "start"]