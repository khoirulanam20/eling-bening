import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getTickets, saveTickets } from '../../../utils/data';
import toast from 'react-hot-toast';

export default function AddTicket() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', days: 'Weekday', price: '', desc: '', status: 'active' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const tickets = getTickets();
        const newId = tickets.length > 0 ? Math.max(...tickets.map(t => t.id)) + 1 : 1;
        const updated = [...tickets, { ...formData, id: newId, price: Number(formData.price) }];
        saveTickets(updated);
        toast.success('Tiket berhasil ditambahkan');
        navigate('/admin/tickets');
    };

    return (
        <div className="animate-fade-in">
            <div className="admin-page-header">
                <div>
                    <button onClick={() => navigate('/admin/tickets')} className="flex items-center text-muted hover:text-main mb-2 transition-colors">
                        <ArrowLeft size={16} className="mr-1" /> Kembali ke Daftar Tiket
                    </button>
                    <h1>Tambah Tiket Baru</h1>
                </div>
            </div>

            <div className="admin-card" style={{ maxWidth: '600px' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                        <label className="admin-label">Nama Tiket</label>
                        <input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} type="text" className="admin-input" placeholder="misal: Tiket Terusan" />
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
                            <input required value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} type="number" className="admin-input" placeholder="25000" />
                        </div>
                    </div>
                    <div>
                        <label className="admin-label">Deskripsi Singkat</label>
                        <textarea required rows="4" value={formData.desc} onChange={e => setFormData({ ...formData, desc: e.target.value })} className="admin-input" placeholder="Jelaskan apa yang didapat dengan tiket ini..."></textarea>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                        <button type="button" onClick={() => navigate('/admin/tickets')} className="btn-primary-outline" style={{ flex: 1, justifyContent: 'center' }}>Batal</button>
                        <button type="submit" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>Simpan Tiket</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
