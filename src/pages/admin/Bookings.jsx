import { useState, useEffect } from 'react';
import { Search, Eye, CheckCircle2, Clock, X, User, Phone, Mail, Calendar, CreditCard, Tag, Landmark, Building2, MapPin } from 'lucide-react';
import { getBookings, formatRupiah } from '../../utils/data';

export default function Bookings() {
    const [bookings, setBookings] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('Semua Status');

    useEffect(() => {
        setBookings(getBookings().reverse());
    }, []);

    const filteredBookings = bookings.filter(b => {
        const matchesSearch = b.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            b.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'Semua Status' ||
            (statusFilter === 'Sukses' && b.status === 'success') ||
            (statusFilter === 'Menunggu / Pending' && b.status !== 'success');
        return matchesSearch && matchesStatus;
    });

    const getStatusBadge = (status) => {
        return status === 'success' ? (
            <span className="badge active"><CheckCircle2 size={12} style={{ display: 'inline', marginRight: '4px' }} />Lunas</span>
        ) : (
            <span className="badge inactive"><Clock size={12} style={{ display: 'inline', marginRight: '4px' }} />Pending</span>
        );
    };

    return (
        <>
            <div className="animate-fade-in relative">
                <div className="admin-page-header">
                    <div>
                        <h1>Manajemen Pemesanan (Booking)</h1>
                        <p className="text-muted mt-1">Daftar semua transaksi pemesanan resort dan tiket masuk.</p>
                    </div>
                </div>

                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', marginBottom: '1.5rem', display: 'flex', gap: '1rem', border: '1px solid var(--border-color)' }}>
                    <div style={{ flex: 1, position: 'relative' }}>
                        <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            placeholder="Cari berdasarkan Order ID, Nama Tamu..."
                            style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none' }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select
                        style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none' }}
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option>Semua Status</option>
                        <option>Sukses</option>
                        <option>Menunggu / Pending</option>
                    </select>
                    <button className="btn-primary">Filter</button>
                </div>

                <div className="admin-table-container">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Nama Tamu</th>
                                <th>Item / Pesanan</th>
                                <th>Tanggal Transaksi</th>
                                <th>Total Biaya</th>
                                <th>Status</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredBookings.map(b => (
                                <tr key={b.id}>
                                    <td style={{ fontWeight: 600, color: 'var(--primary)' }}>{b.id}</td>
                                    <td style={{ fontWeight: 500 }}>
                                        {b.name}
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{b.phone}</div>
                                    </td>
                                    <td>{b.itemName}</td>
                                    <td>{new Date(b.date).toLocaleDateString('id-ID')}</td>
                                    <td style={{ fontWeight: 600, color: 'var(--text-main)' }}>{formatRupiah(b.total)}</td>
                                    <td>{getStatusBadge(b.status)}</td>
                                    <td>
                                        <div className="action-buttons">
                                            <button className="btn-icon" title="Lihat Detail" onClick={() => setSelectedBooking(b)}><Eye size={18} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredBookings.length === 0 && (
                                <tr>
                                    <td colSpan="7" className="text-center text-muted" style={{ padding: '2rem' }}>Belum ada data transaksi.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Booking Detail Modal - Moved outside animate-fade-in to prevent transform trapping */}
            {selectedBooking && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(255,255,255,0.4)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', backdropFilter: 'blur(12px)' }}>
                    <div className="admin-card animate-scale-up" style={{ maxWidth: '700px', width: '100%', position: 'relative', padding: 0, overflow: 'hidden', maxHeight: '90vh' }}>
                        <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F8FAFC' }}>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Detail Pemesanan</h3>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>ID: <span className="text-primary font-bold">{selectedBooking.id}</span></p>
                            </div>
                            <button onClick={() => setSelectedBooking(null)}><X size={24} className="text-muted" /></button>
                        </div>

                        <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 1fr', gap: '2rem', overflowY: 'auto', maxHeight: 'calc(90vh - 140px)' }}>
                            {/* Information Group 1: Guest */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <User size={14} className="text-primary" /> Informasi Tamu
                                    </h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        <div>
                                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Nama Lengkap</div>
                                            <div style={{ fontWeight: 600 }}>{selectedBooking.name}</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Nomor Telepon</div>
                                            <div style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={12} className="text-muted" /> {selectedBooking.phone || '-'}</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Email</div>
                                            <div style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={12} className="text-muted" /> {selectedBooking.email || '-'}</div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Landmark size={14} className="text-primary" /> Informasi Pembayaran
                                    </h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        <div>
                                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Metode Pembayaran</div>
                                            <div style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CreditCard size={12} className="text-muted" /> Virtual Account (BCA)</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Status</div>
                                            <div style={{ marginTop: '0.25rem' }}>{getStatusBadge(selectedBooking.status)}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Information Group 2: Product */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Building2 size={14} className="text-primary" /> Rincian Pesanan
                                    </h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        <div>
                                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Item / Layanan</div>
                                            <div style={{ fontWeight: 700, color: 'var(--primary)' }}>{selectedBooking.itemName}</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Tanggal Check-in / Kunjungan</div>
                                            <div style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={12} className="text-muted" /> {new Date(selectedBooking.date).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Total Pembayaran</div>
                                            <div style={{ fontWeight: 800, fontSize: '1.25rem' }}>{formatRupiah(selectedBooking.total)}</div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Tag size={14} className="text-primary" /> Catatan Tambahan
                                    </h4>
                                    <div style={{ backgroundColor: '#F1F5F9', padding: '1rem', borderRadius: 'var(--radius-md)', fontSize: '0.8125rem', fontStyle: 'italic', color: '#475569', lineHeight: 1.5 }}>
                                        "{selectedBooking.notes || 'Tidak ada catatan tambahan untuk pemesanan ini.'}"
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: '1.5rem 2rem', backgroundColor: '#F8FAFC', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '1rem' }}>
                            <button onClick={() => setSelectedBooking(null)} className="btn-primary-outline" style={{ flex: 1, justifyContent: 'center' }}>Tutup</button>
                            <button className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>Cetak E-Tiket / Invoice</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
