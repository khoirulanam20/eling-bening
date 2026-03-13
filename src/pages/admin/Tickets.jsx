import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, X } from 'lucide-react';
import { getTickets, saveTickets, formatRupiah } from '../../utils/data';

export default function Tickets() {
    const [tickets, setTickets] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ id: null, name: '', days: 'Weekday', price: 0, desc: '', status: 'active' });
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        setTickets(getTickets());
    }, []);

    const openModal = (ticket = null) => {
        if (ticket) {
            setFormData(ticket);
            setIsEdit(true);
        } else {
            setFormData({ id: null, name: '', days: 'Weekday', price: '', desc: '', status: 'active' });
            setIsEdit(false);
        }
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let updated;
        if (isEdit) {
            updated = tickets.map(t => t.id === formData.id ? { ...formData, price: Number(formData.price) } : t);
        } else {
            const newId = tickets.length > 0 ? Math.max(...tickets.map(t => t.id)) + 1 : 1;
            updated = [...tickets, { ...formData, id: newId, price: Number(formData.price) }];
        }
        setTickets(updated);
        saveTickets(updated);
        closeModal();
    };

    const handleDelete = (id) => {
        if (confirm('Yakin ingin menghapus tiket ini?')) {
            const updated = tickets.filter(t => t.id !== id);
            setTickets(updated);
            saveTickets(updated);
        }
    };

    const toggleStatus = (id) => {
        const updated = tickets.map(t => t.id === id ? { ...t, status: t.status === 'active' ? 'inactive' : 'active' } : t);
        setTickets(updated);
        saveTickets(updated);
    };

    return (
        <div className="animate-fade-in relative">
            <div className="admin-page-header">
                <div>
                    <h1>Manajemen Tiket</h1>
                    <p className="text-muted mt-1">Mengatur jenis tiket dan status aktif untuk area wisata.</p>
                </div>
                <button className="btn-primary" onClick={() => openModal()}>
                    <Plus size={18} /> Tambah Tiket Baru
                </button>
            </div>

            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Nama Tiket</th>
                            <th>Hari Berlaku</th>
                            <th>Harga</th>
                            <th>Status</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map(ticket => (
                            <tr key={ticket.id}>
                                <td style={{ fontWeight: 500 }}>
                                    {ticket.name}
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{ticket.desc.substring(0, 50)}...</div>
                                </td>
                                <td>{ticket.days}</td>
                                <td style={{ fontWeight: 600, color: 'var(--text-main)' }}>{formatRupiah(ticket.price)}</td>
                                <td>
                                    <span
                                        className={`badge ${ticket.status === 'active' ? 'active' : 'inactive'}`}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => toggleStatus(ticket.id)}
                                    >
                                        {ticket.status === 'active' ? 'Aktif' : 'Non-aktif'}
                                    </span>
                                </td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="btn-icon" title="Edit" onClick={() => openModal(ticket)}><Edit size={18} /></button>
                                        <button className="btn-icon" title="Hapus" onClick={() => handleDelete(ticket.id)}><Trash2 size={18} color="#EF4444" /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {tickets.length === 0 && (
                            <tr>
                                <td colSpan="5" className="text-center text-muted" style={{ padding: '2rem' }}>Tidak ada data tiket.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* CRUD Modal */}
            {isModalOpen && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
                    <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', width: '100%', maxWidth: '500px', padding: '2rem', boxShadow: 'var(--shadow-lg)' }} className="animate-fade-in">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{isEdit ? 'Edit Tiket' : 'Tambah Tiket Baru'}</h2>
                            <button onClick={closeModal} style={{ color: 'var(--text-muted)' }}><X size={24} /></button>
                        </div>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Nama Tiket</label>
                                <input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Hari Berlaku</label>
                                    <select value={formData.days} onChange={e => setFormData({ ...formData, days: e.target.value })} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                                        <option>Weekday</option>
                                        <option>Weekend</option>
                                        <option>Semua Hari</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Harga (Rp)</label>
                                    <input required value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} type="number" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
                                </div>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Deskripsi Singkat</label>
                                <textarea required rows="3" value={formData.desc} onChange={e => setFormData({ ...formData, desc: e.target.value })} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}></textarea>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                                <button type="button" onClick={closeModal} className="btn-primary-outline" style={{ flex: 1, justifyContent: 'center' }}>Batal</button>
                                <button type="submit" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>{isEdit ? 'Simpan Perubahan' : 'Tambah Tiket'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
