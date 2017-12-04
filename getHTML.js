var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {
  /* Add your code here */
  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      callback(data);
    });

    response.on('end', function() {
      console.log('Response stream complete.');

    });

  });
}

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);