import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  ShieldAlert,
  Users,
  Eye,
  Zap,
  ArrowUpRight,
  ArrowLeft,
  Search,
  Settings
} from 'lucide-react';

function AdminDashboard() {
  const metrics = [
    { label: 'Ecosystem Trust', value: '84.2%', icon: <Globe />, trend: '+1.2%' },
    { label: 'Fraud Attempts', value: '12', icon: <ShieldAlert />, trend: '-24%' },
    { label: 'Global Entities', value: '12.4k', icon: <Users />, trend: '+412' },
    { label: 'AI Throughput', value: '98.9%', icon: <Zap />, trend: 'Stable' },
  ];

  return (
    <div className="admin-container">
      <div className="bg-glow"></div>

      {/* Admin Sidebar */}
      <aside className="admin-sidebar glass-card">
        <div className="logo text-gradient">NIYAT ADMIN</div>
        <nav className="admin-nav">
          <Link to="/admin" className="active"><Eye size={18} /> Observatory</Link>
          <a href="#"><ShieldAlert size={18} /> Fraud Center</a>
          <a href="#"><Users size={18} /> User Graph</a>
          <a href="#"><Zap size={18} /> Model Health</a>
          <a href="#"><Settings size={18} /> Config</a>
        </nav>
        <div className="sidebar-footer" style={{ marginTop: 'auto' }}>
          <Link to="/" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--gray-text)', textDecoration: 'none', fontSize: '0.9rem' }}>
            <ArrowLeft size={16} /> Exit Admin Mode
          </Link>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div className="header-left">
            <h1>Behavioral <span className="text-gradient">Observatory</span></h1>
            <p>Global Reliability Infrastructure Monitoring</p>
          </div>
          <div className="admin-search glass-card">
            <Search size={18} />
            <input type="text" placeholder="Search identities..." />
          </div>
        </header>

        <div className="metrics-grid">
          {metrics.map((m, i) => (
            <div key={i} className="admin-stat-card glass-card">
              <div className="stat-icon">{m.icon}</div>
              <div className="stat-data">
                <h4>{m.label}</h4>
                <h3>{m.value}</h3>
                <span className="stat-trend">{m.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Advanced Monitoring View */}
        <div className="observatory-grid">
          <div className="live-anomalies glass-card">
            <div className="card-header">
              <h3>Real-time Anomalies</h3>
              <div className="live-indicator"><div className="ai-pulse"></div> LIVE</div>
            </div>
            <div className="anomaly-list">
              <div className="anomaly-row">
                <span className="a-time">14:22:01</span>
                <span className="a-type warning">RHYTHM DRIFT</span>
                <span className="a-entity">User_921</span>
                <ArrowUpRight size={14} />
              </div>
              <div className="anomaly-row">
                <span className="a-time">14:19:43</span>
                <span className="a-type alert">CLUSTER MATCH</span>
                <span className="a-entity">Group_SCAM_2</span>
                <ArrowUpRight size={14} />
              </div>
              <div className="anomaly-row">
                <span className="a-time">14:15:12</span>
                <span className="a-type notice">TRUST SPIKE</span>
                <span className="a-entity">Agency_X</span>
                <ArrowUpRight size={14} />
              </div>
            </div>
          </div>

          <div className="graph-overview glass-card">
            <h3>Global Relationship Graph</h3>
            <div className="mock-graph-visual">
              {/* Neural network visual placeholder */}
              <div className="g-line"></div>
              <div className="g-node"></div>
              <div className="g-node p1"></div>
              <div className="g-node p2"></div>
              <p>Initializing Relationship Spatial Map...</p>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .admin-container {
          display: grid;
          grid-template-columns: 280px 1fr;
          min-height: 100vh;
        }

        .admin-sidebar {
          margin: 20px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .admin-nav {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .admin-nav a {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--gray-text);
          text-decoration: none;
          padding: 12px 16px;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .admin-nav a.active, .admin-nav a:hover {
          background: rgba(0, 242, 255, 0.1);
          color: var(--cyan-neon);
          border: 1px solid rgba(0, 242, 255, 0.2);
        }

        .admin-main {
          padding: 40px;
          overflow-y: auto;
        }

        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .admin-search {
          display: flex;
          align-items: center;
          padding: 10px 20px;
          gap: 12px;
          width: 300px;
        }

        .admin-search input {
          background: transparent;
          border: none;
          color: white;
          width: 100%;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        .admin-stat-card {
          padding: 24px;
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--cyan-neon);
        }

        .stat-data h4 { font-size: 0.8rem; color: var(--gray-text); margin-bottom: 4px; }
        .stat-data h3 { font-size: 1.5rem; }
        .stat-trend { font-size: 0.75rem; color: var(--emerald-trust); font-weight: 700; }

        .observatory-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 24px;
        }

        .live-anomalies { padding: 30px; }
        .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
        .live-indicator { display: flex; align-items: center; gap: 8px; font-size: 0.75rem; color: var(--red-anomaly); font-weight: 800; }

        .anomaly-list { display: flex; flex-direction: column; gap: 15px; }
        .anomaly-row {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          font-family: monospace;
          font-size: 0.85rem;
          color: var(--gray-text);
        }

        .a-type { font-weight: 800; font-size: 0.7rem; padding: 2px 6px; border-radius: 3px; }
        .a-type.warning { background: rgba(255, 165, 0, 0.1); color: orange; }
        .a-type.alert { background: rgba(255, 51, 68, 0.1); color: var(--red-anomaly); }
        .a-type.notice { background: rgba(0, 242, 255, 0.1); color: var(--cyan-neon); }

        .graph-overview { padding: 30px; }
        .mock-graph-visual {
          height: 300px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 12px;
          margin-top: 20px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gray-text);
          font-size: 0.8rem;
          overflow: hidden;
        }

        @media (max-width: 1200px) {
           .metrics-grid { grid-template-columns: repeat(2, 1fr); }
           .observatory-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
           .admin-container { grid-template-columns: 1fr; }
           .admin-sidebar { margin: 10px; padding: 20px; }
           .metrics-grid { grid-template-columns: 1fr; }
           .admin-header { flex-direction: column; align-items: flex-start; gap: 20px; }
           .admin-search { width: 100%; }
        }
      `}</style>
    </div>
  );
}

export default AdminDashboard;
