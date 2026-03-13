import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getTickets, saveTickets, formatRupiah } from '../../utils/data';
import toast from 'react-hot-toast';

export default function Tickets() {
    const [tickets, setTickets] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setTickets(getTickets());
    }, []);

    const handleDelete = (id) => {
        if (confirm('Yakin ingin menghapus tiket ini?')) {
            const updated = tickets.filter(t => t.id !== id);
            setTickets(updated);
            saveTickets(updated);
            toast.success('Tiket berhasil dihapus');
        }
    };

    const toggleStatus = (id) => {
        const updated = tickets.map(t => t.id === id ? { ...t, status: t.status === 'active' ? 'inactive' : 'active' } : t);
        setTickets(updated);
        saveTickets(updated);
        toast.success('Status tiket diperbarui');
    };

    return (
        <div className="animate-fade-in relative">
            <div className="admin-page-header">
                <div>
                    <h1>Manajemen Tiket</h1>
                    <p className="text-muted mt-1">Mengatur jenis tiket dan status aktif untuk area wisata.</p>
                </div>
                <button className="btn-primary" onClick={() => navigate('/admin/tickets/add')}>
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
                                        <button className="btn-icon" title="Edit" onClick={() => navigate(`/admin/tickets/edit/${ticket.id}`)}><Edit size={18} /></button>
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
        </div>
    );
}
