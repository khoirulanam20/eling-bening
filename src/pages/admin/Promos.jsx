import { useState } from 'react';

export default function Promos() {
    const [promos, setPromos] = useState([]);

    return (
        <div className="animate-fade-in">
            <div className="admin-page-header">
                <div>
                    <h1>Promo & Diskon</h1>
                    <p className="text-muted mt-1">Kelola kode promo dan diskon untuk tiket & resort.</p>
                </div>
                <button className="btn-primary">Tambah Promo</button>
            </div>
            <div className="admin-card text-center text-muted" style={{ padding: '4rem' }}>
                Belum ada promo aktif. Silahkan buat promo baru.
            </div>
        </div>
    );
}
