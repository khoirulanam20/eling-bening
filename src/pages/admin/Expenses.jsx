import { useState, useEffect } from 'react';
import { Plus, Trash2, Calendar, FileText, Tag, CircleDollarSign, Filter, Search } from 'lucide-react';
import { getExpenses, saveExpenses, formatRupiah } from '../../utils/data';
import toast from 'react-hot-toast';

export default function Expenses() {
    const [expenses, setExpenses] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ title: '', amount: '', category: 'Operasional', date: new Date().toISOString().split('T')[0], note: '' });

    useEffect(() => {
        setExpenses(getExpenses());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newExpense = { ...formData, id: Date.now(), amount: Number(formData.amount) };
        const updated = [...expenses, newExpense];
        setExpenses(updated);
        saveExpenses(updated);
        setShowForm(false);
        setFormData({ title: '', amount: '', category: 'Operasional', date: new Date().toISOString().split('T')[0], note: '' });
        toast.success('Pengeluaran berhasil dicatat');
    };

    const handleDelete = (id) => {
        if (confirm('Hapus catatan pengeluaran ini?')) {
            const updated = expenses.filter(e => e.id !== id);
            setExpenses(updated);
            saveExpenses(updated);
            toast.success('Catatan dihapus');
        }
    };

    return (
        <div className="animate-fade-in">
            <div className="admin-page-header">
                <div>
                    <h1>Pengeluaran Operasional</h1>
                    <p className="text-muted mt-1">Catat dan kelola semua biaya operasional kawasan.</p>
                </div>
                <button className="btn-primary" onClick={() => setShowForm(!showForm)}>
                    <Plus size={18} /> {showForm ? 'Batal' : 'Tambah Pengeluaran'}
                </button>
            </div>

            {showForm && (
                <div className="admin-card animate-scale-up" style={{ marginBottom: '2rem', border: '1px solid var(--primary)' }}>
                    <h3 style={{ fontWeight: 700, marginBottom: '1.5rem' }}>Input Pengeluaran Baru</h3>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
                            <div>
                                <label className="admin-label">Judul / Keperluan</label>
                                <input required value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} type="text" className="admin-input" placeholder="misal: Listrik Bulanan" />
                            </div>
                            <div>
                                <label className="admin-label">Kategori</label>
                                <select value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} className="admin-input">
                                    <option>Operasional</option>
                                    <option>Pemeliharaan</option>
                                    <option>Gaji Karyawan</option>
                                    <option>Pemasaran</option>
                                    <option>Lainnya</option>
                                </select>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                                <label className="admin-label">Jumlah (Rp)</label>
                                <input required value={formData.amount} onChange={e => setFormData({ ...formData, amount: e.target.value })} type="number" className="admin-input" />
                            </div>
                            <div>
                                <label className="admin-label">Tanggal</label>
                                <input required value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} type="date" className="admin-input" />
                            </div>
                        </div>
                        <div>
                            <label className="admin-label">Catatan Tambahan</label>
                            <textarea value={formData.note} onChange={e => setFormData({ ...formData, note: e.target.value })} rows="2" className="admin-input"></textarea>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button type="submit" className="btn-primary">Simpan Pengeluaran</button>
                        </div>
                    </form>
                </div>
            )}

            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Tanggal</th>
                            <th>Keterangan</th>
                            <th>Kategori</th>
                            <th>Jumlah</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map(exp => (
                            <tr key={exp.id}>
                                <td>{new Date(exp.date).toLocaleDateString('id-ID')}</td>
                                <td>
                                    <div style={{ fontWeight: 600 }}>{exp.title}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{exp.note}</div>
                                </td>
                                <td>
                                    <span className="badge" style={{ backgroundColor: '#F3F4F6', color: '#374151' }}>{exp.category}</span>
                                </td>
                                <td style={{ fontWeight: 700, color: '#EF4444' }}>- {formatRupiah(exp.amount)}</td>
                                <td>
                                    <button className="btn-icon" onClick={() => handleDelete(exp.id)}><Trash2 size={18} color="#EF4444" /></button>
                                </td>
                            </tr>
                        ))}
                        {expenses.length === 0 && (
                            <tr>
                                <td colSpan="5" className="text-center text-muted" style={{ padding: '3rem' }}>Belum ada pengeluaran tercatat.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
