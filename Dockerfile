FROM node:14-alpine

ENV PROJECT_ENV production
ENV NODE_ENV production

RUN npm install -g http-server

WORKDIR /home/code

ADD package.json /home/code
RUN npm install --production

ADD . /home/code
RUN npm run build
EXPOSE 80

CMD http-server ./public -p 80
