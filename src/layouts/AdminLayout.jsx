import { useState, useEffect } from 'react';
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard, Ticket, Building, BedDouble, Receipt,
    Settings, Gift, RefreshCcw, Search, BarChart3,
    ChevronDown, Hotel, Maximize, ShoppingCart,
    PieChart, Megaphone, Layout, ExternalLink,
    ClipboardList, QrCode, Calendar, Menu, X, 
    Bell, User, LogOut, ChevronLeft, ChevronRight
} from 'lucide-react';
import '../styles/admin.css';

export default function AdminLayout() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMenus, setOpenMenus] = useState({
        booking: false,
        ticket: false,
        finance: false
    });
    
    const location = useLocation();

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const toggleMenu = (menu) => {
        setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
    };

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    const NavItem = ({ to, icon: Icon, label, end = false }) => (
        <li>
            <NavLink 
                to={to} 
                end={end} 
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                title={isSidebarCollapsed ? label : ''}
            >
                <Icon size={20} />
                {!isSidebarCollapsed && <span>{label}</span>}
            </NavLink>
        </li>
    );

    return (
        <div className="admin-layout">
            {/* Sidebar Overlay for Mobile */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-[950] lg:hidden animate-fade-in" 
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`admin-sidebar ${isSidebarCollapsed ? 'collapsed' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <div className="sidebar-header">
                    <div className="sidebar-logo flex-1">
                        <div className="p-1.5 bg-admin-primary rounded-lg">
                            <img src="/images/logo.png" alt="Logo" className="h-6 brightness-0 invert" />
                        </div>
                        {!isSidebarCollapsed && <h2 className="ml-3">Eling Bening</h2>}
                    </div>
                    <button className="lg:hidden p-2 text-white/60 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                        <X size={20} />
                    </button>
                </div>

                <nav className="sidebar-nav">
                    <ul>
                        {!isSidebarCollapsed && <div className="nav-section-title">Main Menu</div>}
                        <NavItem to="/admin" icon={LayoutDashboard} label="Dashboard" end />
                        <NavItem to="/admin/stats" icon={BarChart3} label="Statistik" />

                        {!isSidebarCollapsed && <div className="nav-section-title">Operational</div>}
                        <li>
                            <button onClick={() => toggleMenu('booking')} className="nav-group-btn" title={isSidebarCollapsed ? 'Booking Resort' : ''}>
                                <div className="btn-content">
                                    <Hotel size={20} /> 
                                    {!isSidebarCollapsed && <span>Booking Resort</span>}
                                </div>
                                {!isSidebarCollapsed && <ChevronDown size={14} className={`chevron ${openMenus.booking ? 'rotated' : ''}`} />}
                            </button>
                            {!isSidebarCollapsed && (
                                <div className={`submenu ${openMenus.booking ? 'open' : ''}`}>
                                    <NavLink to="/admin/rooms" className="submenu-item">Kelola Kamar</NavLink>
                                    <NavLink to="/admin/bookings" className="submenu-item">Daftar Pesanan</NavLink>
                                    <NavLink to="/admin/reschedule" className="submenu-item">Kelola Reschedule</NavLink>
                                </div>
                            )}
                        </li>

                        <li>
                            <button onClick={() => toggleMenu('ticket')} className="nav-group-btn" title={isSidebarCollapsed ? 'Tiket Masuk' : ''}>
                                <div className="btn-content">
                                    <Ticket size={20} /> 
                                    {!isSidebarCollapsed && <span>Tiket Masuk</span>}
                                </div>
                                {!isSidebarCollapsed && <ChevronDown size={14} className={`chevron ${openMenus.ticket ? 'rotated' : ''}`} />}
                            </button>
                            {!isSidebarCollapsed && (
                                <div className={`submenu ${openMenus.ticket ? 'open' : ''}`}>
                                    <NavLink to="/admin/tickets/orders" className="submenu-item">Pesanan Tiket</NavLink>
                                    <NavLink to="/admin/tickets" className="submenu-item">Kelola Tiket</NavLink>
                                    <NavLink to="/admin/scanner" className="submenu-item">Scan Tiket</NavLink>
                                </div>
                            )}
                        </li>

                        {!isSidebarCollapsed && <div className="nav-section-title">Marketing & Content</div>}
                        <NavItem to="/admin/events" icon={Calendar} label="Kelola Event" />
                        <NavItem to="/admin/promos" icon={Megaphone} label="Promo & Banner" />
                        <NavItem to="/admin/content" icon={Layout} label="Konten CMS" />

                        {!isSidebarCollapsed && <div className="nav-section-title">Finance</div>}
                        <li>
                            <button onClick={() => toggleMenu('finance')} className="nav-group-btn" title={isSidebarCollapsed ? 'Keuangan' : ''}>
                                <div className="btn-content">
                                    <Receipt size={20} /> 
                                    {!isSidebarCollapsed && <span>Keuangan</span>}
                                </div>
                                {!isSidebarCollapsed && <ChevronDown size={14} className={`chevron ${openMenus.finance ? 'rotated' : ''}`} />}
                            </button>
                            {!isSidebarCollapsed && (
                                <div className={`submenu ${openMenus.finance ? 'open' : ''}`}>
                                    <NavLink to="/admin/finance" end className="submenu-item">Dashboard Keuangan</NavLink>
                                    <NavLink to="/admin/finance/expenses" className="submenu-item">Pengeluaran</NavLink>
                                    <NavLink to="/admin/finance/recap" className="submenu-item">Rekap Laporan</NavLink>
                                </div>
                            )}
                        </li>

                        {!isSidebarCollapsed && <div className="nav-section-title">Settings</div>}
                        <NavItem to="/admin/seo" icon={Search} label="SEO & Meta" />
                        <NavItem to="/admin/settings" icon={Settings} label="System Settings" />
                    </ul>
                </nav>
                <div className="sidebar-footer">
                    <Link to="/" className="view-site-link">
                        <ExternalLink size={18} /> 
                        {!isSidebarCollapsed && <span>Lihat Website</span>}
                    </Link>
                </div>
            </aside>

            {/* Main Wrapper */}
            <div className="admin-main-wrapper">
                <header className="admin-topbar">
                    <div className="topbar-left">
                        <button className="menu-toggle lg:flex hidden" onClick={toggleSidebar}>
                            {isSidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                        </button>
                        <button className="menu-toggle lg:hidden flex" onClick={() => setIsMobileMenuOpen(true)}>
                            <Menu size={20} />
                        </button>
                        
                        <div className="topbar-search hidden md:block">
                            <Search className="search-icon" size={18} />
                            <input type="text" placeholder="Cari data, pesanan, atau fitur..." />
                        </div>
                    </div>

                    <div className="topbar-right">
                        <div className="topbar-actions hidden sm:flex">
                            <button className="action-btn" title="Notifications">
                                <Bell size={20} />
                                <span className="notification-badge"></span>
                            </button>
                            <button className="action-btn" title="Settings">
                                <Settings size={20} />
                            </button>
                        </div>

                        <div className="admin-profile">
                            <div className="profile-info hidden sm:block">
                                <span className="profile-name">Administrator</span>
                                <span className="profile-role">Super Admin</span>
                            </div>
                            <div className="profile-avatar">A</div>
                        </div>
                    </div>
                </header>

                <main className="admin-content">
                    <Outlet />
                </main>
            </div>

            {/* Mobile Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-admin-border px-6 py-4 flex items-center justify-between lg:hidden z-[900]">
                <NavLink to="/admin" end className={({ isActive }) => `flex flex-col items-center gap-1.5 transition-all ${isActive ? 'text-admin-primary' : 'text-admin-text-light'}`}>
                    <LayoutDashboard size={22} className={location.pathname === '/admin' ? 'animate-bounce-short' : ''} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Dash</span>
                </NavLink>
                <NavLink to="/admin/rooms" className={({ isActive }) => `flex flex-col items-center gap-1.5 transition-all ${isActive ? 'text-admin-primary' : 'text-admin-text-light'}`}>
                    <BedDouble size={22} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Rooms</span>
                </NavLink>
                <NavLink to="/admin/tickets" className={({ isActive }) => `flex flex-col items-center gap-1.5 transition-all ${isActive ? 'text-admin-primary' : 'text-admin-text-light'}`}>
                    <Ticket size={22} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Tickets</span>
                </NavLink>
                <NavLink to="/admin/settings" className={({ isActive }) => `flex flex-col items-center gap-1.5 transition-all ${isActive ? 'text-admin-primary' : 'text-admin-text-light'}`}>
                    <Settings size={22} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Sets</span>
                </NavLink>
            </nav>
        </div>
    );
}
