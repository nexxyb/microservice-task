FROM node:19-alpine3.15
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 
# Build the app
#RUN npm run build

EXPOSE 3000