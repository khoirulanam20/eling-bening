import { useNavigate } from 'react-router-dom';
import { CircleDollarSign, TrendingUp, TrendingDown, FileText, ArrowRight, Wallet, Building, Ticket } from 'lucide-react';
import { formatRupiah, getBookings, getExpenses } from '../../utils/data';
import { useState, useEffect } from 'react';

export default function Finance() {
    const navigate = useNavigate();
    const [stats, setStats] = useState({ income: 0, expense: 0, balance: 0 });

    useEffect(() => {
        const bookings = getBookings();
        const expenses = getExpenses();
        const totalIncome = bookings.filter(b => b.status === 'success').reduce((sum, b) => sum + b.total, 0);
        const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);
        setStats({ income: totalIncome, expense: totalExpense, balance: totalIncome - totalExpense });
    }, []);

    const menuItems = [
        {
            title: 'Rekapitulasi Keuangan',
            desc: 'Ringkasan arus kas masuk dan keluar secara keseluruhan.',
            icon: <CircleDollarSign size={24} />,
            link: '/admin/finance/recap',
            color: 'var(--primary)'
        },
        {
            title: 'Pengeluaran Operasional',
            desc: 'Catat dan kelola biaya pemeliharaan, gaji, dan lainnya.',
            icon: <TrendingDown size={24} />,
            link: '/admin/finance/expenses',
            color: '#EF4444'
        },
        {
            title: 'Laporan Pendapatan Tiket',
            desc: 'Detail transaksi harian dari penjualan tiket masuk.',
            icon: <Ticket size={24} />,
            link: '/admin/finance/tickets',
            color: '#F59E0B'
        },
        {
            title: 'Laporan Pendapatan Resort',
            desc: 'Analisis pendapatan dari pemesanan kamar dan villa.',
            icon: <Building size={24} />,
            link: '/admin/finance/resort',
            color: '#3B82F6'
        }
    ];

    return (
        <div className="animate-fade-in font-sans">
            <div className="admin-page-header">
                <div>
                    <h1>Pusat Keuangan</h1>
                    <p className="text-muted mt-1">Sistem informasi akuntansi dan pelaporan laba rugi.</p>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                <div className="admin-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem' }}>
                    <div>
                        <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>TOTAL SALDO (PROFIT)</p>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>{formatRupiah(stats.balance)}</h2>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 600 }}>In: {formatRupiah(stats.income)}</span>
                            <span style={{ fontSize: '0.75rem', color: '#EF4444', fontWeight: 600 }}>Out: {formatRupiah(stats.expense)}</span>
                        </div>
                    </div>
                    <div style={{ padding: '1rem', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', borderRadius: '1rem' }}>
                        <Wallet size={32} />
                    </div>
                </div>

                <div className="admin-card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <div>
                        <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Siap untuk Laporan Bulanan?</h3>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Export semua data keuangan ke format Excel atau PDF untuk audit.</p>
                        <button className="btn-primary" style={{ width: '100%' }}>Export Laporan Lengkap</button>
                    </div>
                </div>
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-main)' }}>Modul Keuangan</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {menuItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="admin-card hover-glow"
                        style={{ padding: '1.5rem', cursor: 'pointer', transition: 'all 0.3s ease', border: '1px solid var(--border-color)' }}
                        onClick={() => navigate(item.link)}
                    >
                        <div style={{ width: '50px', height: '50px', borderRadius: 'var(--radius-md)', backgroundColor: `${item.color}15`, color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            {item.icon}
                        </div>
                        <h4 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h4>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>{item.desc}</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--primary)', fontSize: '0.875rem' }}>
                            Buka Modul <ArrowRight size={16} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
