export default function Seo() {
    return (
        <div className="animate-fade-in">
            <div className="admin-page-header">
                <div>
                    <h1>SEO & Pengaturan Web</h1>
                    <p className="text-muted mt-1">Konfigurasi meta tags, judul halaman, dan informasi kontak situs.</p>
                </div>
                <button className="btn-primary">Simpan Perubahan</button>
            </div>
            <div className="admin-card" style={{ padding: '2rem' }}>
                <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '600px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Situs Judul (Title)</label>
                        <input type="text" defaultValue="Eling Bening Resort & Rekreasi" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Meta Description</label>
                        <textarea rows="4" defaultValue="Destinasi alam premium di Ambarawa dengan fasilitas resort eksklusif dan rekreasi air." style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}></textarea>
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>WhatsApp Kontak Utama</label>
                        <input type="text" defaultValue="081234567890" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
