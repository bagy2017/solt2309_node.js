'use strict';

const express = require('express');
var bodyParser = require('body-parser')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(bodyParser.text({type: '*/*'}));

app.get('/', (req, res) => {
  res.send('Service X is alive\n');
});

app.post("/1", (req, res) => {
  res.send(req.body);
});

app.post("/2", (req, res) => {
  res.send(req.body);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);