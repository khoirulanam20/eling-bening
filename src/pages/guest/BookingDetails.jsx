import { useNavigate } from 'react-router-dom';
import { CheckCircle, MapPin, Printer, ArrowLeft, Receipt } from 'lucide-react';

export default function BookingDetails() {
    const navigate = useNavigate();

    return (
        <div className="animate-fade-in" style={{ backgroundColor: '#F9FAFB', paddingBottom: '6rem', minHeight: '100vh', paddingTop: '8rem' }}>
            <div className="page-container" style={{ maxWidth: '64rem', margin: '0 auto' }}>

                {/* Status Header */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3rem' }}>
                    <div>
                        <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/history')}>Riwayat</span>
                            <span>/</span>
                            <span style={{ color: 'var(--primary)' }}>Detail Pesanan #EB-RES-99821</span>
                        </div>
                        <h1 style={{ fontSize: '2.25rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Review Pemesanan</h1>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: '#ECFDF5', color: '#047857', padding: '0.75rem 1.5rem', borderRadius: '1rem', border: '1px solid #D1FAE5', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
                        <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: '#10B981', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Pembayaran Lunas</span>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '2.5rem' }} className="md-stack">
                    <style>{`
            @media (max-width: 1024px) {
              .md-stack { grid-template-columns: 1fr !important; }
            }
          `}</style>

                    {/* Main Details Area */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

                        {/* 1. Detail Pemesan */}
                        <div style={{ backgroundColor: 'white', borderRadius: '1.5rem', padding: '2.5rem', border: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
                                <span style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.875rem' }}>1</span>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Detail Pemesan</h2>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem 2rem' }}>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Nama Lengkap Pemesan</span>
                                    <p style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '1rem' }}>Tuan Khoirul Anam</p>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Status Pemesan</span>
                                    <p style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '1rem' }}>Memesan untuk Diri Sendiri</p>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Alamat Email</span>
                                    <p style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '1rem' }}>anam@example.com</p>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Nomor Telepon / WhatsApp</span>
                                    <p style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '1rem' }}>+62 8112345678</p>
                                </div>
                            </div>
                        </div>

                        {/* 2. Detail Menginap */}
                        <div style={{ backgroundColor: 'white', borderRadius: '1.5rem', padding: '2.5rem', border: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
                                <span style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.875rem' }}>2</span>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Detail Kamar & Menginap</h2>
                            </div>

                            <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                                <div style={{ width: '12rem', height: '8rem', borderRadius: '1rem', overflow: 'hidden', flexShrink: 0 }}>
                                    <img src="/images/resort-room.png" alt="Room" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ flex: 1, paddingTop: '0.5rem' }}>
                                    <span style={{ display: 'block', fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Kamar Pilihan</span>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--text-main)', marginBottom: '0.75rem' }}>Deluxe Mountain View</h3>
                                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                                        <span>32 m&sup2;</span>
                                        <span>•</span>
                                        <span>1 Queen Bed</span>
                                        <span>•</span>
                                        <span>Free Wi-Fi</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '1rem' }}>
                                <div style={{ backgroundColor: '#F9FAFB', padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid var(--border-color)' }}>
                                    <span style={{ display: 'block', fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Check-In</span>
                                    <p style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-main)' }}>Selasa, 10 Maret 2026</p>
                                    <p style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Setelah Pukul 14:00</p>
                                </div>
                                <div style={{ backgroundColor: '#F9FAFB', padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid var(--border-color)' }}>
                                    <span style={{ display: 'block', fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Check-Out</span>
                                    <p style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-main)' }}>Rabu, 11 Maret 2026</p>
                                    <p style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Sebelum Pukul 12:00</p>
                                </div>
                            </div>

                            <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem', backgroundColor: '#F0FDF4', borderRadius: '1.5rem', border: '1px solid #D1FAE5' }}>
                                <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--primary)' }}>Durasi Menginap</span>
                                <span style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--primary)' }}>1 Malam</span>
                            </div>
                        </div>

                        {/* 3. Fasilitas & Permintaan */}
                        <div style={{ backgroundColor: 'white', borderRadius: '1.5rem', padding: '2.5rem', border: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
                                <span style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.875rem' }}>3</span>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Fasilitas & Permintaan</h2>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <span style={{ display: 'block', fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '1rem' }}>Fasilitas Tambahan yang Diminta</span>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    <div style={{ padding: '0.75rem 1.25rem', borderRadius: '1rem', border: '1px solid var(--primary)', color: 'var(--primary)', fontWeight: 700, fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={14} /> Lantai Atas</div>
                                    <div style={{ padding: '0.75rem 1.25rem', borderRadius: '1rem', border: '1px solid var(--primary)', color: 'var(--primary)', fontWeight: 700, fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={14} /> Ranjang Besar (Large)</div>
                                </div>
                            </div>

                            <div style={{ paddingTop: '2rem', borderTop: '1px dashed var(--border-color)' }}>
                                <span style={{ display: 'block', fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '1rem' }}>Catatan Tambahan untuk Resort</span>
                                <blockquote style={{ backgroundColor: '#F9FAFB', borderLeft: '4px solid var(--primary)', padding: '1.5rem', borderRadius: '0 1.5rem 1.5rem 0', color: 'var(--text-muted)', fontStyle: 'italic', fontWeight: 500, lineHeight: 1.6 }}>
                                    "Mohon siapkan kamar dengan view terbaik dan jika memungkinkan di lantai yang lebih tinggi. Kami sedang merayakan ulang tahun pernikahan. Terima kasih."
                                </blockquote>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar Area */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                        {/* ID Card */}
                        <div style={{ backgroundColor: '#111827', borderRadius: '2.5rem', padding: '2.5rem', color: 'white', position: 'relative', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                            <div style={{ position: 'absolute', right: '-2rem', bottom: '-2rem', width: '10rem', height: '10rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(3xl)' }}></div>
                            <p style={{ fontSize: '0.625rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '0.75rem' }}>Booking ID</p>
                            <h4 style={{ fontSize: '1.875rem', fontWeight: 700, fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', marginBottom: '2.5rem' }}>#EB-RES-99821</h4>

                            <div style={{ paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem' }}>
                                    <span style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Dipesan pada</span>
                                    <span style={{ fontWeight: 700 }}>06 Mar 2026, 14:20</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem' }}>
                                    <span style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Metode Bayar</span>
                                    <span style={{ fontWeight: 700 }}>Mandiri VA</span>
                                </div>
                            </div>
                        </div>

                        {/* Price Detail */}
                        <div style={{ backgroundColor: 'white', borderRadius: '1.5rem', padding: '2.5rem', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                                <Receipt color="var(--primary)" size={24} />
                                <h2 style={{ fontSize: '1.125rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Rincian Harga</h2>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                                    <span style={{ color: 'var(--text-muted)' }}>Harga Kamar (x1)</span>
                                    <span style={{ fontWeight: 700 }}>Rp 1.250.000</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                                    <span style={{ color: 'var(--text-muted)' }}>Pajak (10%)</span>
                                    <span style={{ fontWeight: 700 }}>Rp 125.000</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                                    <span style={{ color: 'var(--text-muted)' }}>Biaya Layanan</span>
                                    <span style={{ fontWeight: 700 }}>Gratis</span>
                                </div>
                            </div>

                            <div style={{ paddingTop: '1.5rem', borderTop: '1px dashed var(--border-color)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Total Terbayar</span>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>Rp 1.375.000</span>
                                </div>
                            </div>
                        </div>

                        {/* Directions */}
                        <a href="#" style={{ backgroundColor: 'white', border: '1px solid var(--border-color)', padding: '1.5rem', borderRadius: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', transition: 'var(--transition)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '3rem', height: '3rem', backgroundColor: '#EFF6FF', color: '#3B82F6', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Lokasi Resort</p>
                                    <p style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Google Maps</p>
                                </div>
                            </div>
                        </a>

                        {/* Action Buttons */}
                        <button onClick={() => window.print()} className="btn-primary-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', width: '100%', padding: '1rem' }}>
                            <Printer size={18} /> Cetak Bukti Pesanan
                        </button>
                        <button onClick={() => navigate('/history')} style={{ width: '100%', padding: '1rem', backgroundColor: 'transparent', border: 'none', color: 'var(--text-muted)', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            <ArrowLeft size={16} /> Kembali ke Riwayat
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
}
