import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NeuralGlobe from '../components/NeuralGlobe';
import passportImg from '../assets/passport.png';

gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const heroRef = useRef(null);
  const cardsRef = useRef([]);
  const statsRef = useRef(null);

  useEffect(() => {
    // Hero Animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo('.hero-title-part',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2 }
    )
      .fromTo('.hero-description',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 }, "-=0.8"
      )
      .fromTo('.hero-actions',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 }, "-=0.5"
      );

    // Feature Cards Stagger
    gsap.from('.feature-card', {
      scrollTrigger: {
        trigger: '.features-section',
        start: 'top 80%',
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'back.out(1.7)'
    });

    // Stats Animation
    gsap.from('.stat-item', {
      scrollTrigger: {
        trigger: '.stats-strip',
        start: 'top 90%',
      },
      scale: 0,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'elastic.out(1, 0.5)'
    });

  }, []);

  return (
    <div className="app-container">
      <div className="bg-glow"></div>

      {/* Navigation */}
      <nav>
        <div className="logo text-gradient">NIYAT</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#passport">Passport</a>
          <a href="#compatibility">Compatibility</a>
        </div>
        <Link to="/login" className="btn-primary no-underline">Launch Dashboard</Link>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-content">
          <div className="ai-badge glass-card">
            <div className="ai-pulse"></div>
            <span>AI Reliability Engine Active</span>
          </div>
          <h1 className="title-large">
            <span className="hero-title-part block">Machine-Understood</span>
            <span className="hero-title-part block text-gradient">Human Reliability</span>
          </h1>
          <p className="hero-description">
            Building the missing reliability layer of the internet. Predict ghosting risk,
            delivery consistency, and partnership success before you even start.
          </p>
          <div className="hero-actions">
            <Link to="/dashboard" className="btn-primary no-underline">Get Your Trust Score</Link>
            <button className="btn-secondary glass-card">View Trust Graph</button>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="globe-wrapper">
            <NeuralGlobe />
          </div>
          <div className="floating-metric glass-card" style={{ top: '20%', right: '10%' }}>
            <span className="trust-high">94% Reliability</span>
          </div>
          <div className="floating-metric glass-card" style={{ bottom: '20%', left: '10%' }}>
            <span className="trust-low">Low Ghosting Risk</span>
          </div>
        </div>
      </section>

      {/* Stats/Pulse Section */}
      <section className="stats-strip glass-card" ref={statsRef}>
        <div className="stat-item">
          <h3 className="text-gradient">2.4M</h3>
          <p>Behavioral Events</p>
        </div>
        <div className="stat-separator"></div>
        <div className="stat-item">
          <h3 className="text-gradient">91%</h3>
          <p>Prediction Accuracy</p>
        </div>
        <div className="stat-separator"></div>
        <div className="stat-item">
          <h3 className="text-gradient">500k+</h3>
          <p>Trust Connections</p>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="features-section">
        <h2 className="section-title">Beyond Portfolios. <span className="text-gradient">Behavioral Insights.</span></h2>
        <div className="dashboard-grid">
          <div className="glass-card feature-card">
            <div className="feature-icon purple-gradient"></div>
            <h3>Ghosting Prediction</h3>
            <p>AI detects communication decay patterns before they disappear. Save weeks of project delay.</p>
          </div>
          <div className="glass-card feature-card">
            <div className="feature-icon cyan-gradient"></div>
            <h3>Compatibility Engine</h3>
            <p>Predict how a specific client and freelancer will sync. Prevent friction before it happens.</p>
          </div>
          <div className="glass-card feature-card">
            <div className="feature-icon emerald-gradient"></div>
            <h3>Fraud Intelligence</h3>
            <p>Detect scam clusters and fake professionalism using connected relationship graphs.</p>
          </div>
        </div>
      </section>

      {/* Behavioral Passport Section */}
      <section id="passport" className="passport-section">
        <div className="passport-grid">
          <div className="passport-visual">
            <img src={passportImg} alt="Behavioral Passport" className="passport-img" />
          </div>
          <div className="passport-content">
            <h2 className="title-medium">The Behavioral <span className="text-gradient">Passport</span></h2>
            <p>
              Identity today is fakeable. Behavior is not. The Niyat Passport is your machine-verified
              reliability score that follows you across the internet.
            </p>
            <ul className="passport-features">
              <li>Verified Delivery Consistency</li>
              <li>Stress Resilience Index</li>
              <li>Emotional Stability Metrics</li>
              <li>Long-term Retention Probability</li>
            </ul>
            <Link to="/dashboard" className="btn-primary no-underline">Generate My Passport</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="logo text-gradient">NIYAT</div>
          <p>Building the Trust Infrastructure of the Internet.</p>
          <div className="footer-bottom">
            <span>&copy; 2026 Niyat Labs. All rights reserved.</span>
            <div className="footer-links">
              <a href="#">Privacy</a>
              <a href="#">Security</a>
              <a href="#">API</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .app-container { width: 100%; overflow-x: hidden; }
        .no-underline { text-decoration: none; display: inline-block; }
        .block { display: block; }
        
        .hero-section {
          padding: 100px 5% 60px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 40px;
          min-height: 80vh;
        }

        .globe-wrapper {
          width: 100%;
          height: 500px;
          position: relative;
        }

        .ai-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px;
          border-radius: 100px;
          margin-bottom: 24px;
          font-size: 0.85rem;
          color: var(--cyan-neon);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-description {
          font-size: 1.25rem;
          color: var(--gray-text);
          margin: 32px 0;
          max-width: 540px;
          line-height: 1.6;
        }

        .hero-actions { display: flex; gap: 20px; }

        .btn-secondary {
          padding: 12px 28px;
          border-radius: 50px;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        .hero-image-container { position: relative; }

        .floating-metric {
          position: absolute;
          padding: 12px 20px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.9rem;
          z-index: 2;
        }

        .stats-strip {
          margin: 0 5%;
          display: flex;
          justify-content: space-around;
          padding: 40px;
          border-radius: 24px;
        }

        .stat-item { text-align: center; }
        .stat-item h3 { font-size: 2.5rem; font-weight: 800; margin-bottom: 8px; }
        .stat-item p { color: var(--gray-text); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; }

        .stat-separator { width: 1px; background: var(--glass-border); }
        .section-title { font-size: 3rem; font-weight: 800; text-align: center; margin-bottom: 60px; }

        .feature-card { padding: 40px; text-align: left; }
        .feature-icon { width: 50px; height: 50px; border-radius: 12px; margin-bottom: 24px; }

        .purple-gradient { background: linear-gradient(135deg, #6e40ff, #bc13fe); }
        .cyan-gradient { background: linear-gradient(135deg, #00d2ff, #00f2ff); }
        .emerald-gradient { background: linear-gradient(135deg, #00b09b, #96c93d); }

        .feature-card h3 { font-size: 1.5rem; margin-bottom: 16px; }
        .feature-card p { color: var(--gray-text); line-height: 1.6; }

        .passport-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 80px; align-items: center; }
        .passport-img { width: 100%; border-radius: 32px; box-shadow: 0 0 60px rgba(0, 0, 0, 0.6); }

        .title-medium { font-size: 3.5rem; font-weight: 800; margin-bottom: 32px; }
        .passport-content p { font-size: 1.25rem; color: var(--gray-text); line-height: 1.6; margin-bottom: 32px; }

        .passport-features { list-style: none; margin-bottom: 40px; }
        .passport-features li { margin-bottom: 12px; display: flex; align-items: center; gap: 12px; font-weight: 500; }
        .passport-features li::before { content: '✓'; color: var(--emerald-trust); font-weight: 800; }

        footer { padding: 80px 5% 40px; border-top: 1px solid var(--glass-border); background: rgba(10, 10, 10, 0.5); }
        .footer-content { max-width: 1200px; margin: 0 auto; }
        .footer-content .logo { font-size: 2rem; margin-bottom: 20px; }

        .footer-bottom {
          margin-top: 60px;
          padding-top: 30px;
          border-top: 1px solid var(--glass-border);
          display: flex;
          justify-content: space-between;
          color: var(--gray-text);
          font-size: 0.9rem;
        }

        .footer-links { display: flex; gap: 24px; }
        .footer-links a { color: var(--gray-text); text-decoration: none; }

        @media (max-width: 1024px) {
          .hero-section { grid-template-columns: 1fr; text-align: center; padding-top: 60px; }
          .hero-description { margin: 32px auto; }
          .hero-actions { justify-content: center; }
          .passport-grid { grid-template-columns: 1fr; text-align: center; }
          .passport-features { display: inline-block; text-align: left; }
          .globe-wrapper { height: 350px; }
        }
      `}</style>
    </div>
  );
}

export default Landing;
