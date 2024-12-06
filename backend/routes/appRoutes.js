const express = require('express');
const router = express.Router();

// import routes user
const authRouters = require('./authRoutes');
const bankRouters = require('./bankRoutes');


const profileRoutes = require('./profileRoutes')
const donationRoutes = require('./User/donationRoutes')
const edukasiRoutes = require('./User/edukasiRoutes')
const relawanRoutes = require('./User/relawanRoutes')
const newsRoutes = require('./User/newsRoutes')
const pengaduanRoutes = require('./User/pengaduanRoutes')
const paymentRoutes = require('./User/paymentRoutes')
const commentRoutes = require('./User/commentRoutes')

router.use(authRouters);
router.use(bankRouters);

// routes user
router.use(profileRoutes);
router.use(donationRoutes);
router.use(edukasiRoutes);
router.use(relawanRoutes);
router.use(newsRoutes);
router.use(pengaduanRoutes);
router.use(paymentRoutes);
router.use(commentRoutes);

module.exports = router;
