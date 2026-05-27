import { Link } from 'react-router-dom';
import passportImg from '../assets/passport.png';
import { Shield, Target, Zap, Heart, MessageCircle, AlertCircle, ArrowLeft } from 'lucide-react';

function Passport() {
  const metrics = [
    { label: 'Reliability Score', value: 92, color: 'var(--emerald-trust)', icon: <Shield /> },
    { label: 'Consistency Index', value: 88, color: 'var(--cyan-neon)', icon: <Target /> },
    { label: 'Stress Resilience', value: 76, color: 'var(--purple-glow)', icon: <Zap /> },
    { label: 'Emotional Stability', value: 91, color: 'var(--emerald-trust)', icon: <Heart /> },
  ];

  return (
    <div className="passport-page">
      <div className="bg-glow"></div>

      <div className="passport-container">
        <header className="passport-header">
          <Link to="/dashboard" className="back-link"><ArrowLeft size={16} /> Dashboard</Link>
          <h1 className="title-medium">Behavioral <span className="text-gradient">Passport</span></h1>
          <p>Machine-verified human reliability infrastructure.</p>
        </header>

        <div className="passport-main">
          {/* Identity Card */}
          <div className="identity-card glass-card">
            <div className="id-visual">
              <img src={passportImg} alt="ID" className="id-img" />
              <div className="id-overlay">
                <div className="verified-badge">VERIFIED</div>
              </div>
            </div>
            <div className="id-details">
              <h3>F. Memon</h3>
              <p className="id-id">ID: 0x921A...421</p>
              <div className="id-tags">
                <span className="tag">High Reliability</span>
                <span className="tag">Fast Responder</span>
              </div>
              <div className="id-trust-meter">
                <div className="meter-label">GLOBAL TRUST RANK</div>
                <div className="meter-bar">
                  <div className="meter-fill" style={{ width: '92%' }}></div>
                </div>
                <div className="meter-percent">Top 2% Globally</div>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="metrics-display grid-2">
            {metrics.map((m, i) => (
              <div key={i} className="metric-box glass-card">
                <div className="metric-header">
                  <div className="metric-icon" style={{ color: m.color }}>{m.icon}</div>
                  <h4>{m.label}</h4>
                </div>
                <div className="metric-visual">
                  <svg viewBox="0 0 100 100" className="radial-svg">
                    <circle cx="50" cy="50" r="45" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                    <circle cx="50" cy="50" r="45" fill="transparent" stroke={m.color} strokeWidth="8"
                      strokeDasharray={`${m.value * 2.82} 282`} strokeLinecap="round" transform="rotate(-90 50 50)" />
                    <text x="50" y="55" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">{m.value}%</text>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Explainability */}
        <div className="explainability-section glass-card">
          <div className="section-header">
            <AlertCircle className="text-gradient" />
            <h3>AI Reasoning Engine</h3>
          </div>
          <div className="reasoning-grid">
            <div className="reason-item">
              <h4>Why 92% Reliability?</h4>
              <p>User has maintained a 100% deadline adherence rate over the last 14 projects. Communication tone analysis shows consistent professionalism even during high-pressure cycles.</p>
            </div>
            <div className="reason-item">
              <h4>Growth Areas</h4>
              <p>Stress resilience slightly dropped during Q1 due to overlapping commitments. Future risk is low if project parallelization is managed below 3 active nodes.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .passport-page {
          padding: 60px 5%;
          min-height: 100vh;
        }

        .passport-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
        }

        .back-link {
          position: absolute;
          left: 0;
          top: 0;
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--gray-text);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .back-link:hover { color: var(--cyan-neon); }

        .passport-main {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .identity-card {
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .id-visual {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
        }

        .id-img {
          width: 100%;
          filter: grayscale(0.5) brightness(0.8);
        }

        .verified-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: var(--emerald-trust);
          color: black;
          font-weight: 800;
          font-size: 0.7rem;
          padding: 4px 12px;
          border-radius: 4px;
        }

        .id-details h3 {
          font-size: 2rem;
          margin-bottom: 4px;
        }

        .id-id {
          color: var(--gray-text);
          font-family: monospace;
          font-size: 0.9rem;
          margin-bottom: 16px;
        }

        .id-tags {
          display: flex;
          gap: 10px;
          margin-bottom: 24px;
        }

        .tag {
          background: rgba(255,255,255,0.05);
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .meter-label {
          font-size: 0.7rem;
          letter-spacing: 1px;
          color: var(--gray-text);
          margin-bottom: 8px;
        }

        .meter-bar {
          height: 6px;
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .meter-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--cyan-neon), var(--emerald-trust));
          box-shadow: 0 0 15px var(--cyan-neon);
        }

        .meter-percent {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--emerald-trust);
        }

        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .metric-box {
          padding: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .metric-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .metric-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .radial-svg {
          width: 80px;
          height: 80px;
        }

        .explainability-section {
          padding: 40px;
        }

        .reasoning-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-top: 30px;
        }

        .reason-item h4 {
          margin-bottom: 12px;
          color: var(--cyan-neon);
        }

        .reason-item p {
          color: var(--gray-text);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        @media (max-width: 1024px) {
          .passport-main { grid-template-columns: 1fr; }
          .reasoning-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

export default Passport;
