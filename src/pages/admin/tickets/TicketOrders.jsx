import { useState, useEffect } from 'react';
import { getBookings, formatRupiah } from '../../../utils/data';
import { Search, Filter, Calendar, Hash, User, Tag, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TicketOrders() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Filter only ticket-related bookings (ID starts with EB-TICK)
        const allBookings = getBookings();
        setOrders(allBookings.filter(b => b.id.includes('TICK')));
    }, []);

    const filteredOrders = orders.filter(o =>
        o.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.itemName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="animate-fade-in">
            <div className="admin-page-header">
                <div>
                    <button onClick={() => navigate('/admin/tickets')} className="flex items-center text-muted hover:text-main mb-2 transition-colors">
                        <ArrowLeft size={16} className="mr-1" /> Kembali ke Manajemen Tiket
                    </button>
                    <h1>Daftar Pesanan Tiket</h1>
                    <p className="text-muted mt-1">Rekapitulasi penjualan tiket masuk pengunjung.</p>
                </div>
            </div>

            <div className="admin-card" style={{ marginBottom: '1.5rem', padding: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1, position: 'relative' }}>
                        <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            className="admin-input"
                            placeholder="Cari Order ID, Nama Pengunjung, atau Jenis Tiket..."
                            style={{ paddingLeft: '3rem' }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="btn-primary-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Filter size={18} /> Filter
                    </button>
                </div>
            </div>

            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Pengunjung</th>
                            <th>Jenis Tiket</th>
                            <th>Tanggal Kunjungan</th>
                            <th>Total Bayar</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.map(order => (
                            <tr key={order.id}>
                                <td style={{ fontWeight: 600, color: 'var(--primary)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Hash size={14} /> {order.id}
                                    </div>
                                </td>
                                <td>
                                    <div style={{ fontWeight: 600 }}>{order.name}</div>
                                </td>
                                <td>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Tag size={14} className="text-muted" /> {order.itemName}
                                    </div>
                                </td>
                                <td>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Calendar size={14} className="text-muted" /> {new Date(order.date).toLocaleDateString('id-ID')}
                                    </div>
                                </td>
                                <td style={{ fontWeight: 700, color: 'var(--text-main)' }}>{formatRupiah(order.total)}</td>
                                <td>
                                    <span className={`badge ${order.status === 'success' ? 'active' : 'inactive'}`}>
                                        {order.status === 'success' ? 'Berhasil' : 'Gagal'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                        {filteredOrders.length === 0 && (
                            <tr>
                                <td colSpan="6" className="text-center text-muted" style={{ padding: '3rem' }}>
                                    Tidak ditemukan data pesanan tiket.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
