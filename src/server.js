const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const proxy = httpProxy.createProxyServer();

// Define the route on your proxy server that corresponds to the API endpoint
app.all('/api/authaccount/registration', (req, res) => {
  // Set CORS headers to allow requests from your frontend
  res.setHeader('Access-Control-Allow-Origin', '*'); // Replace with your actual frontend domain
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Proxy the request to the actual API server
  proxy.web(req, res, { target: 'http://restapi.adequateshop.com' }); // Replace with the API server URL
});

// Start the proxy server on a specific port
const port = 3000; // Choose a port number
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
