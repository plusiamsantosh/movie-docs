# Movie Service

As name suggested its providing movies to data. It is responsible for syncing and storing VOX data to our database.
it is depandant several external services like [IVA](https://developer.iva-api.com/), [VOX](https://api.vista.co/WSVistaWebClient/api-docs/api-reference/v1) etc.

This service is using Postgres DB as database, Redis for caching, Zipkin for tracing and VOX for movie data, IVA for poster image and trailler etc.

![qq](./main.svg)

<!-- <a href="./guide/getting-started" target="_blank" rel="noreferrer">Getting Started</a> -->