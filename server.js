const express = require('express');
const https = require('https');
const http = require('http');
const path = require('path');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(express.static(__dirname + '/dist'));

app.route('/api/catFact/').get((req, res) => {
  let options = {
    host: 'catfact.ninja',
    port: 443,
    path: '/fact?max_length=100',
    method: 'GET'
  };

  let factRequest = https.request(options, function (factResponse) {
    factResponse.setEncoding('utf8');

    let body = '';
    factResponse.on('data', function (chunk) {
      body += chunk;
      body = JSON.parse(body)
      res.send(body);
    });
  });

  factRequest.end();
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const server = http.createServer(app);

server.listen(process.env.PORT || 8080);