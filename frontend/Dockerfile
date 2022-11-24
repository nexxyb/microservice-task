FROM node:19-slim
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm install -g npm@9.1.2

RUN npm install
# Build the app
#RUN npm run build

EXPOSE 3000