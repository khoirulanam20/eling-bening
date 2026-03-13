import { useState } from 'react';
import { Save, Shield, Globe, Lock, Key, BarChart3, Mail, RefreshCw, Smartphone, CreditCard } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Settings() {
    const [settings, setSettings] = useState({
        midtrans: {
            serverKey: 'SB-Mid-server-xxxxxxxxxxxx',
            clientKey: 'SB-Mid-client-xxxxxxxxxxxx',
            isProduction: false
        },
        analytics: {
            gaId: 'G-XXXXXXXXXX',
            pixelId: ''
        },
        oauth: {
            clientId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.apps.googleusercontent.com',
            clientSecret: '**************************',
            callbackUrl: 'https://elingbening.com/auth/google/callback'
        }
    });

    const handleSave = () => {
        toast.promise(
            new Promise(resolve => setTimeout(resolve, 1500)),
            {
                loading: 'Synchronizing with secure vault...',
                success: 'Core configurations updated successfully!',
                error: 'Failed to sync settings.',
            }
        );
    };

    return (
        <div className="animate-fade-in space-y-8 max-w-5xl mx-auto pb-20">
            <div className="admin-page-header">
                <div>
                    <h1 className="text-3xl font-black text-admin-text-main tracking-tight">System Configurations</h1>
                    <p className="text-admin-text-muted mt-2">Manage your high-security API keys, third-party integrations, and cloud synchronized assets.</p>
                </div>
                <button onClick={handleSave} className="flex items-center gap-3 px-8 py-4 rounded-[2rem] bg-admin-primary text-white font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-admin-primary/30 hover:scale-105 active:scale-95 transition-all">
                    <Save size={18} /> Deploy Changes
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Midtrans Config */}
                <div className="lg:col-span-2 space-y-8">
                    <section className="bg-white rounded-[2.5rem] border border-admin-border p-10 shadow-sm">
                        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-admin-border">
                            <div className="w-14 h-14 rounded-2xl bg-admin-primary/10 text-admin-primary flex items-center justify-center">
                                <CreditCard size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-admin-text-main">Payment Gateway</h3>
                                <p className="text-xs font-bold text-admin-text-muted uppercase tracking-widest mt-1">Midtrans Intelligence Integration</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="form-group">
                                    <label className="text-[10px] font-black text-admin-text-muted uppercase tracking-[0.2em] mb-3 block">Server Key (Secret)</label>
                                    <div className="relative">
                                        <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-admin-text-light" size={16} />
                                        <input 
                                            type="password" 
                                            className="admin-input !pl-14 font-serif tracking-widest" 
                                            value={settings.midtrans.serverKey}
                                            onChange={e => setSettings({...settings, midtrans: {...settings.midtrans, serverKey: e.target.value}})}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="text-[10px] font-black text-admin-text-muted uppercase tracking-[0.2em] mb-3 block">Client Key (Public)</label>
                                    <div className="relative">
                                        <Key className="absolute left-5 top-1/2 -translate-y-1/2 text-admin-text-light" size={16} />
                                        <input 
                                            type="text" 
                                            className="admin-input !pl-14 font-mono text-xs" 
                                            value={settings.midtrans.clientKey}
                                            onChange={e => setSettings({...settings, midtrans: {...settings.midtrans, clientKey: e.target.value}})}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-3xl bg-admin-bg border border-admin-border flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <RefreshCw className={`text-admin-primary ${!settings.midtrans.isProduction ? 'animate-spin-slow' : ''}`} size={20} />
                                    <div>
                                        <p className="text-sm font-black text-admin-text-main">Environment Protocol</p>
                                        <p className="text-[10px] font-bold text-admin-text-muted uppercase tracking-widest">Toggle Sandbox / Production</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        className="sr-only peer" 
                                        checked={settings.midtrans.isProduction}
                                        onChange={e => setSettings({...settings, midtrans: {...settings.midtrans, isProduction: e.target.checked}})}
                                    />
                                    <div className="w-14 h-8 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-admin-primary"></div>
                                </label>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white rounded-[2.5rem] border border-admin-border p-10 shadow-sm">
                        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-admin-border">
                            <div className="w-14 h-14 rounded-2xl bg-admin-primary/10 text-admin-primary flex items-center justify-center">
                                <Shield size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-admin-text-main">OAuth Authentication</h3>
                                <p className="text-xs font-bold text-admin-text-muted uppercase tracking-widest mt-1">Google Identity Cloud Service</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="form-group">
                                <label className="text-[10px] font-black text-admin-text-muted uppercase tracking-[0.2em] mb-3 block">Cloud Client ID</label>
                                <input 
                                    type="text" 
                                    className="admin-input font-mono text-xs" 
                                    value={settings.oauth.clientId}
                                    onChange={e => setSettings({...settings, oauth: {...settings.oauth, clientId: e.target.value}})}
                                />
                            </div>
                            <div className="form-group">
                                <label className="text-[10px] font-black text-admin-text-muted uppercase tracking-[0.2em] mb-3 block">Secure Client Secret</label>
                                <input 
                                    type="password" 
                                    className="admin-input font-serif tracking-widest" 
                                    value={settings.oauth.clientSecret}
                                    onChange={e => setSettings({...settings, oauth: {...settings.oauth, clientSecret: e.target.value}})}
                                />
                            </div>
                        </div>
                    </section>
                </div>

                {/* Side Panels */}
                <div className="space-y-8">
                    <section className="bg-white rounded-[2.5rem] border border-admin-border p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-8">
                            <BarChart3 className="text-admin-primary" size={20} />
                            <h4 className="text-xs font-black text-admin-text-main uppercase tracking-widest">Analytics</h4>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="form-group">
                                <label className="text-[10px] font-black text-admin-text-muted uppercase tracking-widest mb-2 block">GA4 Measurement ID</label>
                                <input 
                                    type="text" 
                                    className="admin-input !py-3 font-mono text-xs" 
                                    value={settings.analytics.gaId}
                                    onChange={e => setSettings({...settings, analytics: {...settings.analytics, gaId: e.target.value}})}
                                />
                            </div>
                            <div className="p-4 rounded-2xl bg-admin-bg text-[10px] font-bold text-admin-text-muted leading-relaxed">
                                <p>This ID will be used to initialize the Google Tag Manager across all guest-facing pages.</p>
                            </div>
                        </div>
                    </section>

                    <div className="bg-admin-primary rounded-[2.5rem] p-8 text-white shadow-2xl shadow-admin-primary/20">
                        <Globe size={32} className="mb-6 opacity-40" />
                        <h4 className="text-lg font-black leading-tight mb-3">Global Sync Status</h4>
                        <p className="text-xs opacity-70 font-medium leading-relaxed mb-6">Your system is currently synchronized with the Indonesian/Jakarta region servers. All logs are being recorded with UTC+7 timestamp protocol.</p>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Active & Secure</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
