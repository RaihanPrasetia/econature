import React from 'react'

import { Routes, Route } from 'react-router-dom'
import TentangKami from '../components/TentangKami'
import Kontak from '../components/Kontak'
import { Berita, DaftarPengaduan, Donasi, DonasiPage, Edukasi, KebijakanPrivasi, LaporanPengguna1, LaporanPengguna2, LaporanPengguna3, LaporanPengguna4, LaporanPengguna5, LaporanPengguna6, Pengaduan, Poin, Relawan } from '../components/features'
import PembayaranDonasi from '../components/features/PembayaranDonasi'
import Home from '../components/Home'
import Error from '../components/Error'
import PoinRiwayat from '../components/features/PoinRiwayat'
import PoinTukar from '../components/features/PoinTukar'
import PoinTukarDetail from '../components/features/PoinTukarDetail'
import PembayaranDonasiDetail from '../components/features/PembayaranDonasiDetail'
import Profile from '../components/Profile'
import ProfileEdit from '../components/ProfileEdit'
import DaftarRelawan from '../components/features/DaftarRelawan'
import DetailDonasi from '../components/features/DetailDonasi'
import DetailEdukasi from '../components/features/DetailEdukasi'
import DetailBerita from '../components/features/DetailBerita'



function Dashboard() {
    return (
        <>

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/tentang-kami" element={<TentangKami />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile-edit" element={<ProfileEdit />} />
                <Route path="/kontak" element={<Kontak />} />
                <Route path="/error" element={<Error />} />
                <Route path="/Donasi" element={<Donasi />} />
                <Route path="/Donasi/:id" element={<DetailDonasi />} />
                <Route path="/DonasiPage" element={<DonasiPage />} />
                <Route path="/PembayaranDonasi" element={<PembayaranDonasi />} />
                <Route path="/PembayaranDonasiDetail" element={<PembayaranDonasiDetail />} />
                <Route path="/Edukasi" element={<Edukasi />} />
                <Route path="/Edukasi/:id" element={<DetailEdukasi />} />

                <Route path="/Relawan" element={<Relawan />} />
                <Route path="/Daftar-Relawan" element={<DaftarRelawan />} />
                <Route path="/Pengaduan" element={<Pengaduan />} />
                <Route path="/KebijakanPrivasi" element={<KebijakanPrivasi />} />
                <Route path="/DaftarPengaduan" element={<DaftarPengaduan />} />
                <Route path="/LaporanPengguna1" element={<LaporanPengguna1 />} />
                <Route path="/LaporanPengguna2" element={<LaporanPengguna2 />} />
                <Route path="/LaporanPengguna3" element={<LaporanPengguna3 />} />
                <Route path="/LaporanPengguna4" element={<LaporanPengguna4 />} />
                <Route path="/LaporanPengguna5" element={<LaporanPengguna5 />} />
                <Route path="/LaporanPengguna6" element={<LaporanPengguna6 />} />
                <Route path="/Poin" element={<Poin />} />
                <Route path="/PoinRiwayat" element={<PoinRiwayat />} />
                <Route path="/PoinTukar" element={<PoinTukar />} />
                <Route path="/poin-tukar-detail" element={<PoinTukarDetail />} />
                <Route path="/Berita" element={<Berita />} />
                <Route path="/Berita/:id" element={<DetailBerita />} />


            </Routes>
        </>
    )
}

export default Dashboard