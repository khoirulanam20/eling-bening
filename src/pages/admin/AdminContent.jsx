import { useState } from 'react';
import { Save, Home as HomeIcon, Info, Phone as PhoneIcon, PanelLeftClose, PanelLeftOpen, Mountain, Utensils, BedDouble, Waves, MapPin, Phone, Mail } from 'lucide-react';
import toast from 'react-hot-toast';
import { useContent } from '../../context/ContentContext';

// High-fidelity preview component that matches Guest pages exactly
const PreviewRenderer = ({ activeTab, content }) => {
    if (activeTab === 'home') {
        const h = content.home;
        return (
            <div className="preview-container font-sans text-gray-900 overflow-x-hidden">
                {/* Hero Preview */}
                <section className="relative h-[400px] flex items-center justify-center text-center overflow-hidden">
                    <img src="/images/hero-bg.png" alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative z-10 text-white max-w-2xl px-6">
                        <span className="text-sm font-bold uppercase tracking-widest text-[#C62828] mb-4 block" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{h.heroBadge}</span>
                        <h1 className="text-4xl font-bold mb-4 font-serif leading-tight">{h.heroTitleLine1} <span className="text-[#C62828]">{h.heroTitleLine2}</span></h1>
                        <p className="text-sm lg:text-base mb-8 font-light italic opacity-90">{h.heroSubtitle}</p>
                        <div className="flex gap-4 justify-center">
                            <button className="bg-[#C62828] text-white px-6 py-2 rounded-full font-bold text-sm">{h.ctaPrimary}</button>
                            <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full font-bold text-sm">{h.ctaSecondary}</button>
                        </div>
                    </div>
                </section>

                {/* About Section Preview */}
                <section className="py-16 px-8 bg-gray-50 flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-1/2 relative">
                        <img src="/images/hero-bg.png" className="rounded-xl shadow-xl w-full" alt="About" />
                    </div>
                    <div className="w-1/2">
                        <span className="text-[#C62828] uppercase font-bold text-xs tracking-widest mb-2 block">Tentang Kami</span>
                        <h2 className="text-3xl font-bold mb-6 font-serif">Eling Bening Ambarawa</h2>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">Kami menghadirkan harmoni antara arsitektur modern yang elegan dengan ketenangan alam pegunungan Ambarawa.</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2 text-xs font-bold text-gray-700 bg-white p-2 rounded shadow-sm border-l-4 border-[#2E7D32]"><Mountain size={14} /> Alamiah</div>
                            <div className="flex items-center gap-2 text-xs font-bold text-gray-700 bg-white p-2 rounded shadow-sm border-l-4 border-[#2E7D32]"><Utensils size={14} /> Kuliner</div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    if (activeTab === 'about') {
        const a = content.about;
        return (
            <div className="preview-container font-sans text-gray-900">
                <section className="bg-[#2E7D32] py-20 px-8 text-center text-white">
                    <h1 className="text-4xl font-bold mb-4 font-serif">{a.heroTitle}</h1>
                    <p className="max-w-2xl mx-auto opacity-90 text-sm leading-relaxed">{a.heroDesc}</p>
                </section>
                <section className="py-16 px-12 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-[#2E7D32] border-b-2 border-[#2E7D32]/20 pb-2">{a.storyTitle}</h2>
                    <div className="space-y-6 text-gray-600 leading-relaxed text-sm">
                        <p>{a.storyP1}</p>
                        <p>{a.storyP2}</p>
                    </div>
                </section>
            </div>
        );
    }

    if (activeTab === 'contact') {
        const c = content.contact;
        return (
            <div className="preview-container font-sans text-gray-900">
                <section className="py-16 px-8 bg-gray-50 text-center">
                    <h1 className="text-4xl font-bold mb-4 font-serif text-gray-900">{c.title}</h1>
                    <p className="text-gray-500 max-w-xl mx-auto text-sm">{c.subtitle}</p>
                </section>
                <section className="py-12 px-8 flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
                    <div className="w-1/2 space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-green-50 p-2 rounded-full text-[#2E7D32]"><MapPin size={20} /></div>
                            <div>
                                <h4 className="font-bold text-sm">Alamat</h4>
                                <p className="text-gray-500 text-xs">{c.address}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-green-50 p-2 rounded-full text-[#2E7D32]"><Phone size={20} /></div>
                            <div>
                                <h4 className="font-bold text-sm">Telepon</h4>
                                <p className="text-gray-500 text-xs">{c.phone}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-green-50 p-2 rounded-full text-[#2E7D32]"><Mail size={20} /></div>
                            <div>
                                <h4 className="font-bold text-sm">Email</h4>
                                <p className="text-gray-500 text-xs">{c.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        <div className="space-y-4">
                            <div className="bg-gray-100 h-8 rounded w-full" />
                            <div className="bg-gray-100 h-8 rounded w-full" />
                            <div className="bg-gray-100 h-24 rounded w-full" />
                            <div className="bg-[#C62828] h-10 rounded w-full" />
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return null;
};

export default function AdminContent() {
    const { content, updateContent } = useContent();
    const [activeTab, setActiveTab] = useState('home');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleChange = (key, value) => {
        updateContent(activeTab, key, value);
    };

    const handleSave = () => {
        toast.success('Semua perubahan berhasil disimpan!');
    };

    const tabs = [
        { id: 'home', label: 'Beranda', icon: HomeIcon },
        { id: 'about', label: 'Tentang Kami', icon: Info },
        { id: 'contact', label: 'Kontak', icon: PhoneIcon },
    ];

    return (
        <div className="admin-cms-layout" style={{ display: 'flex', height: 'calc(100vh - 70px)', overflow: 'hidden', margin: '-2rem' }}>
            {/* LEFT: EDITOR SIDEBAR */}
            <div className={`cms-sidebar ${!isSidebarOpen ? 'collapsed' : ''}`} style={{
                width: isSidebarOpen ? '420px' : '0',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: 'white',
                borderRight: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div className="cms-sidebar-header" style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Site Builder</h2>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Visual Editor & Content CMS</p>
                    </div>
                    <div style={{ backgroundColor: '#F0FDF4', color: '#166534', fontSize: '0.625rem', fontWeight: 800, padding: '0.25rem 0.5rem', borderRadius: '4px' }}>DRAFT</div>
                </div>

                <div className="cms-tabs" style={{ display: 'flex', padding: '1rem', gap: '0.5rem', borderBottom: '1px solid var(--border-color)', backgroundColor: '#F8FAFC' }}>
                    {tabs.map(t => (
                        <button
                            key={t.id}
                            className={`cms-tab-btn ${activeTab === t.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(t.id)}
                            style={{
                                flex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                padding: '0.6rem',
                                borderRadius: 'var(--radius-sm)',
                                fontSize: '0.8125rem',
                                color: activeTab === t.id ? 'var(--primary)' : 'var(--text-muted)',
                                backgroundColor: activeTab === t.id ? 'white' : 'transparent',
                                boxShadow: activeTab === t.id ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                                fontWeight: activeTab === t.id ? 700 : 500,
                                transition: 'all 0.2s'
                            }}
                        >
                            <t.icon size={16} /> {t.label}
                        </button>
                    ))}
                </div>

                <div className="cms-editor-fields" style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {activeTab === 'home' && (
                        <div className="cms-form-group" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ padding: '1rem', backgroundColor: '#F1F5F9', borderRadius: 'var(--radius-md)', fontSize: '0.75rem', lineHeight: 1.5, color: '#475569', borderLeft: '4px solid var(--primary)' }}>
                                <strong>Tips Hero Section:</strong> Gunankan kalimat singkat dan padat untuk menarik perhatian pengunjung dalam 3 detik pertama.
                            </div>

                            <div>
                                <label className="admin-label" style={{ fontSize: '0.7rem' }}>Label Kecil (Badge)</label>
                                <input className="admin-input" value={content.home.heroBadge} onChange={e => handleChange('heroBadge', e.target.value)} placeholder="misal: WELCOME TO" />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label className="admin-label" style={{ fontSize: '0.7rem' }}>Judul Utama L1</label>
                                    <input className="admin-input" value={content.home.heroTitleLine1} onChange={e => handleChange('heroTitleLine1', e.target.value)} />
                                </div>
                                <div>
                                    <label className="admin-label" style={{ fontSize: '0.7rem' }}>Judul Utama L2</label>
                                    <input className="admin-input" style={{ color: 'var(--primary)' }} value={content.home.heroTitleLine2} onChange={e => handleChange('heroTitleLine2', e.target.value)} />
                                </div>
                            </div>

                            <div>
                                <label className="admin-label" style={{ fontSize: '0.7rem' }}>Paragraf Subjudul</label>
                                <textarea className="admin-input" rows={4} value={content.home.heroSubtitle} onChange={e => handleChange('heroSubtitle', e.target.value)} />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label className="admin-label" style={{ fontSize: '0.7rem' }}>Teks Tombol Utama</label>
                                    <input className="admin-input" value={content.home.ctaPrimary} onChange={e => handleChange('ctaPrimary', e.target.value)} />
                                </div>
                                <div>
                                    <label className="admin-label" style={{ fontSize: '0.7rem' }}>Teks Tombol Kedua</label>
                                    <input className="admin-input" value={content.home.ctaSecondary} onChange={e => handleChange('ctaSecondary', e.target.value)} />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'about' && (
                        <div className="cms-form-group" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ padding: '1rem', backgroundColor: '#F1F5F9', borderRadius: 'var(--radius-md)', fontSize: '0.75rem', color: '#475569', borderLeft: '4px solid var(--primary)' }}>
                                Bagian hero "About" menggunakan latar belakang warna solid <strong>Eling Green</strong> untuk memperkuat identitas brand.
                            </div>
                            <div>
                                <label className="admin-label" style={{ fontSize: '0.7rem' }}>Judul Besar Hero</label>
                                <input className="admin-input" value={content.about.heroTitle} onChange={e => handleChange('heroTitle', e.target.value)} />
                            </div>
                            <div>
                                <label className="admin-label" style={{ fontSize: '0.7rem' }}>Deskripsi Singkat Hero</label>
                                <textarea className="admin-input" rows={3} value={content.about.heroDesc} onChange={e => handleChange('heroDesc', e.target.value)} />
                            </div>
                            <div style={{ height: '1px', backgroundColor: 'var(--border-color)', margin: '0.5rem 0' }} />
                            <div>
                                <label className="admin-label" style={{ fontSize: '0.7rem' }}>Judul Artikel Cerita</label>
                                <input className="admin-input" value={content.about.storyTitle} onChange={e => handleChange('storyTitle', e.target.value)} />
                            </div>
                            <div>
                                <label className="admin-label" style={{ fontSize: '0.7rem' }}>Paragraf Cerita 1</label>
                                <textarea className="admin-input" rows={4} value={content.about.storyP1} onChange={e => handleChange('storyP1', e.target.value)} />
                            </div>
                            <div>
                                <label className="admin-label" style={{ fontSize: '0.7rem' }}>Paragraf Cerita 2</label>
                                <textarea className="admin-input" rows={4} value={content.about.storyP2} onChange={e => handleChange('storyP2', e.target.value)} />
                            </div>
                        </div>
                    )}

                    {activeTab === 'contact' && (
                        <div className="cms-form-group" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label className="admin-label" style={{ fontSize: '0.7rem' }}>Judul Banner Kontak</label>
                                <input className="admin-input" value={content.contact.title} onChange={e => handleChange('title', e.target.value)} />
                            </div>
                            <div>
                                <label className="admin-label" style={{ fontSize: '0.7rem' }}>Sub-teks Banner</label>
                                <textarea className="admin-input" rows={2} value={content.contact.subtitle} onChange={e => handleChange('subtitle', e.target.value)} />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label className="admin-label" style={{ fontSize: '0.7rem' }}>Email Bisnis</label>
                                    <input className="admin-input" value={content.contact.email} onChange={e => handleChange('email', e.target.value)} />
                                </div>
                                <div>
                                    <label className="admin-label" style={{ fontSize: '0.7rem' }}>No. Telepon / WA</label>
                                    <input className="admin-input" value={content.contact.phone} onChange={e => handleChange('phone', e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <label className="admin-label" style={{ fontSize: '0.7rem' }}>Alamat Lengkap</label>
                                <textarea className="admin-input" rows={3} value={content.contact.address} onChange={e => handleChange('address', e.target.value)} />
                            </div>
                        </div>
                    )}
                </div>

                <div className="cms-sidebar-footer" style={{ padding: '1.5rem', borderTop: '1px solid var(--border-color)', backgroundColor: '#F8FAFC' }}>
                    <button className="btn-primary" style={{ width: '100%', padding: '1rem' }} onClick={handleSave}>
                        <Save size={18} /> Publikasikan Perubahan
                    </button>
                    <p style={{ fontSize: '10px', textAlign: 'center', color: 'var(--text-muted)', marginTop: 12, lineHeight: 1.4 }}>
                        * Klik "Publikasikan" untuk memperbarui tampilan website publik secara instan.
                    </p>
                </div>
            </div>

            {/* RIGHT: LIVE PREVIEW CONTAINER */}
            <div className="cms-preview-area" style={{ flex: 1, backgroundColor: '#E2E8F0', padding: '2.5rem', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <div className="cms-preview-wrapper" style={{ flex: 1, backgroundColor: 'white', borderRadius: '1.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '8px solid #334155' }}>
                    <div className="cms-preview-header" style={{ height: '44px', backgroundColor: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1rem' }}>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                            <div style={{ display: 'flex', gap: 6 }}>
                                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
                                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
                            </div>
                            <button
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                style={{ color: 'white', opacity: 0.6, marginLeft: '0.5rem' }}
                            >
                                {isSidebarOpen ? <PanelLeftClose size={14} /> : <PanelLeftOpen size={14} />}
                            </button>
                        </div>
                        <div style={{ backgroundColor: '#1e293b', borderRadius: 'var(--radius-sm)', padding: '0.2rem 1.5rem', fontSize: '0.7rem', color: '#94a3b8', width: '40%', textAlign: 'center' }}>
                            elingbening.com/{activeTab === 'home' ? '' : activeTab}
                        </div>
                        <div style={{ backgroundColor: '#10B981', color: 'white', fontSize: '0.6rem', fontWeight: 800, padding: '0.15rem 0.5rem', borderRadius: '4px', letterSpacing: '0.05em' }}>PREVIEW</div>
                    </div>

                    <div className="cms-preview-frame" style={{ flex: 1, overflowY: 'auto', backgroundColor: 'white' }}>
                        <PreviewRenderer activeTab={activeTab} content={content} />
                    </div>
                </div>

                {/* Device Simulators */}
                <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.5rem', backgroundColor: 'white', padding: '0.4rem', borderRadius: 'var(--radius-full)', boxShadow: 'var(--shadow-lg)' }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--primary)', color: 'white' }}><i className="fas fa-desktop text-xs" /></div>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}><i className="fas fa-tablet-alt text-xs" /></div>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}><i className="fas fa-mobile-alt text-xs" /></div>
                </div>
            </div>
        </div>
    );
}
