var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
         console.log('We\'ve encountered an error; sorry!');
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
//Use .on('response') to log the HTTPS response code,
//response message (response.statusMessage)
// and content type (response.headers['content-type'])

       })
       .pipe(fs.createWriteStream('./future.jpg'));

require();