FROM node:19-slim as builder
WORKDIR /app
COPY . .
RUN npm install --production
RUN npm install -g @zeit/ncc
RUN ncc build app.js -o dist


FROM node:19-slim
WORKDIR /app
COPY --from=builder /app/dist/index.js .
CMD ["node", "index.js"]

EXPOSE 5000
