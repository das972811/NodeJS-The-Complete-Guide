const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    const url = req.url;
    const method = req.method;
    console.log(method);

    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        console.log('This is a test');
        return;
    } else {
        console.log('This is also a fucking test');
        return;
    }

    res.end();

    // process.exit();

});

server.listen(3000);
