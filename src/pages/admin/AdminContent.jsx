import { useState } from 'react';
import { Save, Home as HomeIcon, Info, Phone as PhoneIcon, PanelLeftClose, PanelLeftOpen, Mountain, Utensils, BedDouble, Waves, MapPin, Phone, Mail, Layout, Eye, Sparkles, Smartphone, Tablet, Monitor } from 'lucide-react';
import toast from 'react-hot-toast';
import { useContent } from '../../context/ContentContext';

// High-fidelity preview component that matches Guest pages exactly
const PreviewRenderer = ({ activeTab, content }) => {
    if (activeTab === 'home') {
        const h = content.home;
        return (
            <div className="preview-container font-sans text-gray-900 overflow-x-hidden animate-fade-in">
                {/* Hero Preview */}
                <section className="relative h-[400px] flex items-center justify-center text-center overflow-hidden">
                    <img src="/images/hero-bg.png" alt="Hero" className="absolute inset-0 w-full h-full object-cover px-8" />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative z-10 text-white max-w-2xl px-6">
                        <span className="text-sm font-black uppercase tracking-[0.3em] text-admin-primary mb-4 block animate-slide-up" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{h.heroBadge}</span>
                        <h1 className="text-4xl font-black mb-4 font-serif leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>{h.heroTitleLine1} <span className="text-admin-primary">{h.heroTitleLine2}</span></h1>
                        <p className="text-sm lg:text-base mb-8 font-light italic opacity-90 animate-slide-up" style={{ animationDelay: '0.2s' }}>{h.heroSubtitle}</p>
                        <div className="flex gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
                            <button className="bg-admin-primary text-white px-8 py-2.5 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">{h.ctaPrimary}</button>
                            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-2.5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all">{h.ctaSecondary}</button>
                        </div>
                    </div>
                </section>

                {/* About Section Preview */}
                <section className="py-16 px-8 bg-white flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-1/2 relative group">
                        <div className="absolute -inset-4 bg-admin-primary/5 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                        <img src="/images/hero-bg.png" className="rounded-2xl shadow-2xl w-full relative z-10" alt="About" />
                    </div>
                    <div className="w-1/2">
                        <span className="text-admin-primary uppercase font-black text-[10px] tracking-[0.2em] mb-3 block">Tentang Kami</span>
                        <h2 className="text-4xl font-black mb-6 text-gray-900 leading-tight">Eling Bening <span className="text-admin-primary">Experience</span></h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8">Kami menghadirkan harmoni antara arsitektur modern yang elegan dengan ketenangan alam pegunungan Ambarawa. Destinasi yang dirancang untuk membangkitkan panca indera dan menenangkan jiwa.</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 text-xs font-black text-gray-700 bg-gray-50 p-4 rounded-2xl border border-gray-100 hover:border-admin-primary/30 transition-all"><Mountain size={16} className="text-admin-primary" /> Natural Vibes</div>
                            <div className="flex items-center gap-3 text-xs font-black text-gray-700 bg-gray-50 p-4 rounded-2xl border border-gray-100 hover:border-admin-primary/30 transition-all"><Utensils size={16} className="text-admin-primary" /> Fine Dining</div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    if (activeTab === 'about') {
        const a = content.about;
        return (
            <div className="preview-container font-sans text-gray-900 animate-fade-in">
                <section className="bg-admin-primary py-24 px-8 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <Mountain size={400} className="absolute -bottom-20 -left-20" />
                    </div>
                    <div className="relative z-10">
                        <h1 className="text-5xl font-black mb-6 font-serif leading-tight">{a.heroTitle}</h1>
                        <p className="max-w-3xl mx-auto opacity-90 text-sm leading-relaxed font-medium uppercase tracking-widest">{a.heroDesc}</p>
                    </div>
                </section>
                <section className="py-20 px-12 max-w-4xl mx-auto prose prose-slate">
                    <h2 className="text-3xl font-black mb-10 text-admin-primary pb-4 border-b-4 border-admin-primary/10 inline-block">{a.storyTitle}</h2>
                    <div className="space-y-8 text-gray-600 leading-[1.8] text-base italic">
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
            <div className="preview-container font-sans text-gray-900 animate-fade-in">
                <section className="py-20 px-8 bg-gray-50 text-center">
                    <h1 className="text-5xl font-black mb-4 text-gray-900">{c.title}</h1>
                    <p className="text-gray-500 max-w-xl mx-auto text-base font-medium">{c.subtitle}</p>
                </section>
                <section className="py-16 px-8 flex flex-col md:flex-row gap-16 max-w-6xl mx-auto">
                    <div className="w-1/2 space-y-10">
                        <div className="flex items-start gap-6 group">
                            <div className="bg-admin-primary/10 p-4 rounded-2xl text-admin-primary group-hover:bg-admin-primary group-hover:text-white transition-all"><MapPin size={24} /></div>
                            <div>
                                <h4 className="font-black text-lg text-gray-900 mb-1">Lokasi Kami</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{c.address}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6 group">
                            <div className="bg-admin-primary/10 p-4 rounded-2xl text-admin-primary group-hover:bg-admin-primary group-hover:text-white transition-all"><Phone size={24} /></div>
                            <div>
                                <h4 className="font-black text-lg text-gray-900 mb-1">Hotline Reservasi</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{c.phone}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6 group">
                            <div className="bg-admin-primary/10 p-4 rounded-2xl text-admin-primary group-hover:bg-admin-primary group-hover:text-white transition-all"><Mail size={24} /></div>
                            <div>
                                <h4 className="font-black text-lg text-gray-900 mb-1">Email Support</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{c.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 bg-white p-10 rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100 italic text-gray-400">
                        <div className="space-y-6">
                            <div className="h-12 bg-gray-50 rounded-2xl animate-pulse" />
                            <div className="h-12 bg-gray-50 rounded-2xl animate-pulse" />
                            <div className="h-32 bg-gray-50 rounded-2xl animate-pulse" />
                            <div className="h-14 bg-admin-primary opacity-20 rounded-2xl" />
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
    const [previewDevice, setPreviewDevice] = useState('desktop');

    const handleChange = (key, value) => {
        updateContent(activeTab, key, value);
    };

    const handleSave = () => {
        toast.success('Website berhasil dipublikasikan!');
    };

    const tabs = [
        { id: 'home', label: 'Landpage', icon: HomeIcon },
        { id: 'about', label: 'Identity', icon: Info },
        { id: 'contact', label: 'Connect', icon: PhoneIcon },
    ];

    const getFormFields = () => {
        switch(activeTab) {
            case 'home':
                return (
                    <div className="space-y-8">
                        <div className="p-5 rounded-2xl bg-admin-primary/5 border border-admin-primary/10">
                            <h4 className="flex items-center gap-2 text-xs font-black text-admin-primary uppercase tracking-widest mb-3">
                                <Sparkles size={14} /> Hero Section
                            </h4>
                            <p className="text-[11px] text-admin-text-muted leading-relaxed font-medium">
                                Gunakan copy yang kuat untuk memikat pengunjung dalam hitungan detik.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="form-group">
                                <label className="form-label !text-xs !font-black uppercase tracking-tighter">Hero Badge Text</label>
                                <input className="admin-input !bg-white" value={content.home.heroBadge} onChange={e => handleChange('heroBadge', e.target.value)} placeholder="misal: WELCOME TO" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="form-group">
                                    <label className="form-label !text-xs !font-black uppercase tracking-tighter">Headline Line 1</label>
                                    <input className="admin-input !bg-white" value={content.home.heroTitleLine1} onChange={e => handleChange('heroTitleLine1', e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label !text-xs !font-black uppercase tracking-tighter text-admin-primary">Headline Line 2 (Highlighted)</label>
                                    <input className="admin-input font-black !bg-white !border-admin-primary/30" value={content.home.heroTitleLine2} onChange={e => handleChange('heroTitleLine2', e.target.value)} />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label !text-xs !font-black uppercase tracking-tighter">Hero Subtitle / Catchphrase</label>
                                <textarea className="admin-textarea !bg-white" rows={4} value={content.home.heroSubtitle} onChange={e => handleChange('heroSubtitle', e.target.value)} />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="form-group">
                                    <label className="form-label !text-xs !font-black uppercase tracking-tighter text-admin-primary">Button Primary</label>
                                    <input className="admin-input !bg-white" value={content.home.ctaPrimary} onChange={e => handleChange('ctaPrimary', e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label !text-xs !font-black uppercase tracking-tighter">Button Ghost</label>
                                    <input className="admin-input !bg-white" value={content.home.ctaSecondary} onChange={e => handleChange('ctaSecondary', e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'about':
                return (
                    <div className="space-y-8">
                        <div className="form-group">
                            <label className="form-label !text-xs !font-black uppercase tracking-tighter text-admin-primary">About Hero Title</label>
                            <input className="admin-input !bg-white font-black" value={content.about.heroTitle} onChange={e => handleChange('heroTitle', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label className="form-label !text-xs !font-black uppercase tracking-tighter">Small Description Text</label>
                            <textarea className="admin-textarea !bg-white" rows={3} value={content.about.heroDesc} onChange={e => handleChange('heroDesc', e.target.value)} />
                        </div>
                        <div className="h-px bg-admin-border" />
                        <div className="form-group">
                            <label className="form-label !text-xs !font-black uppercase tracking-tighter">Article Section Title</label>
                            <input className="admin-input !bg-white" value={content.about.storyTitle} onChange={e => handleChange('storyTitle', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label className="form-label !text-xs !font-black uppercase tracking-tighter">Main Story Content</label>
                            <textarea className="admin-textarea !bg-white" rows={6} value={content.about.storyP1} onChange={e => handleChange('storyP1', e.target.value)} />
                        </div>
                    </div>
                );
            case 'contact':
                return (
                    <div className="space-y-8">
                        <div className="form-group">
                            <label className="form-label !text-xs !font-black uppercase tracking-tighter">Contact Page Headline</label>
                            <input className="admin-input !bg-white" value={content.contact.title} onChange={e => handleChange('title', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label className="form-label !text-xs !font-black uppercase tracking-tighter">Support Caption</label>
                            <textarea className="admin-textarea !bg-white" rows={2} value={content.contact.subtitle} onChange={e => handleChange('subtitle', e.target.value)} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-group">
                                <label className="form-label !text-xs !font-black uppercase tracking-tighter">Support Email</label>
                                <input className="admin-input !bg-white" value={content.contact.email} onChange={e => handleChange('email', e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label className="form-label !text-xs !font-black uppercase tracking-tighter">Hotline / WA</label>
                                <input className="admin-input !bg-white" value={content.contact.phone} onChange={e => handleChange('phone', e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label !text-xs !font-black uppercase tracking-tighter">Full Business Address</label>
                            <textarea className="admin-textarea !bg-white" rows={4} value={content.contact.address} onChange={e => handleChange('address', e.target.value)} />
                        </div>
                    </div>
                );
            default: return null;
        }
    };

    return (
        <div className="flex bg-admin-bg" style={{ height: 'calc(100vh - 100px)', overflow: 'hidden', margin: '-2rem' }}>
            {/* EDITOR SIDEBAR */}
            <div 
                className={`flex flex-col bg-white border-r border-admin-border transition-all duration-500 ease-in-out z-20 ${isSidebarOpen ? 'w-[450px]' : 'w-0'}`}
                style={{ overflow: 'hidden' }}
            >
                <div className="p-8 border-b border-admin-border flex justify-between items-center bg-white">
                    <div>
                        <h2 className="text-xl font-black text-admin-text-main flex items-center gap-2">
                            <Layout className="text-admin-primary" size={20} /> Site Builder
                        </h2>
                        <p className="text-[10px] uppercase tracking-widest font-black text-admin-text-muted mt-1">Real-time Visual Editor</p>
                    </div>
                    <div className="px-3 py-1 bg-admin-bg rounded-lg border border-admin-border text-[9px] font-black tracking-[0.2em] text-admin-text-muted">
                        v2.4.0
                    </div>
                </div>

                <div className="flex p-4 gap-2 bg-admin-bg/50 border-b border-admin-border">
                    {tabs.map(t => (
                        <button
                            key={t.id}
                            onClick={() => setActiveTab(t.id)}
                            className={`flex-1 flex flex-col items-center justify-center gap-1.5 py-3 rounded-2xl transition-all ${
                                activeTab === t.id 
                                ? 'bg-white text-admin-primary shadow-lg shadow-admin-primary/10 border border-admin-primary/10' 
                                : 'text-admin-text-muted hover:text-admin-text-main hover:bg-white'
                            }`}
                        >
                            <t.icon size={18} />
                            <span className="text-[10px] font-black uppercase tracking-wider">{t.label}</span>
                        </button>
                    ))}
                </div>

                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    {getFormFields()}
                </div>

                <div className="p-8 border-t border-admin-border bg-admin-bg/30">
                    <button className="btn-primary w-full py-4 justify-center shadow-xl shadow-admin-primary/30 group" onClick={handleSave}>
                        <Save size={20} className="group-hover:scale-110 transition-transform" /> 
                        <span className="uppercase tracking-[0.2em] font-black text-xs">Simpan & Publikasikan</span>
                    </button>
                    <p className="text-[10px] text-center text-admin-text-muted font-bold mt-4 leading-relaxed opacity-60">
                        *Perubahan akan langsung terlihat pada website utama setelah menekan tombol simpan.
                    </p>
                </div>
            </div>

            {/* PREVIEW CONTAINER */}
            <div className="flex-1 bg-admin-bg p-12 flex flex-col transition-all duration-500">
                <div className={`flex-1 flex flex-col mx-auto transition-all duration-500 ${
                    previewDevice === 'mobile' ? 'max-w-[375px]' : previewDevice === 'tablet' ? 'max-w-[768px]' : 'w-full'
                }`}>
                    {/* Device Header */}
                    <div className="h-10 bg-slate-800 rounded-t-[2.5rem] flex items-center justify-between px-8 border-b border-slate-700 shadow-2xl relative">
                        <div className="flex gap-1.5 px-1">
                            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]" />
                            <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]" />
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slate-900/50 px-4 py-1 rounded-full border border-slate-700">
                             {!isSidebarOpen && (
                                <button onClick={() => setIsSidebarOpen(true)} className="text-white/60 hover:text-admin-primary transition-colors">
                                    <PanelLeftOpen size={14} />
                                </button>
                             )}
                             <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">
                                elingbening.com/{activeTab === 'home' ? '' : activeTab}
                             </span>
                        </div>
                        <button className="px-3 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-black rounded-lg uppercase tracking-widest animate-pulse">
                            Live
                        </button>
                    </div>

                    {/* Preview Viewport */}
                    <div className={`flex-1 overflow-hidden bg-white shadow-2xl transition-all duration-500 ${
                        previewDevice === 'desktop' ? 'rounded-b-[2.5rem]' : 'rounded-b-none'
                    }`}>
                        <div className="h-full overflow-y-auto custom-scrollbar bg-white">
                            <PreviewRenderer activeTab={activeTab} content={content} />
                        </div>
                    </div>
                </div>

                {/* Status Bar / Tools */}
                <div className="mt-8 flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-white p-1.5 rounded-full shadow-lg border border-admin-border">
                        <button 
                            onClick={() => setPreviewDevice('desktop')}
                            className={`p-2.5 rounded-full transition-all ${previewDevice === 'desktop' ? 'bg-admin-primary text-white shadow-lg' : 'text-admin-text-muted hover:text-admin-primary'}`}
                        >
                            <Monitor size={18} />
                        </button>
                        <button 
                            onClick={() => setPreviewDevice('tablet')}
                            className={`p-2.5 rounded-full transition-all ${previewDevice === 'tablet' ? 'bg-admin-primary text-white shadow-lg' : 'text-admin-text-muted hover:text-admin-primary'}`}
                        >
                            <Tablet size={18} />
                        </button>
                        <button 
                            onClick={() => setPreviewDevice('mobile')}
                            className={`p-2.5 rounded-full transition-all ${previewDevice === 'mobile' ? 'bg-admin-primary text-white shadow-lg' : 'text-admin-text-muted hover:text-admin-primary'}`}
                        >
                            <Smartphone size={18} />
                        </button>
                    </div>

                    <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border border-admin-border">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-black text-admin-text-main uppercase tracking-widest">Visual Studio Connected</span>
                        <div className="w-[1px] h-4 bg-admin-border mx-2" />
                        <button className="text-[10px] font-black text-admin-primary uppercase tracking-widest hover:underline flex items-center gap-1.5" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                            {isSidebarOpen ? <PanelLeftClose size={12} /> : <PanelLeftOpen size={12} />} 
                            {isSidebarOpen ? 'Hide Editor' : 'Show Editor'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
