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
  const [activeTab, setActiveTab] = React.useState('observatory');

  const metrics = [
    { label: 'Ecosystem Trust', value: '84.2%', icon: <Globe />, trend: '+1.2%' },
    { label: 'Fraud Attempts', value: '12', icon: <ShieldAlert />, trend: '-24%' },
    { label: 'Global Entities', value: '12.4k', icon: <Users />, trend: '+412' },
    { label: 'AI Throughput', value: '98.9%', icon: <Zap />, trend: 'Stable' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'fraud':
        return (
          <div className="admin-content-pane fade-in">
            <div className="section-header">
              <h2>Fraud <span className="text-gradient">Intelligence Center</span></h2>
              <p>Active scam cluster monitoring and behavioral drift detection.</p>
            </div>
            <div className="fraud-grid">
              <div className="glass-card table-view">
                <table>
                  <thead>
                    <tr>
                      <th>ENTITY</th>
                      <th>RISK TYPE</th>
                      <th>CONFIDENCE</th>
                      <th>STATUS</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>User_921X</td>
                      <td className="trust-low">Sybil Attack Pattern</td>
                      <td>96.4%</td>
                      <td><span className="status-badge alert">QUARANTINED</span></td>
                      <td><button className="btn-small">VIEW</button></td>
                    </tr>
                    <tr>
                      <td>Agency_Delta</td>
                      <td className="trust-medium">Payment Delay Drift</td>
                      <td>74.2%</td>
                      <td><span className="status-badge warning">MONITORING</span></td>
                      <td><button className="btn-small">VIEW</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'graph':
        return (
          <div className="admin-content-pane fade-in">
            <div className="section-header">
              <h2>Relationship <span className="text-gradient">Graph Explorer</span></h2>
              <p>Spatial mapping of trust nodes and interaction clusters.</p>
            </div>
            <div className="glass-card graph-viewport">
              <div className="neural-overlay">
                <p>INITIALIZING SPATIAL ANALYTICS...</p>
                <div className="ai-pulse"></div>
              </div>
              <div className="mock-neural-network">
                {/* Visual simulation */}
                <div className="node n1"></div>
                <div className="node n2"></div>
                <div className="node n3"></div>
                <div className="connection"></div>
              </div>
            </div>
          </div>
        );
      case 'health':
        return (
          <div className="admin-content-pane fade-in">
            <div className="section-header">
              <h2>Model <span className="text-gradient">Health & Performance</span></h2>
              <p>Core AI reliability metrics and neural throughput latency.</p>
            </div>
            <div className="metrics-grid">
              <div className="glass-card stat-detail">
                <h4>Inference Latency</h4>
                <h3>42ms</h3>
                <div className="mini-chart"></div>
              </div>
              <div className="glass-card stat-detail">
                <h4>Data Ingestion</h4>
                <h3>1.2TB/s</h3>
                <div className="mini-chart"></div>
              </div>
            </div>
          </div>
        );
      case 'config':
        return (
          <div className="admin-content-pane fade-in">
            <div className="section-header">
              <h2>System <span className="text-gradient">Configuration</span></h2>
              <p>Global trust weights and AI sensitivity thresholds.</p>
            </div>
            <div className="glass-card config-form">
              <div className="config-row">
                <span>Ghosting Sensitivity</span>
                <input type="range" defaultValue={80} />
              </div>
              <div className="config-row">
                <span>Auto-Quarantine Threshold</span>
                <input type="range" defaultValue={95} />
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="fade-in">
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
                </div>
              </div>

              <div className="graph-overview glass-card">
                <h3>Global Relationship Graph</h3>
                <div className="mock-graph-visual">
                  <div className="g-line"></div>
                  <div className="g-node"></div>
                  <p>Initializing Relationship Spatial Map...</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="admin-container">
      <div className="bg-glow"></div>

      {/* Admin Sidebar */}
      <aside className="admin-sidebar glass-card">
        <div className="logo text-gradient">NIYAT ADMIN</div>
        <nav className="admin-nav">
          <button className={activeTab === 'observatory' ? 'active' : ''} onClick={() => setActiveTab('observatory')}><Eye size={18} /> Observatory</button>
          <button className={activeTab === 'fraud' ? 'active' : ''} onClick={() => setActiveTab('fraud')}><ShieldAlert size={18} /> Fraud Center</button>
          <button className={activeTab === 'graph' ? 'active' : ''} onClick={() => setActiveTab('graph')}><Users size={18} /> User Graph</button>
          <button className={activeTab === 'health' ? 'active' : ''} onClick={() => setActiveTab('health')}><Zap size={18} /> Model Health</button>
          <button className={activeTab === 'config' ? 'active' : ''} onClick={() => setActiveTab('config')}><Settings size={18} /> Config</button>
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
            <h1>Behavioral <span className="text-gradient">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</span></h1>
            <p>Global Reliability Infrastructure Monitoring</p>
          </div>
          <div className="admin-search glass-card">
            <Search size={18} />
            <input type="text" placeholder="Search identities..." />
          </div>
        </header>

        {renderContent()}
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
          gap: 10px;
        }

        .admin-nav button {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--gray-text);
          background: transparent;
          border: 1px solid transparent;
          padding: 12px 16px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          text-align: left;
          font-family: inherit;
        }

        .admin-nav button.active, .admin-nav button:hover {
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
          outline: none;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
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

        /* Tabs Content Styling */
        .admin-content-pane { animation: fadeIn 0.4s ease; }
        .section-header { margin-bottom: 40px; }
        
        .table-view { padding: 24px; overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; text-align: left; }
        th { color: var(--gray-text); font-size: 0.75rem; letter-spacing: 1px; padding: 12px; border-bottom: 1px solid var(--glass-border); text-transform: uppercase; }
        td { padding: 16px 12px; border-bottom: 1px solid rgba(255,255,255,0.02); font-size: 0.9rem; }
        
        .status-badge { padding: 4px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: 800; }
        .status-badge.alert { background: rgba(255, 51, 68, 0.1); color: var(--red-anomaly); border: 1px solid var(--red-anomaly); }
        .status-badge.warning { background: rgba(255, 215, 0, 0.1); color: #ffd700; border: 1px solid #ffd700; }

        .btn-small { background: rgba(255,255,255,0.05); border: 1px solid var(--glass-border); color: white; padding: 6px 12px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
        .btn-small:hover { background: var(--cyan-neon); color: black; }

        .graph-viewport { height: 450px; background: rgba(0,0,0,0.3); border-radius: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; }
        .neural-overlay { position: absolute; z-index: 5; text-align: center; pointer-events: none; }

        .config-form { padding: 40px; max-width: 600px; }
        .config-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
        .config-row span { color: var(--gray-text); font-weight: 500; }
        .config-row input[type="range"] { 
            accent-color: var(--cyan-neon);
            width: 200px;
        }

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

        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

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
