import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getRooms, saveRooms, formatRupiah } from '../../utils/data';
import toast from 'react-hot-toast';

export default function Rooms() {
    const [rooms, setRooms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setRooms(getRooms());
    }, []);

    const handleDelete = (id) => {
        if (confirm('Yakin ingin menghapus kamar tipe ini? Semua pemesanan terkait mungkin terdampak.')) {
            const updated = rooms.filter(r => r.id !== id);
            setRooms(updated);
            saveRooms(updated);
            toast.success('Kamar berhasil dihapus');
        }
    };

    return (
        <div className="animate-fade-in relative">
            <div className="admin-page-header">
                <div>
                    <h1>Manajemen Kamar Resort</h1>
                    <p className="text-muted mt-1">Mengelola inventaris tipe kamar, kapasistas, dan harga per malam.</p>
                </div>
                <button className="btn-primary" onClick={() => navigate('/admin/rooms/add')}>
                    <Plus size={18} /> Tambah Kamar Baru
                </button>
            </div>

            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Gambar</th>
                            <th>Nama & Tipe Kamar</th>
                            <th>Kapasitas & Fasilitas Inti</th>
                            <th>Stok (Tersedia)</th>
                            <th>Harga / Malam</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.map(room => (
                            <tr key={room.id}>
                                <td>
                                    <div style={{ width: '80px', height: '50px', borderRadius: 'var(--radius-sm)', backgroundImage: `url('https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=200&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center', border: '1px solid var(--border-color)' }}></div>
                                </td>
                                <td style={{ fontWeight: 500 }}>
                                    <div style={{ fontSize: '1rem', color: 'var(--text-main)' }}>{room.name}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{room.bed} • {room.size} m&sup2;</div>
                                </td>
                                <td>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span className="badge" style={{ backgroundColor: '#F3F4F6', color: 'var(--text-main)' }}>Maks {room.capacity} Org</span>
                                    </div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                                        {Array.isArray(room.amenities) ? room.amenities.join(', ').substring(0, 30) + '...' : ''}
                                    </div>
                                </td>
                                <td>
                                    {room.stock > 0 ? (
                                        <span className="badge active">{room.stock} Kamar Kosong</span>
                                    ) : (
                                        <span className="badge inactive">Penuh / Sold Out</span>
                                    )}
                                </td>
                                <td style={{ fontWeight: 700, color: 'var(--primary)' }}>{formatRupiah(room.price)}</td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="btn-icon" title="Edit" onClick={() => navigate(`/admin/rooms/edit/${room.id}`)}><Edit size={18} /></button>
                                        <button className="btn-icon" title="Hapus" onClick={() => handleDelete(room.id)}><Trash2 size={18} color="#EF4444" /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {rooms.length === 0 && (
                            <tr>
                                <td colSpan="6" className="text-center text-muted" style={{ padding: '2rem' }}>Tidak ada data kamar.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
