import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Ticket, Building, BedDouble, Receipt, Settings, Gift, RefreshCcw, Search, BarChart } from 'lucide-react';
import '../styles/admin.css';

export default function AdminLayout() {
    const menuItems = [
        { path: '/admin', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
        { path: '/admin/tickets', icon: <Ticket size={20} />, label: 'Data Tiket' },
        { path: '/admin/scanner', icon: <Users size={20} />, label: 'Scanner & Pengunjung' },
        { path: '/admin/rooms', icon: <Building size={20} />, label: 'Data Kamar' },
        { path: '/admin/packages', icon: <Gift size={20} />, label: 'Paket Bundling' },
        { path: '/admin/bookings', icon: <BedDouble size={20} />, label: 'Data Booking' },
        { path: '/admin/promos', icon: <BarChart size={20} />, label: 'Promo & Diskon' },
        { path: '/admin/reschedule', icon: <RefreshCcw size={20} />, label: 'Reschedule' },
        { path: '/admin/finance', icon: <Receipt size={20} />, label: 'Keuangan' },
        { path: '/admin/seo', icon: <Search size={20} />, label: 'SEO & Pengaturan' }
    ];

    return (
        <div className="admin-layout">
            <aside className="admin-sidebar" style={{ overflowY: 'auto' }}>
                <div className="sidebar-header">
                    <h2>EB Admin</h2>
                </div>

                <nav className="sidebar-nav">
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    end={item.path === '/admin'}
                                    className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                                >
                                    <span className="nav-icon">{item.icon}</span>
                                    <span className="nav-label">{item.label}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="sidebar-footer" style={{ marginTop: 'auto' }}>
                    <NavLink to="/" className="nav-item back-guest">
                        <span className="nav-label" style={{ textAlign: 'center', width: '100%' }}>Pindah Mode Guest</span>
                    </NavLink>
                </div>
            </aside>

            <div className="admin-main-wrapper">
                <header className="admin-topbar">
                    <div className="topbar-left">
                        <h3 style={{ margin: 0, fontWeight: 700 }}>Admin Panel Eling Bening</h3>
                    </div>
                    <div className="topbar-right">
                        <div className="admin-profile">
                            <span className="profile-name">Administrator</span>
                            <div className="profile-avatar">A</div>
                        </div>
                    </div>
                </header>

                <main className="admin-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
