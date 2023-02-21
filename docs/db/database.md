# Database

To connect with database on local development machine we are using `docker-compose`

## Run database locally

There is `docker-compose.yml` on root of project.

```yml
  version: '3.8'
  services:
    db:
      container_name: postgres
      image: postgres:11
      restart: always
      environment:
        POSTGRES_USER: USERNAME_APP
        POSTGRES_PASSWORD: MOST_SECURE_PASSWORD
        POSTGRES_DB: DBNAME
      ports:
        - "35432:5432"
      volumes:
        - pg_data:/var/lib/postgresql/data/
  volumes:
    pg_data:
```

Above yml is containing database service which we can run using following command on development machine

```bash
  docker-compose up -d
```

To stop docker service on development machine

```bash
  docker-compose down
```

::: tip
  above command will run only if you are in in root of project directory
:::


To setup Zipkin and Redis locally use following snippet

```yml
  redis:
    container_name: redis
    image: "redis:alpine"
    ports:
      - "6379:6379"
  zipkin:
    image: openzipkin/zipkin
    container_name: zipkin
    ports:
      - 9411:9411
```

here is complete `docker-compose.yml` file

```yml
version: '3.8'
services:
  db:
    container_name: postgres
    image: postgres:11
    restart: always
    environment:
      POSTGRES_USER: pg_admin
      POSTGRES_PASSWORD: pg_pass123
      POSTGRES_DB: moviedb
    ports:
      - "35432:5432"
    volumes:
      - pg_data:/var/lib/postgresql/data/
  redis:
    container_name: redis
    image: "redis:alpine"
    ports:
      - "6379:6379"
  zipkin:
    image: openzipkin/zipkin
    container_name: zipkin
    ports:
      - 9411:9411
volumes:
  pg_data:
```
