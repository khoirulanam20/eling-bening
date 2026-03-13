import { Link } from 'react-router-dom';
import { Mountain, Utensils, BedDouble, Waves, MapPin, Phone, Mail } from 'lucide-react';

export default function Home() {
    return (
        <div className="animate-fade-in pb-0" style={{ paddingBottom: 0 }}>
            <style>{`
                .hero-gradient {
                    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));
                }
                .glass {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 1s ease-out forwards;
                }
            `}</style>

            {/* Hero Section */}
            <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
                <img src="/images/hero-bg.png" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 hero-gradient"></div>
                <div className="relative z-10 text-white max-w-4xl px-4">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up font-serif">Selamat Datang di Eling Bening</h1>
                    <p className="text-lg lg:text-xl mb-12 font-light tracking-wide italic animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
                        Nikmati keindahan alam Ambarawa dalam balutan kemewahan resort dan pemandangan Danau Rawa Pening yang memesona.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
                        <Link to="/ticketing" className="inline-block bg-eling-red hover:bg-red-800 text-white font-bold py-4 px-10 rounded-full text-lg transition shadow-2xl">
                            Pesan Tiket
                        </Link>
                        <Link to="/rooms" className="inline-block glass hover:bg-white hover:text-eling-green text-white font-bold py-4 px-10 rounded-full text-lg transition shadow-2xl">
                            Booking Resort
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 px-6 lg:px-24 bg-gray-50 overflow-hidden">
                <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-eling-green opacity-10 rounded-full"></div>
                        <img src="/images/hero-bg.png" alt="About" className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3]" />
                        <div className="absolute -bottom-6 -right-6 glass p-6 rounded-xl border-eling-green/30 border-2 z-20 bg-white/20 backdrop-blur-md">
                            <p className="text-eling-green font-bold text-xl">100% Alamiah</p>
                            <p className="text-gray-800 font-medium text-sm">Pesona Pegunungan</p>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <span className="text-eling-red uppercase tracking-widest font-bold text-sm block mb-4">Tentang Kami</span>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight font-serif">Eling Bening Ambarawa</h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>Eling Bening merupakan kawasan wisata terintegrasi yang menawarkan pengalaman tak terlupakan di dataran tinggi Ambarawa. Kami menghadirkan harmoni antara arsitektur modern yang elegan dengan ketenangan alam pegunungan.</p>
                            <p>Dengan fasilitas lengkap mulai dari resort mewah, kolam renang infinity, restoran gourmet, hingga area outbound, Eling Bening adalah pilihan utama untuk rekreasi keluarga maupun acara spesial Anda.</p>
                        </div>
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border-l-4 border-eling-green">
                                <Mountain className="text-eling-green" size={24} />
                                <span className="font-semibold text-gray-800">Pemandangan Megah</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border-l-4 border-eling-green">
                                <Utensils className="text-eling-green" size={24} />
                                <span className="font-semibold text-gray-800">Kuliner Nusantara</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border-l-4 border-eling-green">
                                <BedDouble className="text-eling-green" size={24} />
                                <span className="font-semibold text-gray-800">Resort Berbintang</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border-l-4 border-eling-green">
                                <Waves className="text-eling-green" size={24} />
                                <span className="font-semibold text-gray-800">Kolam Renang Mewah</span>
                            </div>
                        </div>
                        <button className="mt-12 bg-eling-green text-white font-bold py-4 px-10 rounded-full hover:bg-green-800 transition">
                            Lihat Selengkapnya
                        </button>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="py-24 px-6 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-eling-red uppercase tracking-widest font-bold text-sm block mb-4">Galeri</span>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-serif text-gray-900">Momen Indah di Eling Bening</h2>
                        <div className="w-24 h-1 bg-eling-green mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg">
                            <img src="/images/hero-bg.png" className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110" alt="Gallery 1" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-8">
                                <p className="text-white font-serif text-2xl">Kolam Renang Utama</p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg">
                            <img src="/images/resort-room.png" className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110" alt="Gallery 2" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-8">
                                <p className="text-white font-serif text-2xl">Villa &amp; Resort</p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg">
                            <img src="/images/hero-bg.png" className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110" alt="Gallery 3" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-8">
                                <p className="text-white font-serif text-2xl">Restoran View</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facilities Grid */}
            <section id="facilities" className="py-24 px-6 lg:px-24 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-eling-red uppercase tracking-widest font-bold text-sm block mb-4">Fasilitas</span>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-serif text-gray-900">Fasilitas Eling Bening</h2>
                        <p className="text-gray-500">Kenyamanan dan kepuasan Anda adalah prioritas kami.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: "fa-utensils", title: "Restaurant & Cafe", desc: "Menyajikan hidangan lokal dan internasional dengan view spektakuler." },
                            { icon: "fa-child", title: "Area Play-Land", desc: "Taman bermain yang aman dan menyenangkan untuk anak-anak." },
                            { icon: "fa-users", title: "Tatap Lokasi", desc: "Berbagai spot foto ikonik untuk mengabadikan momen Anda." },
                            { icon: "fa-binoculars", title: "Skydeck", desc: "Dek observasi tertinggi untuk menikmati matahari terbenam." },
                            { icon: "fa-home", title: "Resort Mewah", desc: "Penginapan eksklusif dengan fasilitas kamar yang sangat lengkap." },
                            { icon: "fa-praying-hands", title: "Musholla", desc: "Fasilitas ibadah yang bersih, luas, dan nyaman." },
                            { icon: "fa-wifi", title: "Free Wi-Fi", desc: "Koneksi internet cepat tersedia di seluruh area publik." },
                            { icon: "fa-camera", title: "Spot Foto", desc: "Puluhan spot instagramable dengan latar alam Ambarawa." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-eling-green transition duration-300 group">
                                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-eling-green transition duration-300">
                                    <i className={`fas ${item.icon} text-eling-green text-2xl group-hover:text-white`}></i>
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-gray-900">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact & Map */}
            <section id="contact" className="py-24 px-6 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/2">
                            <span className="text-eling-red uppercase tracking-widest font-bold text-sm block mb-4">Kontak</span>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-8 font-serif text-gray-900">Hubungi Kami</h2>
                            <div className="space-y-8 mb-12">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin className="text-eling-green" size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Lokasi</p>
                                        <p className="text-gray-500 text-sm leading-relaxed">Jl. Sarjono, Bauman, Ambarawa, Kec. Ambarawa, Kabupaten Semarang, Jawa Tengah 50614</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone className="text-eling-green" size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Telepon</p>
                                        <p className="text-gray-500 text-sm">+62 811-2345-6789</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail className="text-eling-green" size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Email</p>
                                        <p className="text-gray-500 text-sm">info@elingbening.com</p>
                                    </div>
                                </div>
                            </div>
                            <a href="https://wa.me/6281123456789" className="inline-flex items-center gap-3 bg-green-500 text-white font-bold py-4 px-8 rounded-full hover:bg-green-600 transition shadow-lg">
                                <i className="fab fa-whatsapp text-xl"></i>
                                Chat via WhatsApp
                            </a>
                        </div>
                        <div className="lg:w-1/2 glass border border-gray-200 shadow-2xl rounded-3xl p-8 lg:p-12 bg-white">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-eling-green/50" placeholder="Masukkan nama Anda" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-eling-green/50" placeholder="nama@email.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Pesan</label>
                                    <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-eling-green/50" placeholder="Apa yang ingin Anda tanyakan?"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-eling-red text-white font-bold py-4 rounded-xl hover:bg-red-800 transition shadow-lg">
                                    Kirim Pesan
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="mt-24 h-[500px] w-full bg-gray-200 rounded-3xl shadow-inner overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                            <i className="fas fa-map-marked-alt text-6xl text-gray-400 mb-4 drop-shadow-md"></i>
                            <p className="text-gray-600 font-bold uppercase tracking-widest drop-shadow-md bg-white/50 px-4 py-1 rounded-full backdrop-blur-sm">Interactive Map Integration</p>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15830.34757657279!2d110.4045!3d-7.2657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a783783a3371b%3A0x6a0a09e075c3f6e!2sEling%20Bening!5e0!3m2!1sen!2sid!4v1700000000000"
                            className="w-full h-full border-0 grayscale hover:grayscale-0 transition duration-1000"
                            allowFullScreen={false}
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}
