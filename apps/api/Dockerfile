FROM docker.io/node:lts-alpine

WORKDIR /app

RUN addgroup --system api && \
          adduser --system -G api api

COPY dist/apps/api dist
RUN chown -R api:api .

CMD [ "node", "dist" ]