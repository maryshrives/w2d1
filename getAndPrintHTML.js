var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
https.get(requestOptions, function (response) {
  var buffer = '';
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    if (data) {
      buffer += data.toString();
    }
    console.log('Chunk Received. Length:', data.length);
    console.log(data.toString());
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log('Response stream complete.');
 //   console.log('response end: ', data.toString());

  });

});

}

getAndPrintHTML();