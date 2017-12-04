var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {

  /* Add your code here */
  https.get(requestOptions, function (response) {
//    var buffer = '';
    response.setEncoding('utf8');

    response.on('data', function (data) {
 //     buffer += data.toString();
      console.log('Chunk Received. Length:', data.length, data);
 //     console.log(buffer);
    });

    response.on('end', function() {
      console.log('Response stream complete.');

    });

  });

}

//call the function after the requestOptions variable
// console.log("message 2: ", getAndPrintHTML(requestOptions));
getAndPrintHTML(requestOptions);