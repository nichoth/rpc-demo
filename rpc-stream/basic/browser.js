var rpc = require('rpc-stream');
var net = require('net');

var client = rpc()
var con = net.connect(3000)
client.pipe(con).pipe(client)

var remote = client.wrap(['hello'])

remote.hello('steve', function(err, res) {
  console.log(res)
})
