import { BarChart, TrendingUp, Users, Wallet } from 'lucide-react';

export default function Stats() {
    const stats = [
        { label: 'Total Tiket (Bulan Ini)', value: '8.420', icon: <TrendingUp className="text-blue-500" /> },
        { label: 'Total Booking Resort', value: '213', icon: <Users className="text-secondary" /> },
        { label: 'Rata-rata Occupancy', value: '76%', icon: <BarChart className="text-accent" /> },
        { label: 'Revenue (Bulan Ini)', value: 'Rp 342M', icon: <Wallet className="text-primary" />, highlight: true }
    ];

    // Mock data for Bar Chart
    const dailyTickets = [
        { day: 1, val: 240 }, { day: 5, val: 320 }, { day: 10, val: 580 },
        { day: 15, val: 410 }, { day: 20, val: 650 }, { day: 25, val: 890 },
        { day: 30, val: 720 }
    ];
    const maxTicket = Math.max(...dailyTickets.map(d => d.val));

    // Mock data for Doughnut
    const bookingTypes = [
        { label: 'Tiket Reguler', val: 65, color: 'var(--primary)' },
        { label: 'Resort Booking', val: 25, color: '#3B82F6' },
        { label: 'Paket Rombongan', val: 10, color: '#F59E0B' }
    ];

    return (
        <div className="animate-fade-in">
            <header className="admin-page-header">
                <div>
                    <h1>Statistik Operasional</h1>
                    <p className="text-muted mt-1">Laporan performa bulanan Eling Bening.</p>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                {stats.map((s, i) => (
                    <div key={i} className={`admin-card ${s.highlight ? 'border-l-4 border-l-primary' : ''}`}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</p>
                            {s.icon}
                        </div>
                        <h2 style={{ fontSize: '1.875rem', fontWeight: 700, color: s.highlight ? 'var(--primary)' : 'var(--text-main)' }}>{s.value}</h2>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="admin-card">
                    <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '1.5rem' }}>Tren Tiket Harian (30 Hari)</h3>
                    <div style={{ height: '300px', display: 'flex', alignItems: 'flex-end', gap: '1rem', padding: '1rem' }}>
                        {dailyTickets.map((d, i) => (
                            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                                <div
                                    style={{
                                        width: '100%',
                                        height: `${(d.val / maxTicket) * 200}px`,
                                        backgroundColor: i === 5 ? 'var(--primary)' : 'var(--primary-light)',
                                        borderRadius: '4px 4px 0 0',
                                        transition: 'height 1s ease-out'
                                    }}
                                    title={`${d.val} Tiket`}
                                />
                                <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Tgl {d.day}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="admin-card">
                    <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '1.5rem' }}>Komposisi Tipe Booking</h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem', height: '300px' }}>
                        <svg width="200" height="200" viewBox="0 0 42 42">
                            <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#F1F5F9" strokeWidth="6"></circle>
                            {/* Simple doughnut wedges using stroke-dasharray */}
                            <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="var(--primary)" strokeWidth="6" strokeDasharray="65 35" strokeDashoffset="25"></circle>
                            <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#3B82F6" strokeWidth="6" strokeDasharray="25 75" strokeDashoffset="60"></circle>
                            <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#F59E0B" strokeWidth="6" strokeDasharray="10 90" strokeDashoffset="35"></circle>
                        </svg>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {bookingTypes.map((t, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{ width: 12, height: 12, borderRadius: '3px', backgroundColor: t.color }}></div>
                                    <div>
                                        <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>{t.label}</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.val}% dari total</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
