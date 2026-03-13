export default function Gallery() {
    const images = [
        { src: "/images/hero-bg.png", title: "Kolam Renang Utama" },
        { src: "/images/resort-room.png", title: "Villa & Resort Exclusive" },
        { src: "/images/hero-bg.png", title: "Restoran View" },
        { src: "/images/resort-room.png", title: "Interior Kamar" },
        { src: "/images/hero-bg.png", title: "Taman Rekreasi" },
        { src: "/images/hero-bg.png", title: "Spot Foto Ikonik" },
    ];

    return (
        <div className="animate-fade-in bg-white pb-24">
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center overflow-hidden">
                <img src="/images/hero-bg.png" alt="Gallery Hero Background" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-white max-w-4xl px-4">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-serif">Galeri Foto</h1>
                    <p className="text-lg lg:text-xl font-light tracking-wide italic">
                        Abadikan momen terbaik Anda di Eling Bening Ambarawa.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 lg:px-24 pt-24">
                <div className="text-center mb-16">
                    <span className="text-eling-red uppercase tracking-widest font-bold text-sm block mb-4">Koleksi Kami</span>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-serif text-gray-900">Momen Indah di Eling Bening</h2>
                    <div className="w-24 h-1 bg-eling-green mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((img, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-lg cursor-pointer">
                            <img src={img.src} className="absolute inset-0 w-full h-full object-cover transition duration-1000 group-hover:scale-110" alt={img.title} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-8">
                                <div className="transform translate-y-8 group-hover:translate-y-0 transition duration-500">
                                    <p className="text-eling-green font-bold text-sm uppercase tracking-widest mb-2">Eling Bening</p>
                                    <p className="text-white font-serif text-3xl leading-tight">{img.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
