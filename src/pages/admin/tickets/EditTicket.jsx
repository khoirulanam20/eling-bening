import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getTickets, saveTickets } from '../../../utils/data';
import toast from 'react-hot-toast';

export default function EditTicket() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        const tickets = getTickets();
        const ticket = tickets.find(t => t.id === Number(id));
        if (ticket) {
            setFormData(ticket);
        } else {
            toast.error('Tiket tidak ditemukan');
            navigate('/admin/tickets');
        }
    }, [id, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const tickets = getTickets();
        const updated = tickets.map(t => t.id === Number(id) ? { ...formData, price: Number(formData.price) } : t);
        saveTickets(updated);
        toast.success('Perubahan berhasil disimpan');
        navigate('/admin/tickets');
    };

    if (!formData) return <div className="p-8 text-center text-muted">Loading...</div>;

    return (
        <div className="animate-fade-in">
            <div className="admin-page-header">
                <div>
                    <button onClick={() => navigate('/admin/tickets')} className="flex items-center text-muted hover:text-main mb-2 transition-colors">
                        <ArrowLeft size={16} className="mr-1" /> Kembali ke Daftar Tiket
                    </button>
                    <h1>Edit Tiket</h1>
                </div>
            </div>

            <div className="admin-card" style={{ maxWidth: '600px' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                        <label className="admin-label">Nama Tiket</label>
                        <input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} type="text" className="admin-input" />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label className="admin-label">Hari Berlaku</label>
                            <select value={formData.days} onChange={e => setFormData({ ...formData, days: e.target.value })} className="admin-input">
                                <option>Weekday</option>
                                <option>Weekend</option>
                                <option>Semua Hari</option>
                            </select>
                        </div>
                        <div>
                            <label className="admin-label">Harga (Rp)</label>
                            <input required value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} type="number" className="admin-input" />
                        </div>
                    </div>
                    <div>
                        <label className="admin-label">Deskripsi Singkat</label>
                        <textarea required rows="4" value={formData.desc} onChange={e => setFormData({ ...formData, desc: e.target.value })} className="admin-input"></textarea>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                        <button type="button" onClick={() => navigate('/admin/tickets')} className="btn-primary-outline" style={{ flex: 1, justifyContent: 'center' }}>Batal</button>
                        <button type="submit" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>Simpan Perubahan</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
