FROM node:14.1-alpine

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN npm install yarn
RUN yarn install
RUN yarn add react-scripts@3.4.1 -g
RUN yarn run build
RUN yarn add serve -g 

CMD ["npx", "serve", "-s", "build"]
