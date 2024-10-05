const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    const url = req.url;

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
