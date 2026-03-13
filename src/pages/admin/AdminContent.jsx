import { useState } from 'react';
import { Save, Home as HomeIcon, Info, Phone as PhoneIcon, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import toast from 'react-hot-toast';
import { useContent } from '../../context/ContentContext';

// Stub previews for now - in real app these would be the actual guest pages rendered in a container
const PreviewPlaceholder = ({ title, activeTab, content }) => (
    <div style={{ padding: '2rem', height: '100%', overflowY: 'auto', background: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {activeTab === 'home' && (
                <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{content.home.heroBadge}</span>
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, marginTop: '1rem', color: '#111827' }}>{content.home.heroTitleLine1}</h1>
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.5rem' }}>{content.home.heroTitleLine2}</h1>
                    <p style={{ fontSize: '1.125rem', color: '#4B5563', marginBottom: '2.5rem' }}>{content.home.heroSubtitle}</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button className="btn-primary">{content.home.ctaPrimary}</button>
                        <button className="btn-primary-outline">{content.home.ctaSecondary}</button>
                    </div>
                </div>
            )}
            {activeTab === 'about' && (
                <div>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>{content.about.heroTitle}</h1>
                    <p style={{ fontSize: '1.25rem', color: '#4B5563', marginBottom: '3rem' }}>{content.about.heroDesc}</p>
                    <h2 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '1rem' }}>{content.about.storyTitle}</h2>
                    <p style={{ marginBottom: '1rem' }}>{content.about.storyP1}</p>
                    <p>{content.about.storyP2}</p>
                </div>
            )}
            {activeTab === 'contact' && (
                <div>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>{content.contact.title}</h1>
                    <p style={{ fontSize: '1.125rem', color: '#4B5563', marginBottom: '2rem' }}>{content.contact.subtitle}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        <div>
                            <h3 style={{ fontWeight: 600 }}>Email</h3>
                            <p>{content.contact.email}</p>
                        </div>
                        <div>
                            <h3 style={{ fontWeight: 600 }}>Phone</h3>
                            <p>{content.contact.phone}</p>
                        </div>
                        <div>
                            <h3 style={{ fontWeight: 600 }}>Address</h3>
                            <p>{content.contact.address}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
);

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
                width: isSidebarOpen ? '400px' : '0',
                overflow: 'hidden',
                transition: 'all 0.3s',
                backgroundColor: 'white',
                borderRight: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div className="cms-sidebar-header" style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Site Builder CMS</h2>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Edit konten langsung terlihat</p>
                </div>

                <div className="cms-tabs" style={{ display: 'flex', padding: '1rem', gap: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
                    {tabs.map(t => (
                        <button
                            key={t.id}
                            className={`cms-tab-btn ${activeTab === t.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(t.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                borderRadius: 'var(--radius-sm)',
                                fontSize: '0.875rem',
                                color: activeTab === t.id ? 'var(--primary)' : 'var(--text-muted)',
                                backgroundColor: activeTab === t.id ? 'var(--primary-light)' : 'transparent',
                                fontWeight: activeTab === t.id ? 600 : 400
                            }}
                        >
                            <t.icon size={16} /> {t.label}
                        </button>
                    ))}
                </div>

                <div className="cms-editor-fields" style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {activeTab === 'home' && (
                        <div className="cms-form-group" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Label Badge (Hero)</label>
                                <input className="admin-input" value={content.home.heroBadge} onChange={e => handleChange('heroBadge', e.target.value)} />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Judul Baris 1</label>
                                <input className="admin-input" value={content.home.heroTitleLine1} onChange={e => handleChange('heroTitleLine1', e.target.value)} />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Judul Baris 2 (Gradien)</label>
                                <input className="admin-input" value={content.home.heroTitleLine2} onChange={e => handleChange('heroTitleLine2', e.target.value)} />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Deskripsi Subjudul</label>
                                <textarea className="admin-input" rows={4} value={content.home.heroSubtitle} onChange={e => handleChange('heroSubtitle', e.target.value)} />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>CTA Utama</label>
                                    <input className="admin-input" value={content.home.ctaPrimary} onChange={e => handleChange('ctaPrimary', e.target.value)} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>CTA Sekunder</label>
                                    <input className="admin-input" value={content.home.ctaSecondary} onChange={e => handleChange('ctaSecondary', e.target.value)} />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'about' && (
                        <div className="cms-form-group" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.25rem' }}>Bagian Hero</div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Kata Kunci Judul</label>
                                <input className="admin-input" value={content.about.heroTitle} onChange={e => handleChange('heroTitle', e.target.value)} />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Deskripsi Perusahaan</label>
                                <textarea className="admin-input" rows={3} value={content.about.heroDesc} onChange={e => handleChange('heroDesc', e.target.value)} />
                            </div>

                            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.25rem', marginTop: '1rem' }}>Cerita Tim</div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Judul Cerita</label>
                                <input className="admin-input" value={content.about.storyTitle} onChange={e => handleChange('storyTitle', e.target.value)} />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Paragraf 1</label>
                                <textarea className="admin-input" rows={4} value={content.about.storyP1} onChange={e => handleChange('storyP1', e.target.value)} />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Paragraf 2</label>
                                <textarea className="admin-input" rows={4} value={content.about.storyP2} onChange={e => handleChange('storyP2', e.target.value)} />
                            </div>
                        </div>
                    )}

                    {activeTab === 'contact' && (
                        <div className="cms-form-group" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Judul Halaman Kontak</label>
                                <input className="admin-input" value={content.contact.title} onChange={e => handleChange('title', e.target.value)} />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Deskripsi Bantuan</label>
                                <textarea className="admin-input" rows={3} value={content.contact.subtitle} onChange={e => handleChange('subtitle', e.target.value)} />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Alamat Email</label>
                                <input className="admin-input" value={content.contact.email} onChange={e => handleChange('email', e.target.value)} />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Nomor Telepon / WhatsApp</label>
                                <input className="admin-input" value={content.contact.phone} onChange={e => handleChange('phone', e.target.value)} />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Lokasi Fisik / Kantor</label>
                                <textarea className="admin-input" rows={3} value={content.contact.address} onChange={e => handleChange('address', e.target.value)} />
                            </div>
                        </div>
                    )}
                </div>

                <div className="cms-sidebar-footer" style={{ padding: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                    <button className="btn-primary" style={{ width: '100%' }} onClick={handleSave}>
                        <Save size={16} /> Simpan Perubahan
                    </button>
                    <p style={{ fontSize: '11px', textAlign: 'center', color: 'var(--text-muted)', marginTop: 8 }}>
                        Perubahan otomatis terupdate pada live preview di sebelah kanan.
                    </p>
                </div>
            </div>

            {/* RIGHT: LIVE PREVIEW CONTAINER */}
            <div className="cms-preview-area" style={{ flex: 1, backgroundColor: '#F3F4F6', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div className="cms-preview-wrapper" style={{ flex: 1, backgroundColor: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <div className="cms-preview-header" style={{ height: '50px', backgroundColor: '#F8FAFC', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.5rem' }}>
                        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                            <div style={{ display: 'flex', gap: 6 }}>
                                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
                                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
                                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
                            </div>
                            <button
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                style={{ color: 'var(--text-muted)', marginLeft: '1rem', display: 'flex', alignItems: 'center' }}
                                title={isSidebarOpen ? "Sembunyikan Sidebar" : "Tampilkan Sidebar"}
                            >
                                {isSidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
                            </button>
                        </div>
                        <div className="cms-url-bar" style={{ backgroundColor: 'white', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '0.25rem 2rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            elingbening.com{activeTab === 'home' ? '/' : `/${activeTab}`}
                        </div>
                        <div className="cms-preview-badge" style={{ backgroundColor: '#DBEAFE', color: '#1E40AF', fontSize: '0.625rem', fontWeight: 700, padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-full)' }}>✨ Live Preview</div>
                    </div>

                    <div className="cms-preview-frame" style={{ flex: 1, overflowY: 'auto' }}>
                        <PreviewPlaceholder title={activeTab} activeTab={activeTab} content={content} />
                    </div>
                </div>
            </div>
        </div>
    );
}
