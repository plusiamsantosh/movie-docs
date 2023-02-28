# Caching Service Workflow

We are caching response into Redis only for `/movie/showtimes` api. 

If user makes a request with some parameters, we are creating a unique key based on the his requested parameters. On created key we are storing `/movie/showtimes` api response into RedisDB.

And if user is going to request again with same parameters we are returing result from RedisDB cache instead of our database.

Here is some code snippet

```go

func (ms *MoviesService) SearchMoviesAndShowtimes(params *apimodels.ShowtimesSearchParams) (searchResult *apimodels.ShowtimesSearchResult, err error) {
	logger := logging.Sugar()

	key := getKeyByParams(params)
	logger.Debug(key)

	cacheRes := ms.cache.GetShowTimeResponse(key)
	if cacheRes != nil {
		logger.Debugf("returning result from cache")
		return cacheRes, nil
	}
  ...
  
```