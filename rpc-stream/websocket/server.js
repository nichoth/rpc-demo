var http = require('http');
var shoe = require('shoe');
var ecstatic = require('ecstatic')(__dirname + '/public');
var rpc = require('rpc-stream');

var server = http.createServer(ecstatic);
server.listen(9999);

var sock = shoe(function (stream) {
  var rpcServer = rpc({
    hello: function(name, cb) {
      cb(null, 'hello, '+name);
    }
  });
  rpcServer.pipe(stream).pipe(rpcServer);
});

sock.install(server, '/rpc');
