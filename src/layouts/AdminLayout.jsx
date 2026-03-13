import { useState } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import {
    LayoutDashboard, Ticket, Building, BedDouble, Receipt,
    Settings, Gift, RefreshCcw, Search, BarChart3,
    ChevronDown, Hotel, Maximize, ShoppingCart,
    PieChart, Megaphone, Layout, ExternalLink,
    ClipboardList, QrCode
} from 'lucide-react';
import '../styles/admin.css';

export default function AdminLayout() {
    const [openMenus, setOpenMenus] = useState({
        booking: false,
        ticket: false,
        finance: false
    });

    const toggleMenu = (menu) => {
        setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
    };

    return (
        <div className="admin-layout">
            <aside className="admin-sidebar">
                <div className="sidebar-header">
                    <div className="sidebar-logo">
                        <img src="/images/logo.png" alt="Logo" className="h-8 brightness-0 invert" style={{ height: '32px' }} />
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: 'white' }}>Admin</h2>
                    </div>
                </div>

                <nav className="sidebar-nav">
                    <ul>
                        <li>
                            <NavLink to="/admin" end className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                                <LayoutDashboard size={20} /> <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/stats" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                                <BarChart3 size={20} /> <span>Statistik</span>
                            </NavLink>
                        </li>

                        {/* Booking Resort Group */}
                        <li>
                            <button onClick={() => toggleMenu('booking')} className="nav-group-btn">
                                <div className="btn-content">
                                    <Hotel size={20} /> <span>Booking Resort</span>
                                </div>
                                <ChevronDown size={14} className={`chevron ${openMenus.booking ? 'rotated' : ''}`} />
                            </button>
                            <div className={`submenu ${openMenus.booking ? 'open' : ''}`}>
                                <NavLink to="/admin/rooms" className="submenu-item">Kelola Kamar</NavLink>
                                <NavLink to="/admin/bookings" className="submenu-item">Daftar Pesanan</NavLink>
                                <NavLink to="/admin/reschedule" className="submenu-item">Kelola Reschedule</NavLink>
                            </div>
                        </li>

                        {/* Tiket Masuk Group - Simplified */}
                        <li>
                            <NavLink to="/admin/tickets/orders" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                                <ClipboardList size={20} /> <span>Pesanan Tiket</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/tickets" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                                <Ticket size={20} /> <span>Jenis Tiket</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/scanner" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                                <QrCode size={20} /> <span>Scan Tiket</span>
                            </NavLink>
                        </li>

                        {/* Keuangan Group */}
                        <li>
                            <button onClick={() => toggleMenu('finance')} className="nav-group-btn">
                                <div className="btn-content">
                                    <Receipt size={20} /> <span>Laporan Keuangan</span>
                                </div>
                                <ChevronDown size={14} className={`chevron ${openMenus.finance ? 'rotated' : ''}`} />
                            </button>
                            <div className={`submenu ${openMenus.finance ? 'open' : ''}`}>
                                <NavLink to="/admin/finance" end className="submenu-item">Dashboard Keuangan</NavLink>
                                <NavLink to="/admin/finance/expenses" className="submenu-item">Pengeluaran</NavLink>
                                <NavLink to="/admin/finance/recap" className="submenu-item">Rekap Laporan</NavLink>
                            </div>
                        </li>

                        <li>
                            <NavLink to="/admin/content" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                                <Layout size={20} /> <span>Konten CMS</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/admin/promos" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                                <Megaphone size={20} /> <span>Promo</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/seo" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                                <Search size={20} /> <span>Setting SEO</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="sidebar-footer">
                    <Link to="/" className="view-site-link">
                        <ExternalLink size={18} /> <span>Lihat Website</span>
                    </Link>
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
