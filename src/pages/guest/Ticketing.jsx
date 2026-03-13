import { useState, useEffect } from 'react';
import { Ticket, Calendar, Users, ArrowRight } from 'lucide-react';
import { getTickets, formatRupiah } from '../../utils/data';
import '../../styles/guest.css';

export default function Ticketing() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        // Only show active tickets
        const activeTickets = getTickets().filter(t => t.status === 'active');
        setTickets(activeTickets);
    }, []);

    return (
        <div className="animate-fade-in bg-gray-50 pb-24">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1540206351-d7ce9f1ea431?auto=format&fit=crop&w=1920&q=80" alt="Ticketing Hero Background" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-white max-w-4xl px-4">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-serif">Tiket Eling Bening</h1>
                    <p className="text-lg lg:text-xl font-light tracking-wide italic">
                        Jelajahi keindahan rekreasi alam tanpa batas. Pesan online sekarang.
                    </p>
                </div>
            </section>

            {/* Ticket List */}
            <div className="max-w-7xl mx-auto px-6 lg:px-24 pt-24">
                <div className="text-center mb-16">
                    <span className="text-eling-red uppercase tracking-widest font-bold text-sm block mb-4">Pilih Kategori</span>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-serif text-gray-900">Tiket Masuk & Wahana</h2>
                    <div className="w-24 h-1 bg-eling-green mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {tickets.map(ticket => (
                        <div key={ticket.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col transition hover:-translate-y-2 hover:shadow-xl duration-300">
                            <div className="p-8 lg:p-10 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="bg-green-50 p-4 rounded-xl text-eling-green">
                                        <Ticket size={28} />
                                    </div>
                                    <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">{ticket.days}</span>
                                </div>

                                <h3 className="text-3xl font-bold mb-3 text-gray-900 font-serif">
                                    {ticket.name}
                                </h3>

                                <p className="text-gray-500 mb-8 leading-relaxed flex-1">
                                    {ticket.desc}
                                </p>

                                <div className="border-t border-gray-100 pt-6 mt-auto">
                                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Mulai dari</div>
                                    <div className="text-4xl font-black text-eling-green">
                                        {formatRupiah(ticket.price)}
                                        <span className="text-lg font-medium text-gray-400">/pax</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 bg-gray-50 border-t border-gray-100">
                                <button className="w-full bg-eling-red text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-red-800 transition shadow-md text-lg">
                                    Beli Tiket Sekarang <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info Box */}
                <div className="mt-20 p-8 lg:p-10 bg-yellow-50 rounded-3xl border border-yellow-200 flex flex-col md:flex-row gap-8 items-start md:items-center shadow-sm">
                    <div className="bg-yellow-200 p-5 rounded-full text-yellow-800 shrink-0 shadow-inner">
                        <Users size={32} />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-2xl font-bold text-yellow-900 mb-3 font-serif">Rencana Kunjungan Rombongan?</h4>
                        <p className="text-yellow-800 mb-6 md:mb-0 text-lg">
                            Dapatkan harga spesial dan fasilitas khusus untuk kunjungan rombongan lebih dari 20 orang (Study Tour, Employee Gathering, dll).
                        </p>
                    </div>
                    <button className="bg-yellow-600 text-white font-bold py-4 px-8 rounded-xl shrink-0 hover:bg-yellow-700 transition shadow-md w-full md:w-auto text-lg whitespace-nowrap">
                        Hubungi Sales
                    </button>
                </div>
            </div>
        </div>
    );
}
