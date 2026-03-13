import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Eye, X, Check, Building, Maximize, BedDouble, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getRooms, saveRooms, formatRupiah } from '../../utils/data';
import toast from 'react-hot-toast';

export default function Rooms() {
    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);
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
        <>
            <div className="animate-fade-in relative">
                <div className="admin-page-header">
                    <div>
                        <h1>Manajemen Kamar Resort</h1>
                        <p className="text-muted mt-1">Mengelola inventaris tipe kamar, kapasitas, dan harga per malam.</p>
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
                                <th>Kapasitas</th>
                                <th>Stok</th>
                                <th>Harga / Malam</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rooms.map(room => (
                                <tr key={room.id}>
                                    <td>
                                        <div style={{ width: '80px', height: '54px', borderRadius: 'var(--radius-sm)', backgroundImage: `url('${room.image || 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=200&q=80'}')`, backgroundSize: 'cover', backgroundPosition: 'center', border: '1px solid var(--border-color)' }}></div>
                                    </td>
                                    <td style={{ fontWeight: 500 }}>
                                        <div style={{ fontSize: '1rem', color: 'var(--text-main)', fontWeight: 600 }}>{room.name}</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', gap: '0.5rem', marginTop: '0.2rem' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><BedDouble size={12} /> {room.bed}</span>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Maximize size={12} /> {room.size} m&sup2;</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge" style={{ backgroundColor: '#F3F4F6', color: 'var(--text-main)' }}>{room.capacity} Orang</span>
                                    </td>
                                    <td>
                                        {room.stock > 0 ? (
                                            <span className="badge active">{room.stock} Unit</span>
                                        ) : (
                                            <span className="badge inactive">Habis</span>
                                        )}
                                    </td>
                                    <td style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '1.125rem' }}>{formatRupiah(room.price)}</td>
                                    <td>
                                        <div className="action-buttons">
                                            <button className="btn-icon" title="Lihat Detail" onClick={() => setSelectedRoom(room)}><Eye size={18} /></button>
                                            <button className="btn-icon" title="Edit" onClick={() => navigate(`/admin/rooms/edit/${room.id}`)}><Edit size={18} /></button>
                                            <button className="btn-icon" title="Hapus" onClick={() => handleDelete(room.id)} style={{ color: '#EF4444' }}><Trash2 size={18} /></button>
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

            {/* Room Detail Modal - Moved outside animate-fade-in to prevent transform trapping */}
            {selectedRoom && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(255,255,255,0.4)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', backdropFilter: 'blur(12px)' }}>
                    <div className="admin-card animate-scale-up" style={{ maxWidth: '800px', width: '100%', position: 'relative', overflow: 'hidden', padding: 0, maxHeight: '90vh' }}>
                        <button onClick={() => setSelectedRoom(null)} style={{ position: 'absolute', right: '1.5rem', top: '1.5rem', zIndex: 10, backgroundColor: 'white', borderRadius: '50%', padding: '0.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', color: 'var(--text-main)' }}><X size={20} /></button>

                        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) 1fr', height: '100%', minHeight: '500px' }}>
                            <div style={{ backgroundImage: `url('${selectedRoom.image || 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80'}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

                            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', overflowY: 'auto' }}>
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                        <span className="badge active">{selectedRoom.status === 'available' ? 'Tersedia' : 'Penuh'}</span>
                                        <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>{formatRupiah(selectedRoom.price)}/mlm</span>
                                    </div>
                                    <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)' }}>{selectedRoom.name}</h2>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div style={{ padding: '1rem', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-md)', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                                        <BedDouble size={18} className="text-primary" />
                                        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', width: '100%' }}>Tipe Kasur</div>
                                        <div style={{ fontWeight: 700 }}>{selectedRoom.bed}</div>
                                    </div>
                                    <div style={{ padding: '1rem', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-md)', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                                        <Maximize size={18} className="text-primary" />
                                        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', width: '100%' }}>Luas Kamar</div>
                                        <div style={{ fontWeight: 700 }}>{selectedRoom.size} m&sup2;</div>
                                    </div>
                                </div>

                                <div>
                                    <h4 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>Fasilitas & Layanan</h4>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {selectedRoom.amenities.map((a, i) => (
                                            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.8rem', backgroundColor: '#F1F5F9', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>
                                                <Check size={12} className="text-primary" /> {a}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>Deskripsi</h4>
                                    <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6 }}>{selectedRoom.desc}</p>
                                </div>

                                <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem', paddingTop: '1rem' }}>
                                    <button onClick={() => navigate(`/admin/rooms/edit/${selectedRoom.id}`)} style={{ flex: 1, padding: '0.75rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--primary)', color: 'white', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                        <Edit size={18} /> Edit Kamar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
