import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getPromos, savePromos, formatRupiah } from '../../utils/data';
import toast from 'react-hot-toast';

export default function Promos() {
    const [promos, setPromos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setPromos(getPromos());
    }, []);

    const handleDelete = (id) => {
        if (confirm('Yakin ingin menghapus promo ini?')) {
            const updated = promos.filter(p => p.id !== id);
            setPromos(updated);
            savePromos(updated);
            toast.success('Promo berhasil dihapus');
        }
    };

    const toggleStatus = (id) => {
        const updated = promos.map(p => p.id === id ? { ...p, status: p.status === 'active' ? 'inactive' : 'active' } : p);
        setPromos(updated);
        savePromos(updated);
        toast.success('Status promo diperbarui');
    };

    return (
        <div className="animate-fade-in">
            <div className="admin-page-header">
                <div>
                    <h1>Promo & Diskon</h1>
                    <p className="text-muted mt-1">Kelola kode promo dan diskon untuk tiket & resort.</p>
                </div>
                <button className="btn-primary" onClick={() => navigate('/admin/promos/add')}>
                    <Plus size={18} /> Tambah Promo Baru
                </button>
            </div>

            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Kode & Nama Promo</th>
                            <th>Diskon</th>
                            <th>Min. Belanja</th>
                            <th>Berakhir</th>
                            <th>Status</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {promos.map(promo => (
                            <tr key={promo.id}>
                                <td style={{ fontWeight: 500 }}>
                                    <div className="font-mono text-primary font-bold">{promo.code}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{promo.name}</div>
                                </td>
                                <td style={{ fontWeight: 600 }}>
                                    {promo.type === 'percentage' ? `${promo.discount}%` : formatRupiah(promo.discount)}
                                </td>
                                <td>{formatRupiah(promo.minPurchase)}</td>
                                <td>{new Date(promo.expiry).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                                <td>
                                    <span
                                        className={`badge ${promo.status === 'active' ? 'active' : 'inactive'}`}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => toggleStatus(promo.id)}
                                    >
                                        {promo.status === 'active' ? 'Aktif' : 'Non-aktif'}
                                    </span>
                                </td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="btn-icon" title="Edit" onClick={() => navigate(`/admin/promos/edit/${promo.id}`)}><Edit size={18} /></button>
                                        <button className="btn-icon" title="Hapus" onClick={() => handleDelete(promo.id)}><Trash2 size={18} color="#EF4444" /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {promos.length === 0 && (
                            <tr>
                                <td colSpan="6" className="text-center text-muted" style={{ padding: '2rem' }}>Tidak ada data promo.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
