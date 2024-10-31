FROM node:21

WORKDIR /app

RUN npm install -g nodemon

RUN npm install @aws-sdk/client-dynamodb

RUN npm install dotenv

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "run", "dev" ]