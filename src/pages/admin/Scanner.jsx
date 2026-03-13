import { useState, useEffect, useRef } from 'react';
import { QrCode, Scan, Search, Camera, StopCircle, RefreshCw, X, CheckCircle2, AlertCircle } from 'lucide-react';
import { Html5Qrcode } from 'html5-qrcode';
import toast from 'react-hot-toast';

export default function Scanner() {
    const [scannedId, setScannedId] = useState('');
    const [isScanning, setIsScanning] = useState(false);
    const [scanResult, setScanResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const scannerRef = useRef(null);
    const scannerId = "qr-reader";

    useEffect(() => {
        return () => {
            if (isScanning) {
                stopScanner();
            }
        };
    }, [isScanning]);

    const startScanner = async () => {
        setIsLoading(true);
        try {
            const html5QrCode = new Html5Qrcode(scannerId);
            scannerRef.current = html5QrCode;

            const config = { fps: 10, qrbox: { width: 250, height: 250 } };

            await html5QrCode.start(
                { facingMode: "environment" },
                config,
                (decodedText) => {
                    handleScanSuccess(decodedText);
                },
                (errorMessage) => {
                    // console.log(errorMessage);
                }
            );

            setIsScanning(true);
        } catch (err) {
            console.error(err);
            toast.error("Gagal mengakses kamera. Pastikan izin kamera diberikan.");
        } finally {
            setIsLoading(false);
        }
    };

    const stopScanner = async () => {
        if (scannerRef.current) {
            try {
                await scannerRef.current.stop();
                scannerRef.current = null;
                setIsScanning(false);
            } catch (err) {
                console.error("Error stopping scanner", err);
            }
        }
    };

    const handleScanSuccess = (decodedText) => {
        setScanResult({
            id: decodedText,
            name: "Budi Santoso",
            type: "Tiket Masuk (Domestik)",
            date: new Date().toLocaleDateString('id-ID'),
            status: "Valid",
            count: 2
        });
        toast.success("Tiket Berhasil Discan!");
        stopScanner();
    };

    const handleManualCheck = () => {
        if (!scannedId) return;
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setScanResult({
                id: scannedId,
                name: "Siska Amelia",
                type: "Tiket Masuk (Anak)",
                date: new Date().toLocaleDateString('id-ID'),
                status: "Valid",
                count: 1
            });
            setIsLoading(false);
        }, 800);
    };

    return (
        <div className="animate-fade-in">
            <div className="admin-page-header">
                <div>
                    <h1>Scanner & Pengunjung</h1>
                    <p className="text-muted mt-1">Scan kode QR tiket pengunjung untuk verifikasi kedatangan.</p>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {/* Visual Area */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="admin-card" style={{ padding: '0', overflow: 'hidden', position: 'relative', minHeight: '400px', backgroundColor: '#000', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div id={scannerId} style={{ width: '100%' }}></div>

                        {!isScanning && !scanResult && (
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', backgroundColor: 'rgba(0,0,0,0.6)', padding: '2rem', textAlign: 'center' }}>
                                <Camera size={64} style={{ marginBottom: '1.5rem', opacity: 0.5 }} />
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Scanner Siap</h3>
                                <p style={{ opacity: 0.8, fontSize: '0.875rem' }}>Klik tombol di bawah untuk mengaktifkan kamera dan scan tiket.</p>
                            </div>
                        )}

                        {scanResult && (
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', backgroundColor: 'rgba(0,128,0,0.85)', padding: '2rem', textAlign: 'center' }}>
                                <CheckCircle2 size={72} style={{ marginBottom: '1rem' }} />
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>TIKET VALID</h3>
                                <p style={{ fontSize: '1rem', opacity: 0.9 }}>{scanResult.id}</p>
                                <button className="btn-primary" onClick={() => setScanResult(null)} style={{ marginTop: '2rem', backgroundColor: 'white', color: 'green' }}>Scan Lagi</button>
                            </div>
                        )}
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        {!isScanning ? (
                            <button className="btn-primary" onClick={startScanner} disabled={isLoading} style={{ flex: 1, height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontSize: '1rem' }}>
                                {isLoading ? <RefreshCw className="animate-spin" size={20} /> : <Scan size={20} />}
                                Aktifkan Kamera Scanner
                            </button>
                        ) : (
                            <button className="btn-primary" onClick={stopScanner} style={{ flex: 1, height: '3.5rem', backgroundColor: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontSize: '1rem' }}>
                                <StopCircle size={20} /> Hentikan Scanner
                            </button>
                        )}
                    </div>
                </div>

                {/* Info Area */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="admin-card">
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Search size={18} className="text-primary" /> Input Manual
                        </h3>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <input
                                type="text"
                                placeholder="Order ID atau Kode Tiket..."
                                value={scannedId}
                                onChange={(e) => setScannedId(e.target.value)}
                                style={{ flex: 1, padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none' }}
                            />
                            <button className="btn-primary" onClick={handleManualCheck} disabled={isLoading}>
                                {isLoading ? <RefreshCw className="animate-spin" size={18} /> : 'Cek'}
                            </button>
                        </div>
                    </div>

                    {scanResult ? (
                        <div className="admin-card animate-scale-up" style={{ border: '2px solid var(--primary)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Informasi Tiket</h3>
                                <button onClick={() => setScanResult(null)}><X size={20} className="text-muted" /></button>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px dashed #E2E8F0' }}>
                                    <span className="text-muted">Nama Pengunjung</span>
                                    <span style={{ fontWeight: 700 }}>{scanResult.name}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px dashed #E2E8F0' }}>
                                    <span className="text-muted">Jenis Tiket</span>
                                    <span className="badge active">{scanResult.type}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px dashed #E2E8F0' }}>
                                    <span className="text-muted">Jumlah</span>
                                    <span style={{ fontWeight: 700 }}>{scanResult.count} Orang</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px dashed #E2E8F0' }}>
                                    <span className="text-muted">Tanggal Scan</span>
                                    <span style={{ fontWeight: 600 }}>{scanResult.date}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#F0FDF4', borderRadius: 'var(--radius-md)', marginTop: '0.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#166534', fontWeight: 700 }}>
                                        <CheckCircle2 size={18} /> STATUS VALID
                                    </div>
                                    <span style={{ color: '#166534' }}>Siap Masuk</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="admin-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem', backgroundColor: '#F8FAFC', border: '1px dashed #CBD5E1' }}>
                            <QrCode size={64} style={{ color: '#94A3B8', marginBottom: '1.25rem' }} />
                            <p style={{ color: '#64748B', textAlign: 'center' }}>Hasil verifikasi tiket akan muncul di sini setelah scan atau input manual.</p>
                        </div>
                    )}

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.25rem', backgroundColor: '#FEF9C3', borderRadius: 'var(--radius-md)', border: '1px solid #FEF08A' }}>
                        <AlertCircle size={20} style={{ color: '#854D0E', flexShrink: 0, marginTop: '0.2rem' }} />
                        <div>
                            <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#854D0E', marginBottom: '0.25rem' }}>Petunjuk Verifikasi</p>
                            <p style={{ fontSize: '0.8125rem', color: '#713F12', lineHeight: 1.5 }}>
                                Pastikan kode QR terlihat jelas. Jika kamera bermasalah, gunakan input manual dengan memasukkan kode unik yang tertera di bawah QR Code tiket pengunjung.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
