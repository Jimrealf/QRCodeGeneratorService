const express = require('express');
const router = express.Router();
const qrCodeController = require('../controllers/qrCodeController');

// Generate QR code
router.post('/generate', qrCodeController.generateQRCode);

module.exports = router;
