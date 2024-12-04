'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Donations', [
      {
        title: 'Help Build a School',
        description: 'We are raising funds to build a new school for underprivileged children.',
        createdBy: 1, // Sesuaikan dengan ID pengguna yang ada di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Emergency Relief for Flood Victims',
        description: 'Donations to help flood victims rebuild their lives.',
        createdBy: 2, // Sesuaikan dengan ID pengguna yang ada di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Support Local Healthcare Workers',
        description: 'Contribute to providing PPE and resources for local hospitals during the pandemic.',
        createdBy: 3, // Sesuaikan dengan ID pengguna yang ada di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Donations', null, {});
  }
};
