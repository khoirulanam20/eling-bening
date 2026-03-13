import { useState, useEffect } from 'react';
import { Check, X, Clock } from 'lucide-react';
import { getReschedules, saveReschedules } from '../../utils/data';
import toast from 'react-hot-toast';

export default function Reschedule() {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        setRequests(getReschedules());
    }, []);

    const handleAction = (id, newStatus) => {
        const updated = requests.map(r => r.id === id ? { ...r, status: newStatus } : r);
        setRequests(updated);
        saveReschedules(updated);
        toast.success(`Permintaan ${newStatus === 'approved' ? 'disetujui' : 'ditolak'}`);
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'pending': return <span className="badge" style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}><Clock size={12} className="mr-1" /> Menunggu</span>;
            case 'approved': return <span className="badge active"><Check size={12} className="mr-1" /> Disetujui</span>;
            case 'rejected': return <span className="badge inactive"><X size={12} className="mr-1" /> Ditolak</span>;
            default: return <span className="badge">{status}</span>;
        }
    };

    return (
        <div className="animate-fade-in">
            <div className="admin-page-header">
                <div>
                    <h1>Permintaan Reschedule</h1>
                    <p className="text-muted mt-1">Kelola permintaan perubahan jadwal dari pengunjung.</p>
                </div>
            </div>

            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>ID & Pengunjung</th>
                            <th>Layanan</th>
                            <th>Jadwal Lama</th>
                            <th>Jadwal Baru</th>
                            <th>Alasan</th>
                            <th>Status</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map(req => (
                            <tr key={req.id}>
                                <td>
                                    <div className="font-bold">{req.bookingId}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{req.customerName}</div>
                                </td>
                                <td>{req.itemName}</td>
                                <td className="text-muted line-through">{new Date(req.oldDate).toLocaleDateString('id-ID')}</td>
                                <td className="font-bold text-main">{new Date(req.newDate).toLocaleDateString('id-ID')}</td>
                                <td>
                                    <div style={{ maxWidth: '200px', fontSize: '0.875rem' }} title={req.reason}>
                                        {req.reason.length > 50 ? req.reason.substring(0, 50) + '...' : req.reason}
                                    </div>
                                </td>
                                <td>{getStatusBadge(req.status)}</td>
                                <td>
                                    {req.status === 'pending' && (
                                        <div className="action-buttons">
                                            <button className="btn-icon" title="Setujui" onClick={() => handleAction(req.id, 'approved')} style={{ backgroundColor: '#ECFDF5' }}>
                                                <Check size={18} color="#10B981" />
                                            </button>
                                            <button className="btn-icon" title="Tolak" onClick={() => handleAction(req.id, 'rejected')} style={{ backgroundColor: '#FEF2F2' }}>
                                                <X size={18} color="#EF4444" />
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                        {requests.length === 0 && (
                            <tr>
                                <td colSpan="7" className="text-center text-muted" style={{ padding: '2rem' }}>Tidak ada permintaan reschedule.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
