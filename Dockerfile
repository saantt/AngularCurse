FROM node:20-bookworm

WORKDIR /app

RUN npm install -g @angular/cli@17

ENV NG_CLI_ANALYTICS=false
ENV CI=true

EXPOSE 4200