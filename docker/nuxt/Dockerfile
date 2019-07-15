FROM node:10-alpine
RUN npm install -g vue-cli
RUN apk update && \
    apk add rsync && \
    apk add openssh
WORKDIR /src
ENV HOST 0.0.0.0
EXPOSE 3000
