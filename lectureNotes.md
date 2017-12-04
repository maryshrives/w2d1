#http
client makes a request to the server for info (usually an html page)
UML sequence diagram -> req from the client, response from the server
*GET(read) requests are very common, along with *POST(create), PUT & PATCH(update), DELETE
CRUD: create, read, update, delete
  for example using twitter
  think of data as documents or resources

the "scheme" example = https or http before the ://
https means the info is encrypted, the server responses are unreadable, negotiated betw browser and server
Use network tab to view requests for a page.

##how is data passed to the server?
sent by the browser as arguments to the server
  as part of the URL (visible)
  as part of the msg body (hidden)
  GET only has URL parameters, POST requests you want to be part of the msg body
##TCP/IP
common networking protocol

the job of DNS is translate common names into an IP addr that the server can use
nslookup -> google.com, gives the IP addr
dig -> gives internals of the DNS system

biggest takeaway = request + response, server doesn't do anything unless a req is received, client won't rcv data unless it was requested.

GET /, 200 OK -response with HTML
GET /app.js, response with JS
GET /img.jpg, etc.

data is returned in chunks, so we have to create a buffer (empty string)

HTTP.get
gets all the pcs of data, then end

data should be batched together
  res.on('data', function(chunk) {
    console.log("got data", chunk.length);
    responseData += chunk;
  });