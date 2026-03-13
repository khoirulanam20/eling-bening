import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Info } from 'lucide-react';
import { formatRupiah } from '../../utils/data';

export default function Booking() {
    const navigate = useNavigate();
    const [guestType, setGuestType] = useState('self');
    const [promoCode, setPromoCode] = useState('');
    const [promoActive, setPromoActive] = useState(false);

    const basePrice = 1250000;
    const tax = 125000;
    const total = basePrice + tax - (promoActive ? 50000 : 0);

    const handleApplyPromo = () => {
        if (promoCode) {
            setPromoActive(true);
        }
    };

    const handleConfirm = () => {
        const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
        navigate(`/payment?method=${paymentMethod}`);
    };

    return (
        <div className="animate-fade-in" style={{ backgroundColor: '#F9FAFB', paddingBottom: '5rem', minHeight: '100vh' }}>
            <div className="page-container pt-8">
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 8fr) minmax(0, 4fr)', gap: '2.5rem' }} className="md-stack">
                    <style>{`
            @media (max-width: 1024px) {
              .md-stack { grid-template-columns: 1fr !important; }
            }
          `}</style>

                    {/* Left Form */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                        {/* 1. Detail Pemesan */}
                        <div style={{ backgroundColor: 'white', borderRadius: '1.5rem', padding: '2rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', border: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                                <span style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.875rem' }}>1</span>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Detail Pemesan</h2>
                            </div>

                            <div style={{ backgroundColor: '#ECFDF5', color: '#065F46', padding: '1.25rem', borderRadius: '1rem', border: '1px solid #D1FAE5', marginBottom: '2rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                <Info size={18} style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                                <p style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>E-voucher akan dikirimkan ke alamat email ini. Mohon pastikan alamat email dan nomor telepon Anda sudah benar dan aktif.</p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Titel</label>
                                    <div style={{ position: 'relative' }}>
                                        <select style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid var(--border-color)', backgroundColor: '#F9FAFB', appearance: 'none', outline: 'none' }}>
                                            <option>Tuan</option><option>Nyonya</option><option>Nona</option>
                                        </select>
                                        <ChevronDown size={14} color="var(--text-muted)" style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                                    </div>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Nama Depan</label>
                                    <input type="text" defaultValue="Khoirul" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid var(--border-color)', backgroundColor: '#F9FAFB', outline: 'none' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Nama Belakang</label>
                                    <input type="text" defaultValue="Anam" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid var(--border-color)', backgroundColor: '#F9FAFB', outline: 'none' }} />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Email</label>
                                    <input type="email" defaultValue="anam@example.com" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid var(--border-color)', backgroundColor: '#F9FAFB', outline: 'none' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Nomor Telepon</label>
                                    <div style={{ display: 'flex' }}>
                                        <span style={{ padding: '0.875rem', backgroundColor: '#F3F4F6', border: '1px solid var(--border-color)', borderRight: 'none', borderRadius: '0.75rem 0 0 0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>+62</span>
                                        <input type="tel" defaultValue="8112345678" style={{ width: '100%', padding: '0.875rem', borderRadius: '0 0.75rem 0.75rem 0', border: '1px solid var(--border-color)', backgroundColor: '#F9FAFB', outline: 'none' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Data Tamu */}
                        <div style={{ backgroundColor: 'white', borderRadius: '1.5rem', padding: '2rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', border: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                                <span style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: guestType === 'other' ? 'var(--primary)' : '#F3F4F6', color: guestType === 'other' ? 'white' : 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.875rem', transition: 'var(--transition)' }}>2</span>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Data Tamu</h2>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '1rem' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', border: '2px solid', borderColor: guestType === 'self' ? 'var(--primary)' : 'var(--border-color)', borderRadius: '1rem', cursor: 'pointer', transition: 'var(--transition)' }}>
                                    <input type="radio" name="guestType" checked={guestType === 'self'} onChange={() => setGuestType('self')} style={{ accentColor: 'var(--primary)', width: '1.25rem', height: '1.25rem' }} />
                                    <div>
                                        <div style={{ fontWeight: 700 }}>Diri Sendiri</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Saya yang akan menginap</div>
                                    </div>
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', border: '2px solid', borderColor: guestType === 'other' ? 'var(--primary)' : 'var(--border-color)', borderRadius: '1rem', cursor: 'pointer', transition: 'var(--transition)' }}>
                                    <input type="radio" name="guestType" checked={guestType === 'other'} onChange={() => setGuestType('other')} style={{ accentColor: 'var(--primary)', width: '1.25rem', height: '1.25rem' }} />
                                    <div>
                                        <div style={{ fontWeight: 700 }}>Orang Lain</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Saya memesankan untuk orang lain</div>
                                    </div>
                                </label>
                            </div>

                            {guestType === 'other' && (
                                <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px dashed var(--border-color)' }} className="animate-fade-in">
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Nama Depan Tamu</label>
                                            <input type="text" placeholder="Contoh: Budi" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid var(--border-color)', backgroundColor: '#F9FAFB', outline: 'none' }} />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Nama Belakang Tamu</label>
                                            <input type="text" placeholder="Contoh: Santoso" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid var(--border-color)', backgroundColor: '#F9FAFB', outline: 'none' }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* 3. Fasilitas Tambahan & Metode Bayar */}
                        <div style={{ backgroundColor: 'white', borderRadius: '1.5rem', padding: '2rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', border: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                                <span style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#F3F4F6', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.875rem', transition: 'var(--transition)' }}>3</span>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Fasilitas & Pembayaran</h2>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Fasilitas Tambahan (Gratis)</label>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '1rem' }}>
                                        <input type="checkbox" style={{ accentColor: 'var(--primary)', width: '1.25rem', height: '1.25rem' }} /><span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Lantai Atas</span>
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '1rem' }}>
                                        <input type="checkbox" style={{ accentColor: 'var(--primary)', width: '1.25rem', height: '1.25rem' }} /><span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Ranjang Besar (Large)</span>
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '1rem' }}>
                                        <input type="checkbox" style={{ accentColor: 'var(--primary)', width: '1.25rem', height: '1.25rem' }} /><span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Kamar Bebas Rokok</span>
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '1rem' }}>
                                        <input type="checkbox" style={{ accentColor: 'var(--primary)', width: '1.25rem', height: '1.25rem' }} /><span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Ranjang Twin (Sepisah)</span>
                                    </label>
                                </div>

                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Catatan Khusus</label>
                                <textarea rows="3" placeholder="Rayakan ulang tahun pernikahan, dsb..." style={{ width: '100%', padding: '1rem', borderRadius: '1rem', border: '1px solid var(--border-color)', backgroundColor: '#F9FAFB', outline: 'none', resize: 'none' }}></textarea>
                            </div>

                            <div style={{ paddingTop: '2rem', borderTop: '1px dashed var(--border-color)' }}>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>Metode Pembayaran</label>
                                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '1rem' }}>
                                    <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1.25rem', border: '2px solid var(--primary)', backgroundColor: '#F0FDF4', borderRadius: '1rem', cursor: 'pointer', position: 'relative' }}>
                                        <input type="radio" name="payment" value="va" checked style={{ accentColor: 'var(--primary)', position: 'absolute', top: '1.25rem', right: '1.25rem', width: '1.25rem', height: '1.25rem' }} />
                                        <div style={{ fontWeight: 700, fontSize: '1.125rem' }}>Virtual Account</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>BCA, Mandiri, BNI, BRI</div>
                                    </label>
                                    <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1.25rem', border: '2px solid var(--border-color)', borderRadius: '1rem', cursor: 'pointer', position: 'relative' }}>
                                        <input type="radio" name="payment" value="qris" style={{ accentColor: 'var(--primary)', position: 'absolute', top: '1.25rem', right: '1.25rem', width: '1.25rem', height: '1.25rem' }} />
                                        <div style={{ fontWeight: 700, fontSize: '1.125rem' }}>QRIS / E-Wallet</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Gopay, OVO, ShopeePay</div>
                                    </label>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Summary */}
                    <div>
                        <div style={{ backgroundColor: 'white', borderRadius: '1.5rem', boxShadow: '0 10px 40px -15px rgba(0,0,0,0.1)', border: '1px solid var(--border-color)', position: 'sticky', top: '8rem', overflow: 'hidden' }}>
                            <div style={{ position: 'relative' }}>
                                <img src="/images/resort-room.png" style={{ height: '11rem', width: '100%', objectFit: 'cover' }} alt="Room" />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}></div>
                                <div style={{ position: 'absolute', bottom: '1rem', left: '1.5rem' }}>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', color: 'white' }}>Deluxe Mountain View</h3>
                                </div>
                            </div>

                            <div style={{ padding: '2rem' }}>
                                <div style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: '#F9FAFB', borderRadius: '1rem', marginBottom: '2rem' }}>
                                    <div style={{ flex: 1 }}>
                                        <p style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Check-in / Out</p>
                                        <p style={{ fontSize: '0.875rem', fontWeight: 700 }}>10 Mar 2026 - 11 Mar 2026</p>
                                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>1 Malam • 1 Kamar</p>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '2rem' }}>
                                    <h4 style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem' }}>Rincian Biaya</h4>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
                                        <span style={{ color: 'var(--text-muted)' }}>Kamar Deluxe (x1)</span>
                                        <span style={{ fontWeight: 700 }}>{formatRupiah(basePrice)}</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
                                        <span style={{ color: 'var(--text-muted)' }}>Pajak (10%)</span>
                                        <span style={{ fontWeight: 700 }}>{formatRupiah(tax)}</span>
                                    </div>
                                    {promoActive && (
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--primary)', marginBottom: '0.75rem' }} className="animate-fade-in">
                                            <span style={{ fontWeight: 500 }}>Potongan Promo</span>
                                            <span style={{ fontWeight: 700 }}>- {formatRupiah(50000)}</span>
                                        </div>
                                    )}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', marginTop: '1rem' }}>
                                        <span>Total Bayar</span>
                                        <span>{formatRupiah(total)}</span>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '2rem' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <input
                                            type="text"
                                            placeholder="Kode Promo"
                                            value={promoCode}
                                            onChange={e => setPromoCode(e.target.value)}
                                            style={{ flex: 1, padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid var(--border-color)', outline: 'none', backgroundColor: '#F9FAFB', fontSize: '0.875rem' }}
                                        />
                                        <button onClick={handleApplyPromo} className="btn-primary-outline" style={{ padding: '0 1.25rem' }}>Pakai</button>
                                    </div>
                                </div>

                                <button onClick={handleConfirm} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.25rem', fontSize: '1.125rem' }}>Selesaikan Pembayaran</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
