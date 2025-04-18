## Fetch
- Gets data from somewhere
- built into JS to send request to API

#### api token
- Need to add to requests (like a password)
- Monitors how many times you send requests and puts a limit

#### GET request parameters
- helps you specify what data you want
- pass parameters in url (after '?') 
- not secure

#### GET request headers
- Create a response object
- Important when you want to send parameters securely

#### Error handling
- If the request gets an error returned the promise (fetch) is resolved, not reject why?
- For fetch making a successful trip to the API is a success, even though we did not receive any data
- If fetch operation fails, then we will end up in the catch block
- status 401: authorization error

###### Two types of Error: Fetch error (couldn't connect to server) Status/ok error: connect successfully but did not load or get any data returned

#### POST
- Includes another header in new Request object called: body
- In the body you can attach anything you want to send to the server
- Submit forms and send data

#### Back-end requests options
* Native support for fetch: no need to install a library
###### XHR: XmlHTTPRequest
- HTTP Request: a request from a client to a server

#### Why fetch?
- Native support no need to install 3rd party library
- Based on promises, not callbacks
- nicer syntax
