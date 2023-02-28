# API Workflows

Movie api is nothing but combination of different providers data, like VOX, IVA etc

To understand it clearly lets take an example of [`/movies/showtimes`](https://skills-movies.dev.iamplus.services/docs#tag/Movies/operation/ShowtimesSearch) api

In response of above api we are feching data from [VOX](https://api.vista.co/WSVistaWebClient/api-docs/api-reference/v1) and storing it into our PostgresSQL database. Traillers, poster cast we are getting from [IVA](https://developer.iva-api.com/docs/v1/movies-guide) API.

For more information lets take a look at following diagram.

![Movie API Flowchart](/movie-api.svg)