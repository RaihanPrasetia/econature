import React from 'react';
import { Link } from 'react-router-dom';

const complaints = [
  {
    id: 1,
    date: '21 Mei, 2024',
    title: 'Sampah yang menumpuk ditepi jalan',
    location: 'Pekanbaru, Riau, Indonesia',
    image: '/images/e1.png',
    slug: 'LaporanPengguna1'
  },
  {
    id: 2,
    date: '20 Maret, 2024',
    title: 'Sampah yang menumpuk dipembuangan sampah',
    location: 'Tegal, Jawa Tengah, Indonesia',
    image: '/images/e2.png',
    slug: 'LaporanPengguna3'
  },
  {
    id: 3,
    date: '21 Januari, 2024',
    title: 'Sampah yang menumpuk ditepi sungai',
    location: 'Kota Jambi, Jambi, Indonesia',
    image: '/images/e3.png',
    slug: 'LaporanPengguna6'
  }
];


const news = [

  {
    id: 1,
    title: 'Pemulihan Terumbu Karang di Indonesia',
    date: '29 Juli, 2024',
    comments: '154 Komentar',
    image: '/images/b4.png',
    featured: true,
    slug: 'Berita4'
  },

  {
    id: 2,
    title: 'Gerakan Menanam 1 Juta Pohon untuk Masa Depan Hijau',
    date: '29 September, 2024',
    image: '/images/masadepan.png',
    slug: 'Berita6'
  },
  {
    id: 3,
    title: 'Indonesia Catat Rekor Suhu Tertinggi Akibat Pemanasan Global',
    date: '25 Oktober, 2024',
    image: '/images/b3.png',
    slug: 'Berita3'
  }
];

const donationAmounts = [
  5000, 10000, 25000, 50000, 75000, 100000, 200000
];

