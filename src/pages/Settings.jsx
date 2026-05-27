import React from 'react';
import { User, Shield, Bell, Zap, LogOut, ChevronRight } from 'lucide-react';
import useAuthStore from '../store/authStore';

const Settings = () => {
    const { logout } = useAuthStore();

    const sections = [
        { label: "Personal Identity", icon: <User />, description: "Update your behavioral node profile." },
        { label: "Neural Security", icon: <Shield />, description: "Manage 2FA and machine-auth keys." },
        { label: "Notification Pulse", icon: <Bell />, description: "Set triggers for rhythm drift alerts." },
        { label: "API Configuration", icon: <Zap />, description: "Manage your trust ecosystem access." }
    ];

    return (
        <div className="settings-page">
            <div className="bg-glow"></div>

            <div className="settings-container">
                <header className="settings-header">
                    <h1 className="title-medium">Node <span className="text-gradient">Settings</span></h1>
                    <p>Manage your neural authorization and behavior profile.</p>
                </header>

                <div className="settings-grid">
                    <div className="settings-sidebar glass-card">
                        <div className="user-info">
                            <div className="user-avatar text-gradient">FM</div>
                            <div className="user-meta">
                                <h4>F. Memon</h4>
                                <p>Super User [ROOT]</p>
                            </div>
                        </div>
                        <nav className="settings-nav">
                            {sections.map((s, i) => (
                                <div key={i} className={`nav-item ${i === 0 ? 'active' : ''}`}>
                                    {s.icon}
                                    <span>{s.label}</span>
                                </div>
                            ))}
                        </nav>
                        <button onClick={logout} className="logout-btn">
                            <LogOut size={18} />
                            <span>Shutdown Session</span>
                        </button>
                    </div>

                    <div className="settings-content">
                        <div className="content-card glass-card">
                            <h3>Personal Identity</h3>
                            <div className="form-grid">
                                <div className="input-group">
                                    <label>Display Name</label>
                                    <input type="text" defaultValue="Faakhir Memon" className="glass-input" />
                                </div>
                                <div className="input-group">
                                    <label>Node Address (Email)</label>
                                    <input type="email" defaultValue="faakhir@niyat.ai" className="glass-input" />
                                </div>
                                <div className="input-group">
                                    <label>Sector</label>
                                    <input type="text" defaultValue="Core Development" className="glass-input" />
                                </div>
                                <div className="input-group">
                                    <label>Neural Region</label>
                                    <input type="text" defaultValue="South Asia / PK" className="glass-input" />
                                </div>
                            </div>
                            <button className="btn-primary" style={{ marginTop: '30px' }}>Apply Updates</button>
                        </div>

                        <div className="content-card glass-card" style={{ marginTop: '24px' }}>
                            <h3>Trust Level Monitoring</h3>
                            <p style={{ color: 'var(--gray-text)', fontSize: '0.9rem', marginBottom: '20px' }}>Your current identity is verified across 4 trust networks.</p>
                            <div className="trust-badges">
                                <div className="t-badge glass-card">Github Verif</div>
                                <div className="t-badge glass-card">LinkedIn Neural</div>
                                <div className="t-badge glass-card">Agency Node</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .settings-page { padding: 80px 5%; min-height: 100vh; }
                .settings-container { max-width: 1200px; margin: 0 auto; }
                .settings-header { margin-bottom: 50px; }
                
                .settings-grid { display: grid; grid-template-columns: 300px 1fr; gap: 40px; }
                
                .settings-sidebar { padding: 30px; display: flex; flex-direction: column; height: fit-content; }
                .user-info { display: flex; align-items: center; gap: 15px; margin-bottom: 40px; }
                .user-avatar { width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: 800; background: rgba(255,255,255,0.05); }
                .user-meta h4 { font-size: 1.1rem; }
                .user-meta p { font-size: 0.75rem; color: var(--cyan-neon); letter-spacing: 1px; }

                .settings-nav { display: flex; flex-direction: column; gap: 10px; margin-bottom: 40px; }
                .nav-item { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 10px; color: var(--gray-text); cursor: pointer; transition: all 0.3s ease; }
                .nav-item.active, .nav-item:hover { background: rgba(0, 242, 255, 0.05); color: var(--cyan-neon); }
                
                .logout-btn { margin-top: auto; display: flex; align-items: center; gap: 12px; color: var(--red-anomaly); background: transparent; border: none; cursor: pointer; font-weight: 600; padding: 10px; }

                .content-card { padding: 40px; }
                .content-card h3 { margin-bottom: 30px; }
                .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
                .glass-input { width: 100%; background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); padding: 12px; border-radius: 8px; color: white; }
                
                .trust-badges { display: flex; gap: 15px; }
                .t-badge { padding: 8px 16px; font-size: 0.8rem; color: var(--emerald-trust); }

                @media (max-width: 1024px) {
                    .settings-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </div>
    );
};

export default Settings;
