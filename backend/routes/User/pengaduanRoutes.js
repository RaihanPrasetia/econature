const express = require('express')
const router = express.Router();
const authenticateJWT = require('../../middlewares/authMiddleware');

const { upload, createPengaduan, deletePengaduan, getPengaduan, updatePengaduan, getPengaduanById } = require('../../controller/User/pengaduanController')

router.get('/pengaduans', upload.none(), authenticateJWT, getPengaduan);
router.get('/pengaduans/:id', upload.none(), authenticateJWT, getPengaduanById);
router.post('/pengaduans/create', upload.single('image_path'), authenticateJWT, createPengaduan);
router.put('/pengaduans/update/:id', upload.single('image_path'), authenticateJWT, updatePengaduan);
router.delete('/pengaduans/delete/:id', upload.none(), authenticateJWT, deletePengaduan);

module.exports = router;