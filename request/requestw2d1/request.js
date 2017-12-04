var request = require('request');
var fs = require('fs');

function downloadCompleted() {
  console.log('Success! Image Finished Downloading');
}

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
         console.log('We\'ve encountered an error; sorry!');
       })
       .on('response', function (response) {
         console.log('Downloading Image ...');
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response Message: ', response.statusMessage);
         console.log('Content Type: ', response.headers['content-type']);

//Use .on('response') to log the HTTPS response code,
//response message (response.statusMessage)
// and content type (response.headers['content-type'])

       })
       .pipe(fs.createWriteStream('./future.jpg')
       .on('finish', downloadCompleted));
