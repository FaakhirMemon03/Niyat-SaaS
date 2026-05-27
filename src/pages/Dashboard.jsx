import React, { useEffect } from 'react';
import gsap from 'gsap';
import {
  Activity,
  ShieldCheck,
  AlertTriangle,
  User,
  TrendingUp,
  MessageSquare,
  Clock,
  Zap
} from 'lucide-react';

function Dashboard() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo('.dashboard-header',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )
      .fromTo('.stat-card',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' },
        "-=0.4"
      )
      .fromTo('.chart-section',
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        "-=0.4"
      )
      .fromTo('.risk-section',
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        "-=0.8"
      );
  }, []);

  const stats = [
    { label: 'Trust Score', value: '88', icon: <ShieldCheck className="trust-high" />, trend: '+4' },
    { label: 'Ghosting Risk', value: '11%', icon: <AlertTriangle className="trust-low" />, trend: '-2' },
    { label: 'Response Time', value: '45m', icon: <Clock className="text-gradient" />, trend: '-5m' },
    { label: 'Consistency', value: 'High', icon: <TrendingUp className="trust-high" />, trend: 'Stable' },
  ];

  return (
    <div className="dashboard-container">
      <div className="bg-glow"></div>

      <div className="dashboard-content">
        <header className="dashboard-header glass-card">
          <div className="user-welcome">
            <h2>Welcome back, <span className="text-gradient">Freelancer #1024</span></h2>
            <p>Your reliability engine is monitoring 12 active connections.</p>
          </div>
          <div className="ai-status">
            <div className="ai-pulse"></div>
            <span>AI Analyzing Behavior...</span>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card glass-card">
              <div className="stat-header">
                {stat.icon}
                <span className="trend-badge">{stat.trend}</span>
              </div>
              <div className="stat-body">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Dashboard Layout */}
        <div className="dashboard-main-grid">
          <div className="chart-section glass-card">
            <div className="section-header">
              <h3>Behavioral Evolution</h3>
              <select className="glass-select">
                <option>Last 30 Days</option>
                <option>Last 6 Months</option>
              </select>
            </div>
            <div className="mock-chart">
              <svg viewBox="0 0 400 150" className="chart-svg">
                <path d="M0,120 Q50,110 100,50 T200,80 T300,30 T400,60" fill="transparent" stroke="var(--cyan-neon)" strokeWidth="3" />
                <path d="M0,150 L0,120 Q50,110 100,50 T200,80 T300,30 T400,60 L400,150 Z" fill="url(#grad)" opacity="0.2" />
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'var(--cyan-neon)', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'var(--cyan-neon)', stopOpacity: 0 }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="chart-legend">
              <span>● Stability Index</span>
            </div>
          </div>

          <div className="risk-section glass-card">
            <h3>Active Risk Monitoring</h3>
            <div className="risk-list">
              <div className="risk-item">
                <div className="risk-icon warning"><AlertTriangle size={18} /></div>
                <div className="risk-info">
                  <h4>Communication Decay</h4>
                  <p>Client XYZ response rhythm slowed by 34%.</p>
                </div>
                <div className="risk-level">MEDIUM</div>
              </div>
              <div className="risk-item">
                <div className="risk-icon safe"><ShieldCheck size={18} /></div>
                <div className="risk-info">
                  <h4>Payment Reliability</h4>
                  <p>Historical data indicates 98% on-time payment.</p>
                </div>
                <div className="risk-level trust-high">LOW</div>
              </div>
              <div className="risk-item">
                <div className="risk-icon alert"><Activity size={18} /></div>
                <div className="risk-info">
                  <h4>Ghosting Threat</h4>
                  <p>Disengagement detected in Project Beta.</p>
                </div>
                <div className="risk-level trust-low">HIGH</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dashboard-container { padding: 30px; min-height: 100vh; }
        .dashboard-header { padding: 24px 40px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
        .user-welcome h2 { font-size: 1.8rem; margin-bottom: 8px; }
        .user-welcome p { color: var(--gray-text); }
        .ai-status { display: flex; align-items: center; gap: 12px; background: rgba(0, 242, 255, 0.1); padding: 10px 20px; border-radius: 50px; color: var(--cyan-neon); font-weight: 500; font-size: 0.9rem; }
        
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-bottom: 30px; }
        .stat-card { padding: 24px; }
        .stat-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
        .trend-badge { font-size: 0.75rem; background: rgba(255, 255, 255, 0.05); padding: 2px 8px; border-radius: 4px; color: var(--emerald-trust); }
        .stat-body h3 { font-size: 2rem; margin-bottom: 4px; }
        .stat-body p { color: var(--gray-text); text-transform: uppercase; font-size: 0.75rem; letter-spacing: 1px; }

        .dashboard-main-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 24px; }
        .chart-section { padding: 30px; }
        .section-header { display: flex; justify-content: space-between; margin-bottom: 30px; }
        .chart-svg { width: 100%; height: 250px; }
        .glass-select { background: var(--bg-surface); color: white; border: 1px solid var(--glass-border); padding: 8px 16px; border-radius: 8px; }

        .risk-section { padding: 30px; }
        .risk-list { display: flex; flex-direction: column; gap: 20px; }
        .risk-item { display: flex; align-items: center; gap: 16px; padding: 16px; background: rgba(255, 255, 255, 0.03); border-radius: 12px; border: 1px solid var(--glass-border); }
        .risk-icon { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
        .risk-icon.warning { background: rgba(255, 165, 0, 0.1); color: orange; }
        .risk-icon.safe { background: rgba(0, 255, 136, 0.1); color: var(--emerald-trust); }
        .risk-icon.alert { background: rgba(255, 51, 68, 0.1); color: var(--red-anomaly); }
        .risk-info h4 { font-size: 0.95rem; margin-bottom: 4px; }
        .risk-info p { font-size: 0.8rem; color: var(--gray-text); }
        .risk-level { margin-left: auto; font-size: 0.7rem; font-weight: 700; letter-spacing: 1px; }

        @media (max-width: 1024px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .dashboard-main-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

export default Dashboard;
