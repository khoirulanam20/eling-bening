import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, X } from 'lucide-react';
import { getRooms, saveRooms, formatRupiah } from '../../utils/data';

export default function Rooms() {
    const [rooms, setRooms] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const initialForm = { id: null, name: '', price: '', capacity: 2, stock: 5, bed: 'King Bed', size: 30, desc: '', amenities: 'Sarapan Gratis, Kolam Renang', status: 'available', image: '/images/resort-room.png' };
    const [formData, setFormData] = useState(initialForm);

    useEffect(() => {
        setRooms(getRooms());
    }, []);

    const openModal = (room = null) => {
        if (room) {
            setFormData({ ...room, amenities: Array.isArray(room.amenities) ? room.amenities.join(', ') : room.amenities });
            setIsEdit(true);
        } else {
            setFormData(initialForm);
            setIsEdit(false);
        }
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const processedAmenities = formData.amenities.split(',').map(a => a.trim());
        const finalData = { ...formData, price: Number(formData.price), capacity: Number(formData.capacity), stock: Number(formData.stock), size: Number(formData.size), amenities: processedAmenities };

        let updated;
        if (isEdit) {
            updated = rooms.map(r => r.id === formData.id ? finalData : r);
        } else {
            const newId = rooms.length > 0 ? Math.max(...rooms.map(r => r.id)) + 1 : 1;
            updated = [...rooms, { ...finalData, id: newId }];
        }

        setRooms(updated);
        saveRooms(updated);
        closeModal();
    };

    const handleDelete = (id) => {
        if (confirm('Yakin ingin menghapus kamar tipe ini? Semua pemesanan terkait mungkin terdampak.')) {
            const updated = rooms.filter(r => r.id !== id);
            setRooms(updated);
            saveRooms(updated);
        }
    };

    return (
        <div className="animate-fade-in relative">
            <div className="admin-page-header">
                <div>
                    <h1>Manajemen Kamar Resort</h1>
                    <p className="text-muted mt-1">Mengelola inventaris tipe kamar, kapasitas, dan harga per malam.</p>
                </div>
                <button className="btn-primary" onClick={() => openModal()}>
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
                                        <button className="btn-icon" title="Edit" onClick={() => openModal(room)}><Edit size={18} /></button>
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

            {/* CRUD Modal */}
            {isModalOpen && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
                    <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', width: '100%', maxWidth: '700px', maxHeight: '90vh', overflowY: 'auto', padding: '2rem', boxShadow: 'var(--shadow-lg)' }} className="animate-fade-in">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 10, paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{isEdit ? 'Edit Tipe Kamar' : 'Tambah Tipe Kamar Baru'}</h2>
                            <button onClick={closeModal} style={{ color: 'var(--text-muted)' }}><X size={24} /></button>
                        </div>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Nama Tipe Kamar</label>
                                <input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Harga (Rp)</label>
                                    <input required value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} type="number" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Stok / Ketersediaan</label>
                                    <input required value={formData.stock} onChange={e => setFormData({ ...formData, stock: e.target.value })} type="number" min="0" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Maks Kapasitas (Org)</label>
                                    <input required value={formData.capacity} onChange={e => setFormData({ ...formData, capacity: e.target.value })} type="number" min="1" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Tipe Kasur</label>
                                    <input required value={formData.bed} onChange={e => setFormData({ ...formData, bed: e.target.value })} type="text" placeholder="misal: 1 King Bed" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Luas Kamar (m&sup2;)</label>
                                    <input required value={formData.size} onChange={e => setFormData({ ...formData, size: e.target.value })} type="number" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Daftar Fasilitas (Pisahkan dengan koma)</label>
                                <input required value={formData.amenities} onChange={e => setFormData({ ...formData, amenities: e.target.value })} type="text" placeholder="Sarapan Gratis, Kolam Renang, TV" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Deskripsi Resort</label>
                                <textarea required rows="4" value={formData.desc} onChange={e => setFormData({ ...formData, desc: e.target.value })} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}></textarea>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                                <button type="button" onClick={closeModal} className="btn-primary-outline" style={{ flex: 1, justifyContent: 'center' }}>Batal</button>
                                <button type="submit" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>{isEdit ? 'Simpan Perubahan' : 'Tambah Kamar'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
