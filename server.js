const express = require('express');
const app = express();

// Use Railway's dynamic port
const PORT = process.env.PORT || 3000;

// Simple web interface
app.get('/', (req, res) => {
  res.send(`
    <h1>🚀 V2Ray VPN Server</h1>
    <p>✅ Server is running successfully!</p>
    <p>🌐 Domain: ${process.env.RAILWAY_PUBLIC_DOMAIN || 'Not set'}</p>
    <p>🔧 Configure your V2Ray client to connect to this server</p>
    <hr>
    <small>This is just a status page. V2Ray runs on a different protocol.</small>
  `);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'v2ray-vpn' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Web interface running on port ${PORT}`);
});