const Home = () => {
  return (
    <div>
      <div className="relative bg-cover bg-center h-[600px]" style={{ backgroundImage: "url('/images/bg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-4xl font-bold text-white mb-2">
            Yuk Gabung Bersama
          </h1>
          <h1 className="text-4xl md:text-8xl font-bold text-white mb-2">
            ECONATURE
          </h1>
          <p className="text-white text-lg mb-12">
            Kurangi plastik, tambahkan senyuman untuk Bumi kita!
          </p>
          <button className="bg-[#3B9E3F] text-white px-8 py-3 rounded-lg w-fit hover:bg-green-700">
            <Link to="/daftar">
              MULAI
            </Link>
          </button>
        </div>
      </div>
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <img src="/images/daurulang.png" alt="Recycle" className="rounded-lg shadow-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Daur Ulang</h3>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <img src="/images/nanampohon.png" alt="Recycle" className="rounded-lg shadow-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Penanaman Pohon</h3>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/images/tentangkami.png" alt="About Econature" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#3B9E3F] mb-4">Tentang Kami</h2>
            <p className="text-gray-600 mb-6">
              Selamat datang di Econature!
              <p>Kami percaya perubahan besar dimulai dari hal kecil. Bersama-sama menciptakan dunia yang lebih bersih, mari tingkatkan kesadaran akan dampak plastik sekali pakai dan beralih ke solusi ramah lingkungan.</p><br />
              <p>Dengan program komunitas yang seru, acara yang menarik, dan seminar yang penuh inspirasi, Anda dapat belajar sambil bersenang-senang. Bergabunglah dengan kami, dukung kampanye lingkungan, dan jadilah bagian dari perubahan positif untuk bumi kita. Bersama kita bisa, mewujudkan masa depan yang hijau untuk generasi bangsa!</p>

            </p>
            <button className="bg-[#3B9E3F] text-white px-6 py-2 rounded hover:bg-green-700">
              <Link to="/tentang-kami">
                LEBIH LANJUT
              </Link>
            </button>
          </div>
        </div>
      </section>

      <div className="relative w-full min-h-[500px] mt-2">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/nanam.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-40 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Bersama Wujudkan Dunia Lebih Baik
            </h1>
            <p className="text-lg opacity-90">
              Setiap donasi Anda membantu mengurangi sampah plastik dan menjaga alam kita tetap lestari. Bersama, kita bisa mewujudkan masa depan yang lebih bersih dan hijau.
            </p>
          </div>
          <div className="lg:w-1/2 bg-white/10 backdrop-transparent rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-[#FFFFFF]">Jumlah Donasi</h2>
            <div className="grid grid-cols-4 gap-3 mb-4">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  className="p-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:border-green-500 transition-colors"
                >
                  {amount.toLocaleString()}
                </button>
              ))}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Lainnya"
                  className="w-full p-2 rounded-md border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                />
              </div>
            </div>
            <button className="w-full bg-[#3B9E3F] text-white py-3 rounded-md hover:bg-green-700 transition-colors font-medium">
              <Link to="/donasi">
                MULAI DONASI
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 bg-white py-16 ">
        <h2 className="text-[#222222] font-medium text-2xl mb-2">Laporkan Keluhan anda!</h2>
        <h1 className="text-4xl text-[#3B9E3F] font-bold">Pengaduan Econature</h1><br />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {complaints.map((complaint) => (
            <Link
              key={complaint.id}
              to={`/${complaint.slug}`}
              className="block bg-gray-100 rounded-lg overflow-hidden transform shadow-sm transition-shadow duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-48 bg-cover bg-center">
                <img
                  src={complaint.image}
                  alt={complaint.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <span>• {complaint.date}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{complaint.title}</h3>
                <div className="space-x-2">
                  <i className="bi bi-geo-alt-fill text-[#689F38]"></i>
                  <span className="text-gray-700">{complaint.location}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-[#222222] font-medium text-2xl mb-2">Baca Informasi & Berita terbaru kami</h2>
            <h1 className="text-4xl text-[#3B9E3F] font-bold">Informasi & Berita</h1>
          </div>
          <button className="bg-[#3B9E3F] text-white px-6 py-2 rounded-md hover:bg-green-700">
            <a href="/Berita">
              LEBIH LANJUT
            </a>
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
          <Link
            to={`/${news[0].slug}`}
            className="block bg-gray-100 rounded-lg overflow-hidden transform shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="col-span-1 lg:col-span-1">
              <div className="relative rounded-lg overflow-hidden shadow-md">
                <img
                  src={news[0].image}
                  alt={news[0].title}
                  className="w-full h-[410px] object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
                  <div className="flex items-center gap-4 text-sm">
                    <div className='space-x-2'>
                      <i class="bi bi-calendar text-[#689F38]"></i>
                      <span>{news[0].date}</span>
                    </div>
                    <div className='space-x-2'>
                      <i class="bi bi-chat-dots text-[#689F38]"></i>
                      <span>{news[0].comments}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">{news[0].title}</h3>
                </div>
              </div>
            </div>
          </Link>

          <div className="col-span-1 lg:col-span-1 space-y-6">
            {news.slice(1).map((item) => (
              <div key={item.id} className="flex gap-4 bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-56 h-48 object-cover"
                />
                <div className="p-4 flex flex-col justify-between">
                  <div>
                    <div className='space-x-2'>
                      <i class="bi bi-calendar text-[#689F38]"></i>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <h3 className="font-bold mt-2 text-2xl">{item.title}</h3>
                  </div>
                  <Link
                    to={`/${item.slug}`}
                    className="text-[#3B9E3F] hover:text-green-700 text-sm flex items-center gap-1 font-semibold"
                  >
                    BACA SELENGKAPNYA
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-8 flex justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <h2 className="text-4xl font-bold mb-4">KENAPA ECONATURE?</h2>
          <p className="text-lg mb-8">
            Bergabung dengan Econature untuk aksi nyata menjaga lingkungan, kumpulkan poin dan reward, serta nikmati acara edukatif dan acara eksklusif yang mendukung masa depan lebih hijau.
          </p>
          <button className="bg-[#3B9E3F] hover:bg-green-700 text-white font-bold py-3 px-6 rounded">
            <Link to="/daftar">
              DAFTAR
            </Link>
          </button>
        </div>
      </div><br />

      <div className="max-w-7xl mx-auto p-6 mt-4 mb-16">
        <div className="text-left mb-12">
          <h2 className=" font-medium text-2xl mb-2 text-[#3B9E3F]" >Artikel Pengetahuan</h2>
          <h1 className="text-4xl text-[#222222] font-bold">Edukasi Econature</h1>
        </div>

        <div className="grid w-full md:grid-cols-3 gap-12">

          <div className='w-full bg-white shadow-lg rounded-lg hover:scale-105 hover:shadow-xl transform duration-300 cursor-pointer'>
            <div className="h-[240px] relative ">
              <img
                src="/artikel/artikel1.png"
                alt="artikel 1"
                className="absolute w-full h-full object-cover bg-black bg-opacity-50 rounded-t-lg"
              />
              <div className="absolute bottom-0 left-0 w-full h-[180px] bg-gradient-to-t from-gray-800 to-transparent "></div>
              <span className="text-white font-semibold absolute bottom-4 left-4">02 Oktober 2024</span>
            </div>
            <div className='w-full flex flex-col space-y-2 py-4 px-8'>
              <span className='text-[24px] font-bold text-black text-center'>Pengenalan Dasar Plastik</span>
              <span className='text-[18px] pl-6 font-semibold text-[#3B9E3F] '>Baca selengkapnya</span>
            </div>
          </div>

          <div className='w-full bg-white shadow-lg rounded-lg hover:scale-105 hover:shadow-xl transform duration-300 cursor-pointer'>
            <div className="h-[240px] relative">
              <img
                src="/artikel/artikel2.png"
                alt="artikel 1"
                className="absolute w-full h-full object-cover bg-black bg-opacity-50 rounded-t-lg"
              />
              <div className="absolute bottom-0 left-0 w-full h-[180px] bg-gradient-to-t from-gray-800 to-transparent "></div>
              <span className="text-white font-semibold absolute bottom-4 left-4">02 Oktober 2024</span>
            </div>
            <div className='w-full flex flex-col space-y-2 py-4 px-8'>
              <span className='text-[24px] font-bold text-black text-center'>Pengenalan Dasar Plastik</span>
              <span className='text-[18px] pl-6 font-semibold text-[#3B9E3F] '>Baca selengkapnya</span>
            </div>

          </div>

          <div className='w-full bg-white shadow-lg rounded-lg hover:scale-105 hover:shadow-xl transform duration-300 cursor-pointer'>
            <div className="h-[240px] relative">
              <img
                src="/artikel/artikel3.png"
                alt="artikel 1"
                className="absolute w-full h-full object-cover bg-black bg-opacity-50 rounded-t-lg"
              />
              <div className="absolute bottom-0 left-0 w-full h-[180px] bg-gradient-to-t from-gray-800 to-transparent "></div>
              <span className="text-white font-semibold absolute bottom-4 left-4">02 Oktober 2024</span>
            </div>
            <div className='w-full flex flex-col space-y-2 py-4 px-8'>
              <span className='text-[24px] font-bold text-black text-center'>Pengenalan Dasar Plastik</span>
              <span className='text-[18px]  font-semibold text-[#3B9E3F] '>Baca selengkapnya</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;