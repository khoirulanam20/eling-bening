import { useState, useEffect } from 'react';
import { Check, X, Clock, Eye, Calendar, User, FileText, Hash, ArrowLeft } from 'lucide-react';
import { getReschedules, saveReschedules, formatRupiah } from '../../utils/data';
import toast from 'react-hot-toast';

export default function Reschedule() {
    const [requests, setRequests] = useState([]);
    const [selectedReq, setSelectedReq] = useState(null);

    useEffect(() => {
        setRequests(getReschedules());
    }, []);

    const handleAction = (id, newStatus) => {
        const updated = requests.map(r => r.id === id ? { ...r, status: newStatus } : r);
        setRequests(updated);
        saveReschedules(updated);
        toast.success(`Permintaan ${newStatus === 'approved' ? 'disetujui' : 'ditolak'}`);
        if (selectedReq && selectedReq.id === id) {
            setSelectedReq({ ...selectedReq, status: newStatus });
        }
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
        <>
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
                                <th>ID Booking</th>
                                <th>Pengunjung</th>
                                <th>Layanan</th>
                                <th>Jadwal Baru</th>
                                <th>Status</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map(req => (
                                <tr key={req.id}>
                                    <td style={{ fontWeight: 600, color: 'var(--primary)' }}>{req.bookingId}</td>
                                    <td>{req.customerName}</td>
                                    <td>{req.itemName}</td>
                                    <td className="font-bold text-main">{new Date(req.newDate).toLocaleDateString('id-ID')}</td>
                                    <td>{getStatusBadge(req.status)}</td>
                                    <td>
                                        <div className="action-buttons">
                                            <button className="btn-icon" title="Detail" onClick={() => setSelectedReq(req)}><Eye size={18} /></button>
                                            <div style={{ display: 'flex', gap: '0.25rem', padding: '2px', backgroundColor: '#F1F5F9', borderRadius: 'var(--radius-md)' }}>
                                                <button
                                                    className={`btn-icon ${req.status === 'pending' ? 'bg-white shadow-sm' : ''}`}
                                                    title="Set Pending"
                                                    onClick={() => handleAction(req.id, 'pending')}
                                                    style={{ color: '#92400E', padding: '4px' }}
                                                >
                                                    <Clock size={16} />
                                                </button>
                                                <button
                                                    className={`btn-icon ${req.status === 'approved' ? 'bg-white shadow-sm' : ''}`}
                                                    title="Setujui"
                                                    onClick={() => handleAction(req.id, 'approved')}
                                                    style={{ color: '#10B981', padding: '4px' }}
                                                >
                                                    <Check size={16} />
                                                </button>
                                                <button
                                                    className={`btn-icon ${req.status === 'rejected' ? 'bg-white shadow-sm' : ''}`}
                                                    title="Tolak"
                                                    onClick={() => handleAction(req.id, 'rejected')}
                                                    style={{ color: '#EF4444', padding: '4px' }}
                                                >
                                                    <X size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {requests.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="text-center text-muted" style={{ padding: '2rem' }}>Tidak ada permintaan reschedule.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Detail Modal - Moved outside animate-fade-in to prevent transform trapping */}
            {selectedReq && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(255,255,255,0.4)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', backdropFilter: 'blur(12px)' }}>
                    <div className="admin-card animate-scale-up" style={{ maxWidth: '600px', width: '100%', position: 'relative', padding: '2rem', maxHeight: '90vh', overflowY: 'auto' }}>
                        <button onClick={() => setSelectedReq(null)} style={{ position: 'absolute', right: '1.5rem', top: '1.5rem', color: 'var(--text-muted)' }}><X size={20} /></button>

                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem' }}>Detail Permintaan Reschedule</h2>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div>
                                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Hash size={14} /> ID Booking
                                    </div>
                                    <div style={{ fontWeight: 700, fontSize: '1.125rem' }}>{selectedReq.bookingId}</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <User size={14} /> Pengunjung
                                    </div>
                                    <div style={{ fontWeight: 600 }}>{selectedReq.customerName}</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div>
                                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Clock size={14} /> Status Saat Ini
                                    </div>
                                    <div>{getStatusBadge(selectedReq.status)}</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Calendar size={14} /> Tgl Request
                                    </div>
                                    <div style={{ fontSize: '0.875rem' }}>{new Date(selectedReq.requestDate || Date.now()).toLocaleString('id-ID')}</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ backgroundColor: '#F8FAFC', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Jadwal Lama</div>
                                    <div style={{ fontWeight: 600, textDecoration: 'line-through', color: '#64748B' }}>{new Date(selectedReq.oldDate).toLocaleDateString('id-ID')}</div>
                                </div>
                                <ArrowLeft size={16} style={{ transform: 'rotate(180deg)', color: 'var(--primary)' }} />
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Jadwal Baru</div>
                                    <div style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '1.125rem' }}>{new Date(selectedReq.newDate).toLocaleDateString('id-ID')}</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <FileText size={14} /> Alasan Reschedule
                                </div>
                                <div style={{ fontSize: '0.875rem', fontStyle: 'italic', color: '#475569', lineHeight: 1.6 }}>"{selectedReq.reason}"</div>
                            </div>
                        </div>

                        {selectedReq.status === 'pending' ? (
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button onClick={() => handleAction(selectedReq.id, 'rejected')} style={{ flex: 1, padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #EF4444', color: '#EF4444', fontWeight: 600 }}>Tolak Permintaan</button>
                                <button onClick={() => handleAction(selectedReq.id, 'approved')} style={{ flex: 1, padding: '0.75rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--primary)', color: 'white', fontWeight: 600 }}>Setujui & Update Jadwal</button>
                            </div>
                        ) : (
                            <button onClick={() => setSelectedReq(null)} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', backgroundColor: '#F1F5F9', color: '#475569', fontWeight: 600 }}>Tutup</button>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
