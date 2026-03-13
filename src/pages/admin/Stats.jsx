import { BarChart, TrendingUp, Users, Wallet } from 'lucide-react';

export default function Stats() {
    const stats = [
        { label: 'Total Tiket (Bulan Ini)', value: '8.420', icon: <TrendingUp className="text-blue-500" /> },
        { label: 'Total Booking Resort', value: '213', icon: <Users className="text-secondary" /> },
        { label: 'Rata-rata Occupancy', value: '76%', icon: <BarChart className="text-accent" /> },
        { label: 'Revenue (Bulan Ini)', value: 'Rp 342M', icon: <Wallet className="text-primary" />, highlight: true }
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
                    <div style={{ height: '300px', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                        Chart visualization would go here
                    </div>
                </div>
                <div className="admin-card">
                    <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '1.5rem' }}>Komposisi Tipe Booking</h3>
                    <div style={{ height: '300px', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                        Doughnut chart would go here
                    </div>
                </div>
            </div>
        </div>
    );
}
