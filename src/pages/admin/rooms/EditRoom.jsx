import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { getRooms, saveRooms } from '../../../utils/data';
import toast from 'react-hot-toast';

const AMENITIES_OPTIONS = [
    'WiFi', 'TV', 'AC', 'Coffee Maker',
    'Balcony', 'Minibar', 'Shower', 'Lake View',
    'Bathtub', 'Breakfast', 'Work Desk', 'Safe Deposit Box'
];

export default function EditRoom() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        const rooms = getRooms();
        const room = rooms.find(r => r.id === Number(id));
        if (room) {
            setFormData({
                ...room,
                amenities: Array.isArray(room.amenities) ? room.amenities : []
            });
        } else {
            toast.error('Kamar tidak ditemukan');
            navigate('/admin/rooms');
        }
    }, [id, navigate]);

    const handleAmenityChange = (amenity) => {
        const current = formData.amenities;
        if (current.includes(amenity)) {
            setFormData({ ...formData, amenities: current.filter(a => a !== amenity) });
        } else {
            setFormData({ ...formData, amenities: [...current, amenity] });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const rooms = getRooms();
        const finalData = {
            ...formData,
            price: Number(formData.price),
            capacity: Number(formData.capacity),
            stock: Number(formData.stock),
            size: Number(formData.size)
        };

        const updated = rooms.map(r => r.id === Number(id) ? finalData : r);
        saveRooms(updated);
        toast.success('Perubahan berhasil disimpan');
        navigate('/admin/rooms');
    };

    if (!formData) return <div className="p-8 text-center text-muted">Loading...</div>;

    return (
        <div className="animate-fade-in">
            <div className="admin-page-header">
                <div>
                    <button onClick={() => navigate('/admin/rooms')} className="flex items-center text-muted hover:text-main mb-2 transition-colors">
                        <ArrowLeft size={16} className="mr-1" /> Kembali ke Daftar Kamar
                    </button>
                    <h1>Edit Tipe Kamar</h1>
                </div>
            </div>

            <div className="admin-card">
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                        <label className="admin-label">Nama Tipe Kamar</label>
                        <input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} type="text" className="admin-input" />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label className="admin-label">Harga (Rp)</label>
                            <input required value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} type="number" className="admin-input" />
                        </div>
                        <div>
                            <label className="admin-label">Stok / Ketersediaan</label>
                            <input required value={formData.stock} onChange={e => setFormData({ ...formData, stock: e.target.value })} type="number" min="0" className="admin-input" />
                        </div>
                        <div>
                            <label className="admin-label">Maks Kapasitas (Org)</label>
                            <input required value={formData.capacity} onChange={e => setFormData({ ...formData, capacity: e.target.value })} type="number" min="1" className="admin-input" />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label className="admin-label">Tipe Kasur</label>
                            <input required value={formData.bed} onChange={e => setFormData({ ...formData, bed: e.target.value })} type="text" className="admin-input" />
                        </div>
                        <div>
                            <label className="admin-label">Luas Kamar (m&sup2;)</label>
                            <input required value={formData.size} onChange={e => setFormData({ ...formData, size: e.target.value })} type="number" className="admin-input" />
                        </div>
                    </div>

                    <div>
                        <label className="admin-label" style={{ marginBottom: '0.75rem' }}>Daftar Fasilitas</label>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.75rem' }}>
                            {AMENITIES_OPTIONS.map(opt => (
                                <div
                                    key={opt}
                                    onClick={() => handleAmenityChange(opt)}
                                    style={{
                                        padding: '0.5rem 0.75rem',
                                        borderRadius: 'var(--radius-sm)',
                                        border: '1px solid',
                                        borderColor: formData.amenities.includes(opt) ? 'var(--primary)' : 'var(--border-color)',
                                        backgroundColor: formData.amenities.includes(opt) ? 'var(--primary-light)' : 'white',
                                        color: formData.amenities.includes(opt) ? 'var(--primary)' : 'var(--text-main)',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontSize: '0.875rem',
                                        fontWeight: formData.amenities.includes(opt) ? 600 : 400,
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    <div style={{
                                        width: '16px',
                                        height: '16px',
                                        borderRadius: '4px',
                                        border: '1px solid',
                                        borderColor: formData.amenities.includes(opt) ? 'var(--primary)' : 'var(--border-color)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: formData.amenities.includes(opt) ? 'var(--primary)' : 'white',
                                        color: 'white'
                                    }}>
                                        {formData.amenities.includes(opt) && <Check size={12} strokeWidth={3} />}
                                    </div>
                                    {opt}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="admin-label">Deskripsi Resort</label>
                        <textarea required rows="4" value={formData.desc} onChange={e => setFormData({ ...formData, desc: e.target.value })} className="admin-input"></textarea>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                        <button type="button" onClick={() => navigate('/admin/rooms')} className="btn-primary-outline" style={{ flex: 1, justifyContent: 'center' }}>Batal</button>
                        <button type="submit" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>Simpan Perubahan</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
