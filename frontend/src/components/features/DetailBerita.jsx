import React, { useEffect, useState } from 'react';
import { Person, Reply } from 'react-bootstrap-icons';
import AsideDonatin from '../Donation/asideDonation';
import NewsService from "../../service/NewsService";
import { useParams } from 'react-router-dom';

const DetailBerita = () => {
    const { id } = useParams(); // Mendapatkan ID dari URL
    const [newsData, setNewsData] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Untuk loading state
    const [error, setError] = useState(null); // Untuk menangani error

    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                setIsLoading(true);
                const response = await NewsService.getNewsById(id); // Panggil API berdasarkan ID
                setNewsData(response); // Sesuaikan dengan struktur data API
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchNewsData();
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!newsData) {
        return <div>Berita tidak ditemukan.</div>;
    }

    // Format tanggal berita
    const formattedDate = new Date(newsData.createdAt).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="min-h-screen bg-white">
            <div className="relative h-96 overflow-hidden">
                <img
                    src="/images/header.jpg"
                    alt="Waterfall"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0">
                    <div className="container mx-auto px-6 h-full flex flex-col justify-center">
                        <h1 className="text-6xl md:text-5xl text-white font-bold mb-4 ml-16">
                            {newsData.title}
                        </h1>
                        <nav className="text-white/90 text-2xl ml-16">
                            Beranda &raquo; Fitur &raquo; Informasi & Berita &raquo; Lebih Lanjut
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-12 max-w-7xl px-4 mt-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <div className="mb-8">
                            <img
                                src={`/images/${newsData.imagePath}`} // Gambar berita
                                alt={newsData.title}
                                className="w-full rounded-lg mb-8"
                            />
                            <h2 className="text-3xl font-bold mb-3">{newsData.title}</h2>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                                <div className="flex items-center gap-1">
                                    <i className="bi bi-person-circle text-[#689F38]"></i>
                                    <span>{newsData.creatorName}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <i className="bi bi-calendar text-[#689F38]"></i>
                                    <span>{formattedDate}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <i className="bi bi-chat-dots text-[#689F38]"></i>
                                    <span>{newsData.comments.length} Komentar</span>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-2">{newsData.description}</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg mb-6">
                            <div className="flex items-center gap-4">
                                <img
                                    src={newsData.creator.imagePath ? `/images/${newsData.avatar}` : "/images/user.jpg"}
                                    alt="Penulis"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">{newsData.username}</h2>
                                    <p className="text-gray-600">
                                        {newsData.message}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold mb-2">Komentar pada Postingan</h2>
                            {newsData.comments.map((comment, index) => (
                                <div key={index} className="border-b border-gray-200">
                                    <div className="flex gap-4 p-4">
                                        <Person className="w-12 h-12 text-gray-400" />
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-bold">{comment.owner.name}</h3>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-gray-500 text-sm">{new Date(comment.createdAt).toLocaleString()}</span>
                                                    <button className="flex items-center text-green-600 hover:text-green-700">
                                                        <Reply className="w-4 h-4 mr-1" />
                                                        <span>Balas</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="text-gray-600">{comment.message}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <AsideDonatin />
                </div>

                <div className="lg:col-span-2 mb-8 mt-6">
                    <h2 className="text-2xl font-bold mb-6">Tinggalkan Komentar</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <input
                                type="text"
                                placeholder="Nama Lengkap"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <input
                                type="text"
                                placeholder="Subjek"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <textarea
                            rows="6"
                            placeholder="Komentar Anda"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                        </textarea>
                        <button
                            type="submit"
                            className="w-full bg-[#3B9E3F] text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                        >
                            KIRIMKAN KOMENTAR ANDA
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DetailBerita;
