import { useState, useEffect } from 'react';
import { getBookings, saveBookings, formatRupiah } from '../../../utils/data';
import { Search, Filter, Calendar, Hash, User, Tag, ArrowLeft, CheckCircle2, Circle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function TicketOrders() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Filter only ticket-related bookings (ID starts with EB-TICK)
        const allBookings = getBookings();
        setOrders(allBookings.filter(b => b.id.includes('TICK')));
    }, []);

    const toggleCheckIn = (id) => {
        const allBookings = getBookings();
        const updatedBookings = allBookings.map(b => {
            if (b.id === id) {
                const newStatus = !b.checkedIn;
                toast.success(newStatus ? 'Pengunjung berhasil check-in' : 'Check-in dibatalkan');
                return { ...b, checkedIn: newStatus };
            }
            return b;
        });

        saveBookings(updatedBookings);
        setOrders(updatedBookings.filter(b => b.id.includes('TICK')));
    };

    const filteredOrders = orders.filter(o =>
        o.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (o.itemName && o.itemName.toLowerCase().includes(searchTerm.toLowerCase()))
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
                            <th>Pembayaran</th>
                            <th className="text-center">Check-In</th>
                            <th>Aksi</th>
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
                                <td>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ fontWeight: 700 }}>{formatRupiah(order.total)}</span>
                                        <span style={{ fontSize: '0.75rem' }} className={order.status === 'success' ? 'text-success' : 'text-danger'}>
                                            {order.status === 'success' ? 'Lunas' : 'Gagal'}
                                        </span>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <button
                                        onClick={() => toggleCheckIn(order.id)}
                                        style={{ border: 'none', background: 'none', cursor: 'pointer' }}
                                    >
                                        {order.checkedIn ? (
                                            <div className="badge active" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                <CheckCircle2 size={14} /> Sudah
                                            </div>
                                        ) : (
                                            <div className="badge" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', backgroundColor: '#F1F5F9', color: '#64748B' }}>
                                                <Circle size={14} /> Belum
                                            </div>
                                        )}
                                    </button>
                                </td>
                                <td>
                                    <button className="btn-icon" onClick={() => toggleCheckIn(order.id)} title={order.checkedIn ? "Batalkan Check-In" : "Check-In Sekarang"}>
                                        <CheckCircle2 size={18} style={{ color: order.checkedIn ? '#10B981' : '#CBD5E1' }} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {filteredOrders.length === 0 && (
                            <tr>
                                <td colSpan="7" className="text-center text-muted" style={{ padding: '3rem' }}>
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
