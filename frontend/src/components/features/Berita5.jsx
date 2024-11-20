import React from 'react';
import { Person, Reply } from 'react-bootstrap-icons';

const Berita5 = () => {
  return (
    <div className="min-h-screen bg-white ">
      <div className="relative h-96 overflow-hidden">
        <img 
          src="/images/header.jpg"
          alt="Waterfall"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0">
          <div className="container mx-auto px-6 h-full flex flex-col justify-center">
            <h1 className="text-6xl md:text-5xl text-white font-bold mb-4 ml-16">
              Econature: Bersama untuk Bumi yang <br /> Lebih Lestari
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
                src="/images/y4.png" 
                alt="No Plastic Campaign"
                className="w-full rounded-lg mb-8"
              />
              <h2 className="text-3xl font-bold mb-3">Kesadaran Lingkungan Meningkat : Ribuan Relawan Ikut Gerak Bersih Pantai</h2>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                      <i class="bi bi-person-circle text-[#689F38]"></i>
                      <span>Zendaya Putri</span>
                  </div>
                  <div className="flex items-center gap-1">
                      <i class="bi bi-calendar text-[#689F38]"></i>
                      <span>12 Agustus, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                      <i class="bi bi-chat-dots text-[#689F38]"></i>
                      <span>104 Komentar</span>
                  </div>
                  </div>
              <p className="text-gray-600 leading-relaxed mb-2">
              Gerakan bersih pantai yang digelar di berbagai wilayah Indonesia melibatkan ribuan relawan yang turun langsung untuk membersihkan sampah plastik dan limbah yang mencemari kawasan pesisir. Aksi ini bertujuan untuk meningkatkan kesadaran masyarakat akan pentingnya menjaga kebersihan pantai serta melindungi ekosistem laut yang semakin terancam. Selain pembersihan, acara ini juga diisi dengan edukasi tentang dampak sampah plastik terhadap kehidupan laut, seperti terumbu karang dan biota laut lainnya.
              </p>
              <p className="text-gray-600 leading-relaxed  mb-2">
              Para peserta dari berbagai kalangan, mulai dari pelajar hingga komunitas lingkungan, ikut serta dalam kegiatan yang digelar di beberapa pantai wisata populer. Dalam acara ini, mereka tidak hanya membersihkan pantai tetapi juga belajar tentang pengelolaan sampah, daur ulang, serta solusi ramah lingkungan yang bisa diterapkan sehari-hari. Dengan kegiatan ini, diharapkan kesadaran untuk mengurangi penggunaan plastik sekali pakai dan mendukung konservasi laut semakin meluas.
              </p>
              <p className="text-gray-600 leading-relaxed  mb-2">
              Meskipun aksi bersih pantai ini sudah mendapatkan dukungan luas dari masyarakat dan berbagai organisasi, tantangan besar dalam mengatasi polusi laut masih terus ada. Oleh karena itu, partisipasi setiap individu sangat dibutuhkan untuk menjaga kebersihan lingkungan pesisir dan melindungi keberagaman hayati laut agar generasi mendatang dapat menikmati keindahan alam yang sama.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="flex items-center gap-4">
                <img 
                    src="/images/y44.png" 
                    alt="Author" 
                    className="w-100 h-100 rounded-full object-cover"
                />
                <div>
                    <h2 className="text-2xl font-bold mb-2">Tentang Penulis</h2>
                    <p className="text-gray-600">
                    Halo! Saya adalah seorang jurnalis yang aktif bergerak dalam komunitas lingkungan. Selain menulis tentang isu-isu keberlanjutan, saya juga terlibat sebagai relawan dalam berbagai program konservasi alam.
                    </p>
                </div>
                </div>
            </div>
            
            <div className="space-y-0">
              <h2 className="text-2xl font-bold mb-2">Komentar pada Postingan</h2>
            <div className="border-b border-gray-200">
                <div className="flex gap-4 p-4">
                <Person className="w-12 h-12 text-gray-400" />
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">Jimy Rizqi</h3>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-500 text-sm">Diposting : 19 Agustus 2024, 13.00</span>
                        <button className="flex items-center text-green-600 hover:text-green-700">
                        <Reply className="w-4 h-4 mr-1" />
                        <span>Balas</span>
                        </button>
                    </div>
                    </div>
                    <p className="text-gray-600">
                    Sangat menyenangkan melihat begitu banyak orang yang terlibat dalam gerakan bersih pantai ini. Namun, kita juga perlu fokus pada pencegahan polusi plastik di sumbernya, misalnya dengan mendukung kebijakan untuk mengurangi penggunaan plastik sekali pakai di masyarakat.
                    </p>
                </div>
                </div>

                <div className="ml-16 border-l-2 border-gray-100">
                <div className="flex gap-4 p-4 border-t border-gray-100">
                    <Person className="w-12 h-12 text-gray-400" />
                    <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold">Dafa Maheswara</h3>
                        <div className="flex items-center gap-4">
                        <span className="text-gray-500 text-sm">Diposting: 24 Agustus, 2024 20.37</span>
                        <button className="flex items-center text-green-600 hover:text-green-700">
                            <Reply className="w-4 h-4 mr-1" />
                            <span>Balas</span>
                        </button>
                        </div>
                    </div>
                    <p className="text-gray-600">
                    Gerakan seperti ini memang sangat positif, tapi saya berharap ada lebih banyak program yang mendidik masyarakat tentang cara memilah sampah di rumah agar sampah yang masuk ke laut dapat dikurangi dari hulu. Edukasi yang lebih intensif tentang perilaku ramah lingkungan harus terus digalakkan.
                    </p>
                    </div>
                </div>

                <div className="flex gap-4 p-4 border-t border-gray-100">
                    <Person className="w-12 h-12 text-gray-400" />
                    <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold">Maya Ernawati</h3>
                        <div className="flex items-center gap-4">
                        <span className="text-gray-500 text-sm">Diposting: 1 September, 2024, 22.23 </span>
                        <button className="flex items-center text-green-600 hover:text-green-700">
                            <Reply className="w-4 h-4 mr-1" />
                            <span>Balas</span>
                        </button>
                        </div>
                    </div>
                    <p className="text-gray-600">
                    Aksi bersih pantai ini jelas sangat bermanfaat untuk ekosistem laut, tetapi menurut saya kita juga perlu bekerja sama dengan pemerintah dan sektor swasta untuk menyediakan solusi pengelolaan sampah yang lebih efektif, termasuk pembangunan infrastruktur untuk mendukung daur ulang di area pantai.
                    </p>
                    </div>
                </div>
                </div>
            </div>

            <div className="flex gap-4 p-4 border-b border-gray-200">
                <Person className="w-12 h-12 text-gray-400" />
                <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">Valeh Muhammad</h3>
                    <div className="flex items-center gap-4">
                    <span className="text-gray-500 text-sm">Diposting: 6 September, 2024 19.30</span>
                    <button className="flex items-center text-green-600 hover:text-green-700">
                        <Reply className="w-4 h-4 mr-1" />
                        <span>Balas</span>
                    </button>
                    </div>
                </div>
                <p className="text-gray-600">
                Valeh Muhammad
                Saya sangat mendukung acara seperti ini, namun saya berharap bahwa aksi bersih pantai ini bisa lebih sering dilakukan dan melibatkan lebih banyak kawasan pesisir. Selain itu, sangat penting untuk memberikan pelatihan kepada masyarakat setempat tentang cara menjaga kebersihan pantai secara berkelanjutan.
                    Kita perlu solusi yang cepat
                </p>
                </div>
            </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">EcoNature</h3>
              <p className="text-[#555555]">
                Kami adalah EcoNature, komunitas peduli lingkungan. Dalam menghadapi Pemanasan Global, kami butuh dukungan Anda. Mari bersama-sama melindungi planet dan menciptakan masa depan yang berkelanjutan!
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-6">Ayo Mulai Berdonasi</h3>
                <div className="bg-white border rounded-lg overflow-hidden mb-6">
                    <img 
                    src="/images/dns.png"
                    alt="5R Diagram"
                    className="w-full mb-4"
                    />
                  <h1 className="font-bold mb-4 text-xl ml-4">Ayo Hentikan Pemanasan Global</h1>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex -space-x-2 ml-4">
                      <div className="w-12 h-12 rounded-full">
                        <img 
                            src="/images/u1.jpg"
                            alt="5R Diagram"
                            className="w-full mb-4"/>
                        </div>
                      <div className="w-12 h-12 rounded-full">
                        <img 
                                src="/images/u2.jpg"
                                alt="5R Diagram"
                                className="w-full mb-4"/>
                      </div>
                      <div className="w-12 h-12 rounded-full">
                        <img 
                                src="/images/u3.jpg"
                                alt="5R Diagram"
                                className="w-full mb-4"/>
                      </div>
                      <div className="w-12 h-12 bg-[#66BB6A] rounded-full flex items-center justify-center text-white text-sm">+1258</div>
                    </div>
                    <span className="text-sm text-gray-600">1261 Pendukung</span>
                  </div>
                  <div className="w-[363px] bg-gray-200 rounded-full h-2 mb-4 ml-4">
                    <div className="bg-[#66BB6A] h-2 rounded-full w-2/3"></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 grid md:grid-cols-3 font-bold ml-8 mb-4">
                    <div>67% <br /> • Didanai</div>
                    <div className='mr-4'>Rp 900 ribu <br /> • Terkumpul</div>
                    <div className='ml-2'>Rp 2 juta <br /> • Diperlukan</div>
                  </div>
                <button className="w-full bg-[#66BB6A] text-white py-3 rounded-lg font-bold hover:bg-green-600 transition-colors">
                <a href="/Donasi">DONASI SEKARANG</a>
                </button>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">Berita Terbaru</h2>
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                    <img 
                        src="/images/b4.png" 
                        alt="Plant growing" 
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="font-bold text-xl mb-2">
                          Pemulihan Terumbu Karang di Indonesia
                        </h3>
                        <a href="/Berita" className="text-[#66BB6A] hover:underline font-bold">BACA SELENGKAPNYA</a>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2 mt-2">
                        <div className="flex items-center gap-1">
                            <i class="bi bi-calendar text-[#689F38]"></i>
                            <span> 29 Juli, 2024</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <i class="bi bi-chat-dots text-[#689F38]"></i>
                            <span>134 Komentar</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 mt-6">Menjadi Relawan</h2>
                  <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Nama Lengkap" 
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input 
                      type="email" 
                      placeholder="Alamat Email" 
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input 
                      type="tel" 
                      placeholder="Nomor Handphone" 
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button 
                      type="submit" 
                      className="w-full bg-[#66BB6A] text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
                    >
                      BERGABUNG SEKARANG
                    </button>
                  </form>
                </div>
              </div>
          </div>
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
                    className="w-full bg-[#66BB6A] text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
                    >
                    KIRIMKAN KOMENTAR ANDA
                    </button>
                </form>
            </div>
      </div>
    </div>
  );
};

export default Berita5;