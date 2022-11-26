FROM node:16.4-alpine3.14 as builder
WORKDIR /app
RUN apk add --no-cache g++ make python3
COPY package*.json .npmrc /app/
RUN npm install
COPY . .
RUN npm run build && npm prune --production

FROM node:16.4-alpine3.14 as final
USER node:node
WORKDIR /app
COPY --chown=node:node resources resources
COPY --from=builder --chown=node:node /app/package*.json ./
COPY --from=builder --chown=node:node /app/build/ build
COPY --from=builder --chown=node:node /app/node_modules/ node_modules
CMD ["node", "build/src/server.js"]