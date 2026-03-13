import { useState, useEffect } from 'react';
import { Users, Ticket, Building, CircleDollarSign, TrendingUp, Download } from 'lucide-react';
import { getTickets, getRooms, getBookings, formatRupiah } from '../../utils/data';
import toast from 'react-hot-toast';

export default function Dashboard() {
    const [stats, setStats] = useState({
        activeTickets: 0,
        totalRooms: 0,
        availableRooms: 0,
        todayRevenue: 0
    });
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const tickets = getTickets();
        const rooms = getRooms();
        const allBookings = getBookings();
        setBookings(allBookings);

        // Calculate today's revenue (mock logic based on latest bookings)
        const today = new Date().toISOString().split('T')[0];
        const todayRev = allBookings
            .filter(b => b.date.startsWith(today) && b.status === 'success')
            .reduce((sum, b) => sum + b.total, 0);

        setStats({
            activeTickets: tickets.filter(t => t.status === 'active').length,
            totalRooms: rooms.length,
            availableRooms: rooms.filter(r => r.stock > 0).length,
            todayRevenue: todayRev || 15250000 // Fallback to dummy if none today
        });
    }, []);

    const downloadReport = () => {
        const headers = ['Order ID', 'Pelanggan', 'Item', 'Tanggal', 'Total', 'Status'];
        const csvRows = [
            headers.join(','),
            ...bookings.map(b => [
                b.id,
                b.name,
                `"${b.itemName}"`,
                new Date(b.date).toLocaleDateString('id-ID'),
                b.total,
                b.status
            ].join(','))
        ];

        const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden', '');
        a.setAttribute('href', url);
        a.setAttribute('download', `laporan_eling_bening_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        toast.success('Laporan berhasil diunduh');
    };

    const statCards = [
        { title: 'Pendapatan Hari Ini', value: formatRupiah(stats.todayRevenue), icon: <CircleDollarSign size={24} />, color: '#10B981', trend: '+12.5%' },
        { title: 'Kamar Tersedia', value: `${stats.availableRooms} / ${stats.totalRooms}`, icon: <Building size={24} />, color: '#3B82F6', trend: 'Sedang' },
        { title: 'Tiket Aktif / Jenis', value: stats.activeTickets, icon: <Ticket size={24} />, color: '#F59E0B', trend: 'Normal' },
        { title: 'Pengunjung (Est)', value: '1,245', icon: <Users size={24} />, color: '#8B5CF6', trend: '+5.2%' }
    ];

    // Weekly data mock for SVG chart
    const weeklyData = [
        { day: 'Sen', val: 450 },
        { day: 'Sel', val: 380 },
        { day: 'Rab', val: 420 },
        { day: 'Kam', val: 390 },
        { day: 'Jum', val: 580 },
        { day: 'Sab', val: 850 },
        { day: 'Min', val: 920 }
    ];

    const maxVal = Math.max(...weeklyData.map(d => d.val));
    const chartHeight = 220;
    const chartWidth = 500;

    return (
        <div className="animate-fade-in">
            <div className="admin-page-header">
                <div>
                    <h1>Dashboard Overview</h1>
                    <p className="text-muted mt-1">Pantau performa operasional harian Anda.</p>
                </div>
                <button className="btn-primary" onClick={downloadReport}>
                    <Download size={18} /> Download Laporan (CSV)
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
                <div className="admin-card" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Grafik Kunjungan Mingguan</h3>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--primary)' }}></span> Pengunjung
                            </span>
                        </div>
                    </div>

                    <div style={{ flex: 1, position: 'relative', minHeight: '250px' }}>
                        <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                            {/* Grid Lines */}
                            {[0, 0.25, 0.5, 0.75, 1].map((p, i) => (
                                <line
                                    key={i}
                                    x1="0" y1={chartHeight * (1 - p)}
                                    x2={chartWidth} y2={chartHeight * (1 - p)}
                                    stroke="#E2E8F0" strokeDasharray="4"
                                />
                            ))}

                            {/* Area Path */}
                            <path
                                d={`M 0 ${chartHeight} ${weeklyData.map((d, i) =>
                                    `L ${(i * chartWidth) / (weeklyData.length - 1)} ${chartHeight - (d.val / maxVal) * chartHeight}`
                                ).join(' ')} L ${chartWidth} ${chartHeight} Z`}
                                fill="var(--primary-light)"
                                fillOpacity="0.3"
                            />

                            {/* Line Path */}
                            <path
                                d={`M 0 ${chartHeight - (weeklyData[0].val / maxVal) * chartHeight} ${weeklyData.map((d, i) =>
                                    `L ${(i * chartWidth) / (weeklyData.length - 1)} ${chartHeight - (d.val / maxVal) * chartHeight}`
                                ).join(' ')}`}
                                fill="none"
                                stroke="var(--primary)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            {/* Area Points */}
                            {weeklyData.map((d, i) => (
                                <circle
                                    key={i}
                                    cx={(i * chartWidth) / (weeklyData.length - 1)}
                                    cy={chartHeight - (d.val / maxVal) * chartHeight}
                                    r="4" fill="white" stroke="var(--primary)" strokeWidth="2"
                                />
                            ))}

                            {/* X Labels */}
                            {weeklyData.map((d, i) => (
                                <text
                                    key={i}
                                    x={(i * chartWidth) / (weeklyData.length - 1)}
                                    y={chartHeight + 25}
                                    textAnchor="middle"
                                    style={{ fontSize: 12, fill: '#64748B', fontWeight: 500 }}
                                >
                                    {d.day}
                                </text>
                            ))}
                        </svg>
                    </div>
                </div>

                <div className="admin-card" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1.5rem' }}>Aktivitas Terbaru</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {bookings.slice(0, 5).map((b, i) => (
                            <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', borderBottom: i < 4 ? '1px solid var(--border-color)' : 'none', paddingBottom: i < 4 ? '1rem' : '0' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <TrendingUp size={18} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)' }}>{b.name}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Memesan {b.itemName}</div>
                                    <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)', marginTop: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{new Date(b.date).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</div>
                                </div>
                                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#10B981' }}>{formatRupiah(b.total)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
