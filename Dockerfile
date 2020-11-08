# pull official base image
# FROM node:13.12.0-slim
FROM node:15.1-buster-slim

# set working directory
WORKDIR /app

# add app
COPY . .

# install app dependencies
RUN npm install --silent
RUN npm install react-scripts -g --silent
RUN npm run-script build
RUN npm install -g serve

# start
CMD ["npx", "serve",  "-s", "build"]
