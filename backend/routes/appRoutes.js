const express = require('express');
const router = express.Router();

// import routes user
const authRouters = require('./authRoutes');
const profileRoutes = require('./profileRoutes')
const donationRoutes = require('./User/donationRoutes')
const edukasiRoutes = require('./User/edukasiRoutes')
const relawanRoutes = require('./User/relawanRoutes')
const newsRoutes = require('./User/newsRoutes')

router.use(authRouters);

// routes user
router.use(profileRoutes);
router.use(donationRoutes);
router.use(edukasiRoutes);
router.use(relawanRoutes);
router.use(newsRoutes);

module.exports = router;
