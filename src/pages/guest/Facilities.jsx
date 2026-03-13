import { Utensils, BedDouble, Waves, MapPin, Phone, Mail } from 'lucide-react';

export default function Facilities() {
    const facilities = [
        { icon: "fa-utensils", title: "Restaurant & Cafe", desc: "Menyajikan hidangan lokal dan internasional dengan view spektakuler Danau Rawa Pening." },
        { icon: "fa-child", title: "Area Play-Land", desc: "Taman bermain yang aman dan menyenangkan untuk anak-anak dengan berbagai wahana." },
        { icon: "fa-users", title: "Tatap Lokasi", desc: "Berbagai spot foto ikonik untuk mengabadikan momen kebersamaan Anda." },
        { icon: "fa-binoculars", title: "Skydeck", desc: "Dek observasi tertinggi untuk menikmati matahari terbenam yang memukau." },
        { icon: "fa-home", title: "Resort Mewah", desc: "Penginapan eksklusif dengan fasilitas kamar yang sangat lengkap dan nyaman." },
        { icon: "fa-praying-hands", title: "Musholla", desc: "Fasilitas ibadah yang bersih, terawat, luas, dan nyaman." },
        { icon: "fa-wifi", title: "Free Wi-Fi", desc: "Koneksi internet cepat tersedia gratis di seluruh area publik Eling Bening." },
        { icon: "fa-camera", title: "Spot Foto", desc: "Puluhan spot instagramable eksklusif dengan latar alam Ambarawa sepuasnya." }
    ];

    return (
        <div className="animate-fade-in bg-gray-50 pb-24">
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center overflow-hidden">
                <img src="/images/hero-bg.png" alt="Facilities Hero Background" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-white max-w-4xl px-4">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-serif">Fasilitas Premium</h1>
                    <p className="text-lg lg:text-xl font-light tracking-wide italic">
                        Kenyamanan dan kepuasan Anda adalah prioritas utama kami.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 lg:px-24 pt-24">
                <div className="text-center mb-16">
                    <span className="text-eling-red uppercase tracking-widest font-bold text-sm block mb-4">Layanan Kami</span>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-serif text-gray-900">Fasilitas Eling Bening</h2>
                    <div className="w-24 h-1 bg-eling-green mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {facilities.map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:border-eling-green hover:-translate-y-2 transition duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -z-10 transition duration-500 group-hover:scale-150 group-hover:bg-eling-green/5"></div>

                            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-eling-green transition duration-500 shadow-sm">
                                <i className={`fas ${item.icon} text-eling-green text-2xl group-hover:text-white transition duration-500`}></i>
                            </div>

                            <h3 className="font-bold text-xl mb-4 text-gray-900 font-serif leading-tight">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
