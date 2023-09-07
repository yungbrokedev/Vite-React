# syntax=docker/dockerfile:1
FROM node:16 as builder
WORKDIR /usr/src/app

COPY package*.json ./
COPY src ./src
COPY public ./public

ARG http_proxy
ARG https_proxy
ARG no_proxy
ARG npm_registry_url="http://registry.npmjs.org"

RUN npm config set proxy $http_proxy \
    npm config set https_proxy $https_proxy \
    npm config set registry $npm_registry_url

RUN npm install && npm run build

FROM nginx:1.22.0-alpine as nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
