import { useState, useEffect } from 'react';
import { BedDouble, Maximize, CheckCircle2 } from 'lucide-react';
import { getRooms, formatRupiah } from '../../utils/data';

export default function Rooms() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        setRooms(getRooms());
    }, []);

    return (
        <div className="animate-fade-in bg-gray-50 pb-24">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80" alt="Resort Hero Background" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-white max-w-4xl px-4">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-serif">Resort & Penginapan</h1>
                    <p className="text-lg lg:text-xl font-light tracking-wide italic">
                        Kenyamanan kelas atas berpadu dengan keindahan alam murni Ambarawa.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 lg:px-24 pt-24">
                <div className="text-center mb-16">
                    <span className="text-eling-red uppercase tracking-widest font-bold text-sm block mb-4">Akomodasi</span>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-serif text-gray-900">Pilihan Kamar Kami</h2>
                    <div className="w-24 h-1 bg-eling-green mx-auto"></div>
                </div>

                <div className="flex flex-col gap-16">
                    {rooms.map((room, idx) => (
                        <div key={room.id} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group`}>
                            {/* Image Side */}
                            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80" className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" alt={room.name} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                {room.stock === 0 && (
                                    <div className="absolute top-6 left-6 bg-eling-red text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                                        Kamar Penuh
                                    </div>
                                )}
                            </div>

                            {/* Content Side */}
                            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col">
                                <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">{room.name}</h2>
                                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                                    {room.desc}
                                </p>

                                <div className="flex flex-wrap gap-6 mb-8 text-sm font-semibold text-gray-700">
                                    <div className="flex items-center gap-2">
                                        <BedDouble className="text-eling-green" size={20} /> {room.bed}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Maximize className="text-eling-green" size={20} /> {room.size} m&sup2;
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                                        {room.capacity} Orang
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Fasilitas Termasuk</h4>
                                    <ul className="flex flex-wrap gap-3">
                                        {room.amenities.map((am, i) => (
                                            <li key={i} className="flex items-center gap-2 bg-green-50 text-eling-green px-3 py-1.5 rounded-full text-sm font-semibold">
                                                <CheckCircle2 size={16} /> {am}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8 pt-8 border-t border-gray-100 flex flex-wrap justify-between items-end gap-6">
                                    <div>
                                        <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Harga Per Malam</div>
                                        <div className="text-3xl font-bold text-gray-900">
                                            {formatRupiah(room.price)}
                                        </div>
                                    </div>
                                    <button
                                        className={`font-bold py-4 px-8 rounded-xl transition shadow-lg ${room.stock === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-eling-green text-white hover:bg-green-800'}`}
                                        disabled={room.stock === 0}
                                    >
                                        {room.stock === 0 ? 'Penuh' : 'Pilih Kamar'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
