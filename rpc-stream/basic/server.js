var rpc = require('rpc-stream');
var net = require('net');

net.createServer(function(con) {

  // create one server per connection
  var server = rpc({
    hello: function (name, cb) {
      cb(null, 'hello, '+name)
    }
  });

  server.pipe(con).pipe(server)

}).listen(3000)
