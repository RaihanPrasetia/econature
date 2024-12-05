'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pengaduans', [
      {
        name: 'Ahmad Fauzi',
        email: 'ahmad.fauzi@example.com',
        jenis_sampah: 'Plastik',
        no_handphone: '081234567890',
        alamat: 'Jl. Mawar No. 123, Surabaya',
        provinsi: 'Sumatra Utara',
        description: 'blasldlalsdls',
        image_path: 'p1.png',
        status: 'Diproses',
        createdBy: 2, // Sesuaikan dengan ID pengguna di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Siti Aminah',
        email: 'siti.aminah@example.com',
        jenis_sampah: 'Kaca',
        no_handphone: '082345678901',
        provinsi: 'Sumatra Utara',
        description: 'blasldlalsdls',
        status: 'Selesai',
        image_path: 'p2.png',
        alamat: 'Jl. Kenanga No. 45, Bandung',
        createdBy: 3, // Sesuaikan dengan ID pengguna di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Budi Santoso',
        email: 'budi.santoso@example.com',
        jenis_sampah: 'Kertas',
        provinsi: 'Sumatra Utara',
        description: 'blasldlalsdls',
        status: 'Ditolak',
        image_path: 'p3.png',
        no_handphone: '083456789012',
        alamat: 'Jl. Melati No. 67, Jakarta',
        createdBy: 3, // Sesuaikan dengan ID pengguna di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pengaduans', null, {});
  }
};
