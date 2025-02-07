const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy requests to Node.js server for /node paths
app.use('/node', createProxyMiddleware({
    // target: 'http://localhost:3000', // Node.js server URL
    target: 'https://agritech-node.onrender.com', // Node.js server URL
    changeOrigin: true,
    pathRewrite: {
        '^/node': '' // Remove /node from the beginning of the URL path
    }
    // Example:
    // Original request: /node/welcome
    // After rewrite: /welcome
    // 
    // Original request: /node/users/profile
    // After rewrite: /users/profile
}));

// Proxy all other requests to Flask server
app.use('/', createProxyMiddleware({
    // target: 'http://127.0.0.1:5000', // Flask server URL
    target: 'https://agritech-vtu5.onrender.com', // Flask server URL
    changeOrigin: true
}));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Reverse proxy server is running on http://localhost:${PORT}`);
});