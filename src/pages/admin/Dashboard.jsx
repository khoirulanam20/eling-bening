import { useState, useEffect } from 'react';
import { Users, Ticket, Building, CircleDollarSign, TrendingUp } from 'lucide-react';
import { getTickets, getRooms, formatRupiah } from '../../utils/data';

export default function Dashboard() {
    const [stats, setStats] = useState({
        activeTickets: 0,
        totalRooms: 0,
        availableRooms: 0,
        todayRevenue: 15250000 // Dummy data placeholder
    });

    useEffect(() => {
        const tickets = getTickets();
        const rooms = getRooms();

        setStats({
            activeTickets: tickets.filter(t => t.status === 'active').length,
            totalRooms: rooms.length,
            availableRooms: rooms.filter(r => r.stock > 0).length,
            todayRevenue: 15250000
        });
    }, []);

    const statCards = [
        { title: 'Pendapatan Hari Ini', value: formatRupiah(stats.todayRevenue), icon: <CircleDollarSign size={24} />, color: '#10B981', trend: '+12.5%' },
        { title: 'Kamar Tersedia', value: `${stats.availableRooms} / ${stats.totalRooms}`, icon: <Building size={24} />, color: '#3B82F6', trend: 'Sedang' },
        { title: 'Tiket Aktif / Jenis', value: stats.activeTickets, icon: <Ticket size={24} />, color: '#F59E0B', trend: 'Normal' },
        { title: 'Pengunjung (Est)', value: '1,245', icon: <Users size={24} />, color: '#8B5CF6', trend: '+5.2%' }
    ];

    return (
        <div className="animate-fade-in">
            <div className="admin-page-header">
                <h1>Dashboard Overview</h1>
                <button className="btn-primary">
                    <TrendingUp size={18} /> Download Laporan
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                {statCards.map((card, idx) => (
                    <div key={idx} className="admin-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem' }}>
                        <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', backgroundColor: `${card.color}15`, color: card.color }}>
                            {card.icon}
                        </div>
                        <div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.25rem', fontWeight: 500 }}>{card.title}</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>{card.value}</div>
                            <div style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 600 }}>{card.trend} vs Kemarin</div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                <div className="admin-card" style={{ height: '400px' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1.5rem' }}>Grafik Kunjungan Mingguan</h3>
                    <div style={{ width: '100%', height: 'calc(100% - 3rem)', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', border: '1px dashed var(--border-color)' }}>
                        [ Area Chart Component Placeholder ]
                    </div>
                </div>
                <div className="admin-card">
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1.5rem' }}>Aktivitas Terbaru</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)', marginTop: '0.4rem' }}></div>
                                <div>
                                    <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Pemesanan Kamar #{1000 + i}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>2 menit yang lalu - Bpk. Sudirman</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
