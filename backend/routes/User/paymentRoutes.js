const express = require('express')
const router = express.Router();
const authenticateJWT = require('../../middlewares/authMiddleware');

const { upload, createPayment, deletePayment, getPayments, updatePayment, getPaymentById } = require('../../controller/User/paymentController')

router.get('/payments', upload.none(), authenticateJWT, getPayments);
router.get('/payments/:id', upload.none(), authenticateJWT, getPaymentById);
router.post('/payments/create', upload.single('image_path'), authenticateJWT, createPayment);
router.put('/payments/update/:id', upload.single('image_path'), authenticateJWT, updatePayment);
router.delete('/payments/delete/:id', upload.none(), authenticateJWT, deletePayment);

module.exports = router;