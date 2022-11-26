FROM alpine
RUN apk add --update nodejs npm
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)

RUN npm install
# Build the app
#RUN npm run build
#CMD ["npm","start"]
EXPOSE 3000