FROM alpine
RUN apk add --update nodejs npm
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

#CMD ["npm", "start"]
EXPOSE 5000