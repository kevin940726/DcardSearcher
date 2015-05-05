var port = 1337;
var express = require('./config/express');
var google = require('google')
var app = express();


app.listen(process.env.PORT || port);
module.exports = app;
app.get('/',function(request, response){
    response.end('Hello');
});
console.log('Server running at http://localhost:' + port);