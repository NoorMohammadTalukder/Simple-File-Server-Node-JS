const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Get the requested URL
    const url = req.url;

    // Set the content type based on the file extension
    let contentType;
    if (url.endsWith('.html')) {
        contentType = 'text/html';
    } else if (url.endsWith('.css')) {
        contentType = 'text/css';
    } else if (url.endsWith('.js')) {
        contentType = 'text/javascript';
    } else if (url.endsWith('.txt')) {
        contentType = 'text/plain';
    } else if (url.endsWith('.jpg') || url.endsWith('.jpeg')) {
        contentType = 'image/jpeg';
    } else {
        contentType = 'application/octet-stream';
    }

    if (url == '/') {
        const filePath = path.join(__dirname, 'public', 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                // If the file is not found, return a 404 error
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.write('404 Not Found');
                res.end();
            } else {
                // Set the response headers and send the file contents
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        });

    } else {
        // If the URL is not "/", read the file from the public folder
        const filePath = path.join(__dirname, 'public', url);
        fs.readFile(filePath, (err, data) => {
            if (err) {
                // If the file is not found, return a 404 error
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.write('404 Not Found');
                res.end();
            } else {
                // Set the response headers and send the file contents
                res.writeHead(200, { 'Content-Type': contentType });
                res.write(data);
                res.end();
            }
        });
    }
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
