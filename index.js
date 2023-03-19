"use strict";
exports.__esModule = true;
// import createSecureServer from http2
var fs_1 = require("fs");
var http2_1 = require("http2");
// Create a http2 server
var server = (0, http2_1.createSecureServer)({
    key: (0, fs_1.readFileSync)('localhost-privkey.pem'),
    cert: (0, fs_1.readFileSync)('localhost-cert.pem')
});
server.on('error', function (err) { return console.error(err); });
server.on('stream', function (stream, headers) {
    // stream is a Duplex
    stream.respond({
        'content-type': 'text/html',
        ':status': 200
    });
    stream.end('<h1>Hello World</h1>');
});
server.listen(8443);
