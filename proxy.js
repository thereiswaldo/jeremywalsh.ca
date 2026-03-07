const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Serve local static uploads directory naturally to the browser
app.use('/uploads', express.static('public/uploads'));

// Proxy everything else to TinaCMS backend
app.use(
    '/',
    createProxyMiddleware({
        target: 'http://localhost:4002',
        changeOrigin: true,
        ws: true,
    })
);

app.listen(4001, () => {
    console.log('TinaCMS Reverse Proxy running on http://localhost:4001');
});
