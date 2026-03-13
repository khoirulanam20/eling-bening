import { useState } from 'react';
import { QrCode, Scan, Search } from 'lucide-react';

export default function Scanner() {
    const [scannedId, setScannedId] = useState('');

    return (
        <div className="animate-fade-in">
            <div className="admin-page-header">
                <div>
                    <h1>Scanner & Pengunjung</h1>
                    <p className="text-muted mt-1">Scan kode QR tiket pengunjung untuk verifikasi kedatangan.</p>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '2rem' }}>
                <div className="admin-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem', border: '2px dashed var(--primary)', backgroundColor: '#F0FDF4' }}>
                    <Scan size={80} color="var(--primary)" style={{ marginBottom: '1.5rem', opacity: 0.5 }} />
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Arahkan Kamera ke QR Code</h2>
                    <p className="text-muted mb-8 text-center">Pastikan QR Code tiket berada dalam area kotak scanner perangkat Anda.</p>
                    <button className="btn-primary" style={{ padding: '1rem 3rem' }}>Aktifkan Kamera</button>
                </div>

                <div className="admin-card">
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>Atau Input Manual</h3>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                        <input
                            type="text"
                            placeholder="Masukkan Order ID atau Kode Unik Tiket..."
                            value={scannedId}
                            onChange={(e) => setScannedId(e.target.value)}
                            style={{ flex: 1, padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}
                        />
                        <button className="btn-primary px-6"><Search size={18} /> Cek Tiket</button>
                    </div>

                    <div style={{ padding: '2rem', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-md)', textAlign: 'center', border: '1px solid var(--border-color)' }}>
                        <QrCode size={48} color="var(--text-muted)" style={{ margin: '0 auto 1rem', opacity: 0.3 }} />
                        <p className="text-muted">Hasil scan tiket atau pencarian manual akan muncul di sini.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
