import { readFileSync } from 'fs';
import { connect } from 'http2';
import { stdin, stdout } from 'process';

const client = connect('https://localhost:8443', {
    ca: readFileSync('localhost-cert.pem'),
});

const req = client.request({ ':method': 'POST' });

// pipe stdin to stream and pipe stream to stdout
stdin.pipe(req).pipe(stdout)

req.on('end', () => {
    console.log('Request Complete');
    client.close();
});