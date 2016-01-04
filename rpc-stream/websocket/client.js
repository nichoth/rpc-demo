var rpc = require('rpc-stream');
var shoe = require('shoe');

var stream = shoe('/rpc');
var rpcClient = rpc();
stream.pipe(rpcClient).pipe(stream);

var remote = rpcClient.wrap([ 'hello' ]);

remote.hello('Alice', function(err, res) {
  if (err) throw err;
  document.body.innerHTML = res;
});
