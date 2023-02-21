# Override Config

To override the config, add `config.json` file to root of your project.

```json
  {
    "GO_ENV": "test",
    "ENVIRONMENT": "local",
    "ENABLE_CACHING_JOB": "false"
  }
```

above code will replace or override `config.go` values. 

## Run movie sync service.

If you need to run only movie cron job service then create `config.json` file into root of project and add following line into that file.

```json
  {
    "ENABLE_CACHING_JOB": "true"
  }
```

with above configuration it will run only movie sync service.

