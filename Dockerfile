FROM node:13.12.0-alpine

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm run-script build
RUN npm install -g serve

CMD ["npx", "serve", "-s", "build"]
