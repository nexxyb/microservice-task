FROM node:19-alpine3.15 as builder
WORKDIR /app
RUN apk add --no-cache g++ make python3
COPY package*.json /app/
RUN npm install
COPY . .
RUN npm run build && npm prune --production

FROM node:node:19-alpine3.15 as final
USER node:node
WORKDIR /app
COPY --chown=node:node resources resources
COPY --from=builder --chown=node:node /app/package*.json ./
COPY --from=builder --chown=node:node /app/build/ build
COPY --from=builder --chown=node:node /app/node_modules/ node_modules
CMD ["node", "build/src/server.js"]