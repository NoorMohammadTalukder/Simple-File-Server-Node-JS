# HTTP Server to serve static files

This Node.js code creates an HTTP server that can serve static files like HTML, CSS, JavaScript, images, and text files. The server reads the requested URL and determines the file extension to set the content type accordingly.

##Live Link:

https://momentous-aged-wax.glitch.me/

## Dependencies

This code uses the built-in Node.js modules `http`, `fs`, and `path`. 

## How to run

1. Save the code in a file named `server.js`.
2. Open a terminal and navigate to the folder containing the `server.js` file.
3. Run the command `node server.js`.
4. Open a web browser and go to `http://localhost:3000/` to see the homepage.

## Code Explanation

- First, the required modules `http`, `fs`, and `path` are imported.
- The `createServer()` method of the `http` module is used to create an HTTP server.
- The server listens for incoming requests and sends responses using the `req` and `res` objects.
- The requested URL is extracted from the `req` object using `req.url`.
- The content type of the requested file is determined based on the file extension.
- If the requested URL is `/`, the server reads the `index.html` file from the `public` folder using `fs.readFile()`. If the file is not found, a 404 error is returned.
- If the requested URL is not `/`, the server reads the requested file from the `public` folder using `fs.readFile()`. If the file is not found, a 404 error is returned.
- The server sends the file contents as the response body with the appropriate content type set in the response headers.
- The server listens on port 3000 using `server.listen()`. When the server starts, a message is logged to the console.
