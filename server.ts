// import createSecureServer from http2
import { readFileSync } from 'fs';
import { createSecureServer } from 'http2';
import { stdin, stdout } from 'process';

// Create a http2 server
const server = createSecureServer({
    key: readFileSync('localhost-privkey.pem'),
    cert: readFileSync('localhost-cert.pem')
});

// listen for a stream event
server.on('stream', (stream) => {

    // pipe stdin to stream and pipe stream to stdout
    stdin.pipe(stream).pipe(stdout);
});

server.listen(8443);