const QRcode = require('qrcode');

const generateQRCode = async (req, res) => {
    try {
        const { text } = req.body;
        if (!text) {
            return res.status(400).send({ message: 'Text is required' });
        }

        const url = await QRcode.toDataURL(text);
        res.send({ url });
    } catch (error) {
        res.send(500).send({ message: 'Error generating QR code', error });
    }
};

module.exports = { generateQRCode };
