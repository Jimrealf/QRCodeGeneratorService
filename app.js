const express = require('express');
const qrCodeRoutes = require('./routes/qrCodeRoutes');

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use('/api/qrcode', qrCodeRoutes);

module.exports = app;
