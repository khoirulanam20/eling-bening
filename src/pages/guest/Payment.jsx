import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { formatRupiah } from '../../utils/data';

export default function Payment() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const method = searchParams.get('method') || 'va';

    const [timeLeft, setTimeLeft] = useState(15 * 60 - 1);
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        if (timeLeft <= 0) {
            alert('Waktu pembayaran habis.');
            navigate('/booking');
            return;
        }
        const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft, navigate]);

    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    const percentage = (timeLeft / (15 * 60)) * 100;

    const handlePayment = () => {
        setIsProcessing(true);
        setTimeout(() => {
            navigate('/booking-details');
        }, 2000);
    };

    return (
        <div className="animate-fade-in" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', paddingBottom: '4rem', minHeight: '100vh', paddingTop: '8rem' }}>
            <div className="page-container" style={{ maxWidth: '42rem', margin: '0 auto' }}>

                {/* Timer Card */}
                <div style={{ backgroundColor: 'white', borderRadius: '2.5rem', padding: '2rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)', border: '1px solid var(--border-color)', marginBottom: '2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '0.375rem', backgroundColor: '#F3F4F6' }}>
                        <div style={{ height: '100%', backgroundColor: 'var(--primary)', width: `${percentage}%`, transition: 'width 1s linear' }}></div>
                    </div>
                    <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.75rem' }}>Selesaikan Pembayaran Dalam</p>
                    <div style={{ fontSize: '2.25rem', fontWeight: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', color: 'var(--text-main)' }}>
                        <span>{mins < 10 ? '0' + mins : mins}</span>
                        <span style={{ opacity: 0.3 }}>:</span>
                        <span>{secs < 10 ? '0' + secs : secs}</span>
                    </div>
                </div>

                {/* Payment Info Card */}
                <div style={{ backgroundColor: 'white', borderRadius: '2.5rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)', border: '1px solid var(--border-color)', overflow: 'hidden', marginBottom: '2rem' }}>
                    <div style={{ padding: '2rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F9FAFB' }}>
                        <div>
                            <p style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Total Pembayaran</p>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>{formatRupiah(1375000)}</h2>
                        </div>
                    </div>

                    <div style={{ padding: '2.5rem' }}>
                        {method === 'va' ? (
                            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem', backgroundColor: '#F9FAFB', borderRadius: '1.5rem', border: '1px solid var(--border-color)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                                        <div style={{ width: '3.5rem', height: '3.5rem', backgroundColor: 'white', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)' }}>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1280px-Bank_Central_Asia.svg.png" alt="BCA" style={{ height: '1rem', objectFit: 'contain' }} />
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Nomor Virtual Account</p>
                                            <p style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '0.05em' }}>8077 0811 2345 678</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 style={{ fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>Cara Pembayaran</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        <div style={{ display: 'flex', gap: '1rem', padding: '1rem', borderRadius: '1rem', backgroundColor: '#F9FAFB' }}>
                                            <div style={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', backgroundColor: '#ECFDF5', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.75rem', flexShrink: 0 }}>1</div>
                                            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>Pilih <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>Transfer &gt; Virtual Account</span> pada ATM atau Mobile Banking.</p>
                                        </div>
                                        <div style={{ display: 'flex', gap: '1rem', padding: '1rem', borderRadius: '1rem', backgroundColor: '#F9FAFB' }}>
                                            <div style={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', backgroundColor: '#ECFDF5', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.75rem', flexShrink: 0 }}>2</div>
                                            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>Masukkan Nomor VA <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>8077 0811 2345 678</span>.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="animate-fade-in" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Scan QR Code ini menggunakan aplikasi e-Wallet favorit Anda</p>
                                <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '1.5rem', border: '4px solid #F9FAFB' }}>
                                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=ELINGBENING-RESORT-BOOKING" alt="QRIS" style={{ width: '16rem', height: '16rem', borderRadius: '0.75rem' }} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <button
                        onClick={handlePayment}
                        disabled={isProcessing}
                        className="btn-primary"
                        style={{ width: '100%', padding: '1.25rem', justifyContent: 'center', fontSize: '1.125rem', opacity: isProcessing ? 0.7 : 1 }}
                    >
                        {isProcessing ? 'Memproses Verifikasi...' : 'Saya Sudah Bayar'}
                    </button>
                    <button onClick={() => navigate('/history')} style={{ width: '100%', padding: '1rem', backgroundColor: 'transparent', border: 'none', color: 'var(--text-muted)', fontWeight: 700, cursor: 'pointer' }}>
                        Lihat Status Pesanan Nanti
                    </button>
                </div>

            </div>
        </div>
    );
}
