## Node

Finish implementing the provided HTTP request handler. **Do NOT use Express.**
  * [ ] A POST request to a route should increment that endpoint's count on `globalCounter`.
  * [ ] A GET request to a route should return the value stored at that endpoint's property on `globalCounter`.
  * [ ] A GET request to an undefined route should return an empty response.

You can start the server by running `node index.js`, and test it with [Postman](https://www.getpostman.com/) or from Terminal with the `curl` command.

```sh
# GET /dogs
curl 127.0.0.1:8000/dogs

# POST /dogs
curl -X POST 127.0.0.1:8000/dogs
```

### Example
* A **POST** to `/dogs` should set `globalCounter.dogs = 1`.
* A subsequent **GET** to `/dogs` should return `1`.
* A subsequent **POST** to `/dogs` should set `globalCounter.dogs = 2`.
* A subsequent **GET** to `/dogs` should return `2`.
* A subsequent **GET** to `/cats` should return an empty response, as it has not yet been set.
* A subsequent **POST** to `/cats` should set `globalCounter.cats = 1`.
* A subsequent **GET** to `/cats` should return `1`.

### Available Resources for this Prompt
* Node.js Docs
* MDN
* [W3.org Status Code Docs](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) 
