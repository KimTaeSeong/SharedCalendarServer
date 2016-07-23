var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('test get');
});

app.post('/', function (req, res) {
	res.send('test post');
});

app.get('/test/', function(rq, res){
	res.send('heello');
});
 
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
 
  console.log('앱은 http://%s:%s 에서 작동 중입니다.', host, port);
});
