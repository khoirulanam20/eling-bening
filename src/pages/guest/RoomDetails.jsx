import { useParams, useNavigate } from 'react-router-dom';
import { getRooms, formatRupiah } from '../../utils/data';
import {
    Star, MapPin, Users, BedDouble, Expand, Wifi, Tv, Coffee,
    Snowflake, Bath, Utensils, Wind, User, Grid
} from 'lucide-react';

export default function RoomDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const rooms = getRooms();
    const room = rooms.find(r => r.name.replace(/\s+/g, '-').toLowerCase() === id) || rooms[0];

    const handleBooking = () => {
        navigate('/booking'); // Pindah ke form detail booking
    };

    return (
        <div className="animate-fade-in" style={{ backgroundColor: '#F9FAFB', paddingBottom: '5rem', minHeight: '100vh' }}>
            <div className="page-container pt-8">

                {/* Room Headline */}
                <div style={{ marginBottom: '1.5rem' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>{room.name}</h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                        <span style={{ display: 'flex', alignItems: 'center', color: '#FACC15' }}>
                            <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" style={{ opacity: 0.5 }} />
                            <span style={{ color: 'var(--text-main)', fontWeight: 700, marginLeft: '0.5rem' }}>4.8</span>
                            <span style={{ color: 'var(--text-muted)', marginLeft: '0.25rem' }}>(124 Penilaian)</span>
                        </span>
                        <span style={{ color: '#D1D5DB' }}>|</span>
                        <span style={{ display: 'flex', alignItems: 'center' }}><MapPin size={16} color="var(--primary)" style={{ marginRight: '0.25rem' }} /> Ambarawa, Jawa Tengah</span>
                    </div>
                </div>

                {/* Gallery Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1rem', height: 'auto', marginBottom: '2.5rem', borderRadius: '1.5rem', overflow: 'hidden' }} className="md-grid-gallery">
                    <style>{`
            @media (min-width: 768px) {
              .md-grid-gallery { grid-template-columns: repeat(4, 1fr) !important; grid-template-rows: repeat(2, 1fr); height: 400px !important; }
              .md-col-span-2 { grid-column: span 2; grid-row: span 2; }
              .md-hidden { display: block !important; }
            }
          `}</style>
                    <div className="md-col-span-2">
                        <img src={room.image} alt="Main Room" style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.7s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                    </div>
                    <div className="md-hidden" style={{ display: 'none' }}>
                        <img src={room.image} alt="Room Detail 1" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(1.1)', cursor: 'pointer', transition: 'transform 0.7s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                    </div>
                    <div className="md-hidden" style={{ display: 'none' }}>
                        <img src={room.image} alt="Room Detail 2" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)', cursor: 'pointer', transition: 'transform 0.7s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                    </div>
                    <div className="md-col-span-2 md-hidden" style={{ display: 'none', position: 'relative' }}>
                        <img src={room.image} alt="Room Detail 3" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.5)', cursor: 'pointer', transition: 'transform 0.7s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                        <button style={{ position: 'absolute', bottom: '1rem', right: '1rem', backgroundColor: 'white', color: 'var(--text-main)', padding: '0.5rem 1.5rem', borderRadius: '0.75rem', fontWeight: 700, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: 'var(--shadow-md)', cursor: 'pointer' }}>
                            <Grid size={16} /> Lihat Semua Foto
                        </button>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '3rem', position: 'relative' }}>

                    {/* Left Content */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

                        {/* Quick Stats */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', padding: '1.5rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', backgroundColor: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                    <Users size={20} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>Kapasitas</p>
                                    <p style={{ fontWeight: 500 }}>{room.capacity} Tamu</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', backgroundColor: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                    <BedDouble size={20} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>Tipe Ranjang</p>
                                    <p style={{ fontWeight: 500 }}>{room.bed || '1 King Bed'}</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', backgroundColor: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                    <Expand size={20} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>Ukuran Kamar</p>
                                    <p style={{ fontWeight: 500 }}>{room.size || 32} m&sup2;</p>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>Tentang Kamar Ini</h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, textAlign: 'justify', marginBottom: '1rem' }}>
                                Nikmati pemandangan spektakuler Rawa Pening dan pegunungan sekitarnya langsung dari balkon pribadi Anda. {room.name} menawarkan keseimbangan sempurna antara kemewahan modern dan sentuhan alam yang menenangkan. Dilengkapi dengan ranjang kualitas premium, kamar mandi luas dengan fitur air panas, serta area duduk santai yang nyaman.
                            </p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, textAlign: 'justify' }}>
                                Desain interior kamar ini menggunakan material alami seperti kayu dan batu untuk memberikan kesan hangat, cocok untuk pasangan yang sedang bulan madu atau sekadar mencari ketenangan dari hiruk pikuk perkotaan.
                            </p>
                        </div>

                        {/* Facilities */}
                        <div>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '1.5rem' }}>Fasilitas Lengkap</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <Wifi size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
                                    <span style={{ fontSize: '0.875rem' }}>WiFi Kecepatan Tinggi Gratis</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <Tv size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
                                    <span style={{ fontSize: '0.875rem' }}>Smart TV 43" (Netflix, YouTube)</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <Coffee size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
                                    <span style={{ fontSize: '0.875rem' }}>Pembuat Kopi & Teh</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <Snowflake size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
                                    <span style={{ fontSize: '0.875rem' }}>AC (Air Conditioning)</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <Bath size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
                                    <span style={{ fontSize: '0.875rem' }}>Kamar Mandi Pribadi & Air Panas</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <Utensils size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
                                    <span style={{ fontSize: '0.875rem' }}>Termasuk Sarapan untuk 2 Orang</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <Wind size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
                                    <span style={{ fontSize: '0.875rem' }}>Balkon Pribadi</span>
                                </div>
                            </div>
                        </div>

                        {/* Reviews */}
                        <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Penilaian Tamu</h2>
                                <button style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.875rem', background: 'none', border: 'none', cursor: 'pointer' }}>Lihat Semua Ulasan</button>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', backgroundColor: '#DBEAFE', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.125rem' }}>R</div>
                                            <div>
                                                <h4 style={{ fontWeight: 700 }}>Rina Gunawan</h4>
                                                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>2 hari yang lalu</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', color: '#FACC15' }}>
                                            <Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" />
                                        </div>
                                    </div>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, textAlign: 'justify' }}>"Kamarnya sangat bersih dan wangi! Pemandangannya langsung ke danau dan gunung sangat luar biasa untuk dinikmati saat pagi hari sambil minum kopi. Pelayanan staf sangat ramah dan responsif. Akan kembali lagi kesini."</p>
                                </div>

                                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', backgroundColor: '#FEE2E2', color: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.125rem' }}>B</div>
                                            <div>
                                                <h4 style={{ fontWeight: 700 }}>Budi Santoso</h4>
                                                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>1 minggu yang lalu</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', color: '#FACC15' }}>
                                            <Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" style={{ opacity: 0.5 }} />
                                        </div>
                                    </div>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, textAlign: 'justify' }}>"Harga sepadan dengan fasilitas dan pemandangan yang didapat. Sarapannya bervariasi dan enak. Kekurangannya hanya sinyal seluler agak susah, tapi untungnya WiFi hotel sangat kencang."</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Widget: Sticky Booking */}
                    <div style={{ display: 'none' }} className="lg-block">
                        <style>{`@media (min-width: 1024px) { .lg-block { display: block !important; } }`}</style>
                        <div style={{ backgroundColor: 'white', borderRadius: '1.5rem', padding: '2rem', boxShadow: '0 10px 40px -15px rgba(0,0,0,0.1)', border: '1px solid var(--border-color)', position: 'sticky', top: '8rem' }}>
                            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-end', gap: '0.25rem' }}>
                                <span style={{ fontSize: '1.875rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--primary)' }}>{formatRupiah(room.price)}</span>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.375rem' }}>/ malam</span>
                            </div>

                            {/* Date & Guest Picker */}
                            <div style={{ border: '1px solid var(--border-color)', borderRadius: '1rem', marginBottom: '1.5rem', backgroundColor: 'white' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--border-color)' }}>
                                    <div style={{ padding: '1rem', borderRight: '1px solid var(--border-color)' }}>
                                        <span style={{ fontSize: '0.625rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>Check-in</span>
                                        <input type="date" defaultValue="2026-03-10" style={{ width: '100%', fontWeight: 700, fontSize: '0.875rem', border: 'none', outline: 'none', background: 'transparent' }} />
                                    </div>
                                    <div style={{ padding: '1rem' }}>
                                        <span style={{ fontSize: '0.625rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>Check-out</span>
                                        <input type="date" defaultValue="2026-03-11" style={{ width: '100%', fontWeight: 700, fontSize: '0.875rem', border: 'none', outline: 'none', background: 'transparent' }} />
                                    </div>
                                </div>
                                <div style={{ padding: '1rem' }}>
                                    <span style={{ fontSize: '0.625rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>Tamu</span>
                                    <select defaultValue="2" style={{ width: '100%', fontWeight: 700, fontSize: '0.875rem', border: 'none', outline: 'none', background: 'transparent', appearance: 'none' }}>
                                        <option value="1">1 Dewasa</option>
                                        <option value="2">2 Dewasa</option>
                                        <option value="3">3 Dewasa</option>
                                    </select>
                                </div>
                            </div>

                            <button onClick={handleBooking} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.25rem', fontSize: '1.125rem', marginBottom: '1rem', backgroundColor: '#C62828' }}>Pesan Sekarang</button>
                            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Anda belum akan dikenakan biaya</p>

                            {/* Price Breakdown */}
                            <div style={{ paddingTop: '1.5rem', borderTop: '1px dashed var(--border-color)', fontSize: '0.875rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                                    <span style={{ textDecoration: 'underline', textDecorationStyle: 'dotted' }}>{formatRupiah(room.price)} x 1 malam</span>
                                    <span>{formatRupiah(room.price)}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                                    <span style={{ textDecoration: 'underline', textDecorationStyle: 'dotted' }}>Pajak & Layanan Hotel</span>
                                    <span>{formatRupiah(room.price * 0.1)}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.125rem', color: 'var(--primary)', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                                    <span>Total Harga</span>
                                    <span>{formatRupiah(room.price * 1.1)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
