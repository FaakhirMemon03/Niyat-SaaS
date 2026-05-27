import React, { useState } from 'react';
import { Search, Zap, Shield, User, ArrowRight, Heart } from 'lucide-react';

const Compatibility = () => {
    const [searching, setSearching] = useState(false);
    const [result, setResult] = useState(null);

    const simulateMatch = () => {
        setSearching(true);
        setTimeout(() => {
            setSearching(false);
            setResult({
                score: 94,
                matchType: "High Synergy",
                factors: [
                    { label: "Communication Rhythm", value: 98 },
                    { label: "Deadline Consistency", value: 92 },
                    { label: "Conflict Resilience", value: 85 }
                ]
            });
        }, 2000);
    };

    return (
        <div className="compatibility-page">
            <div className="bg-glow"></div>

            <div className="comp-container">
                <header className="comp-header">
                    <h1 className="title-medium">Compatibility <span className="text-gradient">Engine</span></h1>
                    <p>Predict synergy between identities using Behavioral Neural Mapping.</p>
                </header>

                <div className="comp-main glass-card">
                    <div className="match-inputs">
                        <div className="identity-input glass-card">
                            <User className="text-gradient" />
                            <input type="text" placeholder="Identity 1 (You)" defaultValue="F. Memon" />
                        </div>
                        <div className="vs-icon"><Zap /></div>
                        <div className="identity-input glass-card">
                            <Search />
                            <input type="text" placeholder="Search Counterparty ID..." />
                        </div>
                    </div>

                    <button className="btn-primary match-btn" onClick={simulateMatch} disabled={searching}>
                        {searching ? "ANALYZING NEURAL PATHS..." : "PREDICT SYNERGY"}
                    </button>

                    {result && (
                        <div className="match-result">
                            <div className="result-score">
                                <svg viewBox="0 0 100 100" className="radial-score">
                                    <circle cx="50" cy="50" r="45" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                                    <circle cx="50" cy="50" r="45" fill="transparent" stroke="var(--cyan-neon)" strokeWidth="8"
                                        strokeDasharray="264 282" strokeLinecap="round" transform="rotate(-90 50 50)" />
                                    <text x="50" y="55" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">{result.score}%</text>
                                </svg>
                                <h3>{result.matchType}</h3>
                            </div>

                            <div className="result-factors">
                                {result.factors.map((f, i) => (
                                    <div key={i} className="factor-row">
                                        <span>{f.label}</span>
                                        <div className="factor-bar">
                                            <div className="factor-fill" style={{ width: `${f.value}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="comp-info grid-2">
                    <div className="info-card glass-card">
                        <Shield className="text-gradient" />
                        <h3>Machine Truth</h3>
                        <p>Our AI bypasses resumes and portfolios to analyze actual behavioral event logs stored on the Niyat network.</p>
                    </div>
                    <div className="info-card glass-card">
                        <Heart className="text-gradient" />
                        <h3>Emotional Sync</h3>
                        <p>Predict how identities will react under pressure. Identify potential friction before the first message is sent.</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .compatibility-page { padding: 80px 5%; min-height: 100vh; }
                .comp-header { text-align: center; margin-bottom: 60px; }
                .comp-container { max-width: 900px; margin: 0 auto; }
                
                .comp-main { padding: 50px; text-align: center; margin-bottom: 40px; }
                .match-inputs { display: flex; align-items: center; gap: 20px; margin-bottom: 40px; }
                .identity-input { flex: 1; padding: 15px; display: flex; align-items: center; gap: 15px; }
                .identity-input input { background: transparent; border: none; color: white; width: 100%; outline: none; }
                .vs-icon { color: var(--cyan-neon); animation: pulse-cyan 2s infinite; }

                .match-btn { width: 100%; max-width: 400px; padding: 16px; margin: 0 auto; font-weight: 800; }
                
                .match-result { margin-top: 50px; display: grid; grid-template-columns: 1fr 1.5fr; gap: 40px; align-items: center; text-align: left; animation: fadeIn 0.5s ease; }
                .radial-score { width: 120px; height: 120px; margin-bottom: 10px; }
                .result-score { text-align: center; }
                
                .factor-row { margin-bottom: 15px; }
                .factor-row span { font-size: 0.8rem; color: var(--gray-text); display: block; margin-bottom: 5px; }
                .factor-bar { height: 4px; background: rgba(255,255,255,0.05); border-radius: 10px; }
                .factor-fill { height: 100%; background: var(--cyan-neon); border-radius: 10px; box-shadow: 0 0 10px var(--cyan-neon); }

                .info-card { padding: 30px; }
                .info-card h3 { margin: 15px 0 10px; }
                .info-card p { color: var(--gray-text); font-size: 0.9rem; line-height: 1.6; }
                
                .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }

                @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

                @media (max-width: 768px) {
                    .match-inputs { flex-direction: column; }
                    .match-result { grid-template-columns: 1fr; text-align: center; }
                    .grid-2 { grid-template-columns: 1fr; }
                }
            `}</style>
        </div>
    );
};

export default Compatibility;
