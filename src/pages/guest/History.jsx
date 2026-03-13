import { useState, useEffect } from 'react';
import { getBookings, formatRupiah } from '../../utils/data';
import { Search, MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function History() {
    const [bookings, setBookings] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setBookings(getBookings().reverse()); // latest first
    }, []);

    const filtered = bookings.filter(b =>
        b.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.itemName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="animate-fade-in" style={{ backgroundColor: '#F8FAFC', minHeight: 'calc(100vh - 200px)', paddingBottom: '4rem' }}>
            <div style={{ backgroundColor: 'var(--primary-dark)', padding: '4rem 2rem', color: 'white' }}>
                <div className="page-container" style={{ padding: 0 }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Histori Pesanan Saya</h1>
                    <p style={{ opacity: 0.9 }}>Cek status dan detail pesanan Anda (Tiket & Resort) menggunakan nomor pesanan atau nama Anda.</p>
                </div>
            </div>

            <div className="page-container" style={{ marginTop: '-2.5rem' }}>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', marginBottom: '2rem', display: 'flex', gap: '1rem', border: '1px solid var(--border-color)' }}>
                    <div style={{ flex: 1, position: 'relative' }}>
                        <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            placeholder="Cari Order ID, Nama, atau Item..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontSize: '1rem' }}
                        />
                    </div>
                    <button className="btn-primary" style={{ padding: '0 2rem' }}>Cari</button>
                </div>

                {filtered.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: 'white', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--border-color)' }}>
                        <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: '#F3F4F6', borderRadius: '50%', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                            <Clock size={32} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>Belum ada pesanan</h3>
                        <p className="text-muted" style={{ marginBottom: '1.5rem' }}>Anda belum melengkapi pesanan atau data tidak ditemukan.</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <Link to="/ticketing" className="btn-primary-outline">Beli Tiket</Link>
                            <Link to="/rooms" className="btn-primary-outline">Pesan Resort</Link>
                        </div>
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {filtered.map(booking => (
                            <div key={booking.id} style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-color)', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ flex: '1 1 200px' }}>
                                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.5rem' }}>Order ID: {booking.id}</div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, color: 'var(--text-main)' }}>{booking.itemName}</h3>
                                    <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Calendar size={16} /> {new Date(booking.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><MapPin size={16} /> Eling Bening</div>
                                    </div>
                                </div>

                                <div style={{ flex: '0 1 auto', textAlign: 'right' }}>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Atas Nama: <strong style={{ color: 'var(--text-main)' }}>{booking.name}</strong></div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', margin: '0.5rem 0' }}>{formatRupiah(booking.total)}</div>
                                    <span className={`badge ${booking.status === 'success' ? 'active' : 'inactive'}`}>
                                        {booking.status === 'success' ? 'LUNAS (TERKONFIRMASI)' : 'MENUNGGU PEMBAYARAN'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
