import { useState } from 'react';

export default function Reschedule() {
    return (
        <div className="animate-fade-in">
            <div className="admin-page-header">
                <div>
                    <h1>Permintaan Reschedule</h1>
                    <p className="text-muted mt-1">Kelola permintaan perubahan jadwal dari pengunjung.</p>
                </div>
            </div>
            <div className="admin-card text-center text-muted" style={{ padding: '4rem' }}>
                Tidak ada permintaan reschedule saat ini.
            </div>
        </div>
    );
}
