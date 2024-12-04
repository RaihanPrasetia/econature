'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Newses', [
      {
        title: 'Climate Change Awareness Campaign',
        description: 'A comprehensive campaign to raise awareness about climate change and its effects.',
        quotes: 'Together, we can save our planet.',
        image_path: '/images/climate-awareness.jpg',
        createdBy: 3, // Sesuaikan dengan ID pengguna di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Local Community Cleanup Drive',
        description: 'An initiative to clean up local neighborhoods and promote proper waste management.',
        quotes: 'Cleanliness is next to godliness.',
        image_path: '/images/community-cleanup.jpg',
        createdBy: 2, // Sesuaikan dengan ID pengguna di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Recycling Awareness Workshop',
        description: 'A workshop to educate the public about the importance of recycling.',
        quotes: 'Reduce, reuse, recycle.',
        image_path: '/images/recycling-workshop.jpg',
        createdBy: 3, // Sesuaikan dengan ID pengguna di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Newses', null, {});
  }
};
