FROM node:lts as ui-dev

WORKDIR /app

RUN npm install -g @vue/cli
ENV PATH /app/node_modules/.bin:$PATH

EXPOSE 8000
EXPOSE 8080

COPY docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["vue", "ui", "--host",  "0.0.0.0", "--headless"]

FROM node:lts as ui-builder

COPY . /app
WORKDIR /app
RUN npm install && npm run build
