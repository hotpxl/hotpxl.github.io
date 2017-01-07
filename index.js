var restify = require('restify');
var utils = require('./utils');

var logger = utils.logging.newConsoleLogger(module.filename);

var server = restify.createServer({
  name: 'unit -> unit',
  version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.gzipResponse());
server.use(restify.bodyParser());

server.get(/.*/, restify.serveStatic({
  directory: './public',
  default: 'index.html'
}));

server.listen(8080, function() {
  logger.info(`${server.name} listening at ${server.url}`);
});
