import { useState, useEffect } from 'react';
import { Search, Eye, CheckCircle2, Clock } from 'lucide-react';
import { getBookings, formatRupiah } from '../../utils/data';

export default function Bookings() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        setBookings(getBookings().reverse());
    }, []);

    return (
        <div className="animate-fade-in">
            <div className="admin-page-header">
                <div>
                    <h1>Manajemen Pemesanan (Booking)</h1>
                    <p className="text-muted mt-1">Daftar semua transaksi pemesanan resort dan tiket tiket.</p>
                </div>
            </div>

            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', marginBottom: '1.5rem', display: 'flex', gap: '1rem', border: '1px solid var(--border-color)' }}>
                <div style={{ flex: 1, position: 'relative' }}>
                    <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input
                        type="text"
                        placeholder="Cari berdasarkan Order ID, Nama Tamu..."
                        style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none' }}
                    />
                </div>
                <select style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none' }}>
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
                        {bookings.map(b => (
                            <tr key={b.id}>
                                <td style={{ fontWeight: 600, color: 'var(--primary)' }}>{b.id}</td>
                                <td style={{ fontWeight: 500 }}>
                                    {b.name}
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{b.phone}</div>
                                </td>
                                <td>{b.itemName}</td>
                                <td>{new Date(b.date).toLocaleDateString('id-ID')}</td>
                                <td style={{ fontWeight: 600, color: 'var(--text-main)' }}>{formatRupiah(b.total)}</td>
                                <td>
                                    {b.status === 'success' ? (
                                        <span className="badge active"><CheckCircle2 size={12} style={{ display: 'inline', marginRight: '4px' }} />Lunas</span>
                                    ) : (
                                        <span className="badge inactive"><Clock size={12} style={{ display: 'inline', marginRight: '4px' }} />Pending</span>
                                    )}
                                </td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="btn-icon" title="Lihat Detail"><Eye size={18} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {bookings.length === 0 && (
                            <tr>
                                <td colSpan="7" className="text-center text-muted" style={{ padding: '2rem' }}>Belum ada data transaksi.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
