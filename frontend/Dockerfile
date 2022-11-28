FROM node:19-alpine

WORKDIR /app
COPY package*.json ./
RUN npm config set fetch-retry-maxtimeout 1200000
RUN npm install
COPY . .

CMD ["npm", "start"]
EXPOSE 5000