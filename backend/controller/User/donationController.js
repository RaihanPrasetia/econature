const { Donation, Payment, User, Comment } = require('../../associations'); // Pastikan ini sesuai dengan model Anda
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { Model } = require('sequelize');

// Konfigurasi Multer untuk upload gambar
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = path.join(__dirname, '../../frontend/public/images/donations');

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        cb(null, dir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Math.round(Math.random() * 1e9);
        const fileExt = path.extname(file.originalname).toLowerCase();
        cb(null, `${uniqueSuffix}${fileExt}`);
    },
});

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error('Only images (jpeg, jpg, png) are allowed!'));
    },
});

// **Create Donation**
const createDonation = async (req, res) => {
    const { title, description, target } = req.body;
    try {
        const newDonation = await Donation.create({
            title,
            description,
            target,
            createdBy: req.user.id, // Pastikan middleware autentikasi sudah diterapkan
            image_path: req.file ? req.file.filename : null,
        });
        res.status(201).json({ message: 'Donation created successfully', donation: newDonation });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Get All Donations**
const getDonations = async (req, res) => {
    try {
        const donations = await Donation.findAll({
            include: [
                {
                    model: Payment,
                    as: 'payments', // Pastikan asosiasi ini sudah didefinisikan dalam model Donation
                    attributes: ['id', 'total'],
                    include: [
                        {
                            model: User,
                            as: 'from', // Pastikan asosiasi antara Payment dan User juga sudah benar
                            attributes: ['id', 'image_path'],
                        },
                    ],
                },
            ],
            attributes: ['id', 'title', 'description', 'donation_count', 'target', 'image_path', 'message', 'username', 'avatar'],
        });
        res.status(200).json({ donations });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// **Get Donation by ID**
const getDonationById = async (req, res) => {
    const { id } = req.params;
    try {
        const donation = await Donation.findByPk(id, {
            include: [
                {
                    model: Payment,
                    as: 'payments', // Asosiasi antara Donation dan Payment
                    attributes: ['id', 'total'],
                    include: [
                        {
                            model: User,
                            as: 'from', // Asosiasi antara Payment dan User
                            attributes: ['id', 'image_path'],
                        },
                    ],
                },
                {
                    model: Comment,
                    as: 'comments', // Asosiasi antara Education dan User
                    attributes: ['id', 'message', 'createdAt'],
                    include: [{
                        model: User,
                        as: 'owner',
                        attributes: ['id', 'name', 'image_path']


                    }],
                },
            ],
            attributes: ['id', 'title', 'description', 'donation_count', 'target', 'image_path', 'message', 'username', 'avatar'],
        });

        if (!donation) {
            return res.status(404).json({ message: 'Donation not found' });
        }

        res.status(200).json({ donation });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// **Update Donation**
const updateDonation = async (req, res) => {
    const { id } = req.params;
    const { title, description, target } = req.body;
    try {
        const donation = await Donation.findByPk(id);
        if (!donation) {
            return res.status(404).json({ message: 'Donation not found' });
        }

        if (req.file) {
            const newImagePath = req.file.filename;
            const dir = path.join(__dirname, '../../frontend/public/images/donations');

            if (donation.image_path) {
                const oldImagePath = path.join(dir, donation.image_path);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }

            donation.image_path = newImagePath;
        }

        donation.title = title || donation.title;
        donation.description = description || donation.description;
        donation.target = target || donation.target;

        await donation.save();
        res.status(200).json({ message: 'Donation updated successfully', donation });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Delete Donation**
const deleteDonation = async (req, res) => {
    const { id } = req.params;
    try {
        const donation = await Donation.findByPk(id);
        if (!donation) {
            return res.status(404).json({ message: 'Donation not found' });
        }

        if (donation.image_path) {
            const dir = path.join(__dirname, '../../frontend/public/images/donations');
            const imagePath = path.join(dir, donation.image_path);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        await donation.destroy();
        res.status(200).json({ message: 'Donation deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createDonation,
    getDonations,
    getDonationById,
    updateDonation,
    deleteDonation,
    upload,
};
