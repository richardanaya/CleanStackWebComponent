var express = require('express');
var app = express();

app.get('/api/foo', function (req, res) {
  res.send("bar");
});

app.listen(9999, function () {
  console.log('Example app listening on port 9999!');
});
