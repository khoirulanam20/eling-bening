import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { UserCircle } from 'lucide-react';

export default function GuestLayout() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Auto scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // isHome determines if we use the transparent glass nav initially
    const isHome = location.pathname === '/';

    return (
        <div className="bg-white text-gray-900 min-h-screen flex flex-col">
            <style>{`
                .glass {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                .text-eling-green { color: #2E7D32; }
                .bg-eling-green { background-color: #2E7D32; }
                .text-eling-red { color: #C62828; }
                .bg-eling-red { background-color: #C62828; }
                .group:hover .group-hover\\:visible {
                    visibility: visible;
                }
                .group:hover .group-hover\\:opacity-100 {
                    opacity: 1;
                }
                
                /* Responsive handling for main content spacing when not on home */
                .pt-offset { padding-top: 80px; }
            `}</style>

            {/* Header / Navbar */}
            <nav className={`fixed w-full z-50 transition-all duration-300 py-4 px-6 lg:px-12 flex justify-between items-center ${isHome && !isScrolled ? 'glass text-white' : 'bg-white/90 text-gray-900 shadow-lg'}`}>
                <Link to="/" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="Logo" className={`h-10 ${isHome && !isScrolled ? '' : ''}`} />
                    <span className={`text-xl font-serif font-bold tracking-wider ${isHome && !isScrolled ? '' : 'text-eling-green'}`}>Eling Bening</span>
                </Link>

                <div className="hidden lg:flex gap-8 font-semibold tracking-wide uppercase text-sm">
                    <Link to="/" className="hover:text-eling-red transition">Home</Link>
                    <Link to="/about" className="hover:text-eling-red transition">Tentang Kami</Link>
                    <Link to="/rooms" className="hover:text-eling-red transition">Resort</Link>
                    <Link to="/ticketing" className="hover:text-eling-red transition">Tiket</Link>
                    <Link to="/gallery" className="hover:text-eling-red transition">Galeri</Link>
                    <Link to="/facilities" className="hover:text-eling-red transition">Fasilitas</Link>
                    <Link to="/contact" className="hover:text-eling-red transition">Kontak</Link>
                </div>

                <div className="flex items-center gap-6">
                    <div className="relative group">
                        <button className="w-10 h-10 rounded-full bg-eling-red flex items-center justify-center text-white shadow-lg hover:bg-red-800 transition">
                            <UserCircle size={24} />
                        </button>
                        {/* Dropdown */}
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl py-4 text-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right border border-gray-100">
                            <div className="px-6 py-2 border-b border-gray-100 mb-2">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Akun Saya</p>
                            </div>
                            <Link to="/login" className="block px-6 py-2 hover:bg-gray-50 hover:text-eling-green transition text-sm font-semibold">Login</Link>
                            <Link to="/register" className="block px-6 py-2 hover:bg-gray-50 hover:text-eling-green transition text-sm font-semibold">Register</Link>
                            <div className="h-px bg-gray-100 my-2 mx-4"></div>
                            <Link to="/history" className="block px-6 py-2 hover:bg-gray-50 hover:text-eling-green transition text-sm font-semibold">Riwayat Pesanan</Link>
                            <Link to="/admin" className="block px-6 py-2 hover:bg-gray-50 hover:text-eling-green transition text-sm font-semibold text-eling-red">Panel Admin</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <main className={`flex-grow ${!isHome ? 'pt-offset' : ''}`}>
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-eling-green text-white py-20 px-6 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <img src="/images/logo.png" alt="Logo" className="h-10 brightness-0 invert text-white" />
                            <span className="text-2xl font-serif font-bold tracking-wider">Eling Bening</span>
                        </div>
                        <p className="text-green-100 text-sm leading-relaxed">Destinasi wisata alam terbaik di Ambarawa. Rasakan harmoni keindahan alam dan kemewahan dalam satu tempat.</p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-xl mb-8">Pintasan</h4>
                        <ul className="space-y-4 text-green-100 text-sm">
                            <li><Link to="/" className="hover:text-white transition underline-offset-4 hover:underline">Home</Link></li>
                            <li><Link to="/about" className="hover:text-white transition underline-offset-4 hover:underline">Tentang Kami</Link></li>
                            <li><Link to="/gallery" className="hover:text-white transition underline-offset-4 hover:underline">Galeri</Link></li>
                            <li><Link to="/facilities" className="hover:text-white transition underline-offset-4 hover:underline">Fasilitas</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-xl mb-8">Layanan</h4>
                        <ul className="space-y-4 text-green-100 text-sm">
                            <li><Link to="/ticketing" className="hover:text-white transition underline-offset-4 hover:underline">Tiket Online</Link></li>
                            <li><Link to="/rooms" className="hover:text-white transition underline-offset-4 hover:underline">Booking Resort</Link></li>
                            <li><Link to="/history" className="hover:text-white transition underline-offset-4 hover:underline">Riwayat Pesanan</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition underline-offset-4 hover:underline">Hubungi Kami</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-xl mb-8">Newsletter</h4>
                        <p className="text-green-100 text-sm mb-6">Dapatkan info promo dan event terbaru langsung di email Anda.</p>
                        <div className="flex gap-2">
                            <input type="email" className="bg-white/10 border-white/20 border rounded-lg px-4 py-2 w-full text-white placeholder-green-200 focus:outline-none" placeholder="Email Anda" />
                            <button className="bg-white text-eling-green font-bold px-4 py-2 rounded-lg hover:bg-green-100 transition">Gabung</button>
                        </div>
                    </div>
                </div>
                <div className="mt-20 pt-8 border-t border-white/10 text-center text-green-200 text-sm">
                    <p>&copy; {new Date().getFullYear()} Eling Bening Ambarawa. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
