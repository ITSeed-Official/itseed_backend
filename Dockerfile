FROM strapi/base:14

RUN mkdir /srv/app && chown 1000:1000 -R /srv/app

WORKDIR /srv/app

COPY ./app/package*.json ./

RUN npm ci

COPY ./app .

RUN npm run build

CMD npm run start
