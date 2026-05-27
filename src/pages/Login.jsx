import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import gsap from 'gsap';
import { Mail, Lock, Chrome, Github, Linkedin } from 'lucide-react';
import axios from 'axios';
import NeuralGlobe from '../components/NeuralGlobe';
import useAuthStore from '../store/authStore';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [adminVerified, setAdminVerified] = useState(false);
  const navigate = useNavigate();
  const loginStore = useAuthStore((state) => state.login);

  useEffect(() => {
    gsap.fromTo('.login-card',
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      const { user, token, role } = res.data;

      if (role === 'super_admin') {
        setAdminVerified(true);
        // Cinematic Admin Sequence
        const tl = gsap.timeline();
        tl.to('.login-card', { opacity: 0, duration: 0.5 })
          .to('.admin-auth-overlay', { display: 'flex', opacity: 1, duration: 0.5 })
          .from('.auth-text', { y: 20, opacity: 0, stagger: 0.2, duration: 0.8 })
          .to('.admin-auth-overlay', {
            opacity: 0, duration: 0.8, delay: 1, onComplete: () => {
              loginStore(user, token, role);
              navigate('/admin');
            }
          });
      } else {
        loginStore(user, token, role);
        navigate('/dashboard');
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Authentication failed');
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="bg-glow"></div>

      {/* Admin Verification Overlay */}
      <div className="admin-auth-overlay" style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        background: 'black', zIndex: 2000, display: 'none', opacity: 0,
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
      }}>
        <div className="ai-pulse"></div>
        <h2 className="auth-text text-gradient" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>ADMIN ACCESS VERIFIED</h2>
        <p className="auth-text" style={{ color: 'var(--gray-text)', letterSpacing: '2px' }}>INITIALIZING NEURAL AUTHORIZATION...</p>
        <p className="auth-text" style={{ color: 'var(--cyan-neon)', fontSize: '0.8rem', marginTop: '20px' }}>SYSTEM BOOT SEQUENCE [GOD_MODE] ACTIVATED</p>
      </div>

      <div className="auth-split">
        <div className="auth-visual-side">
          <NeuralGlobe />
          <div className="auth-visual-overlay">
            <div className="visual-caption">
              <h2 className="text-gradient">Evolving Trust</h2>
              <p>Real-time behavioral graph initialization...</p>
            </div>
          </div>
        </div>

        <div className="auth-form-side">
          <div className="login-card glass-card">
            <header className="auth-header">
              <div className="logo text-gradient" style={{ fontSize: '2.5rem' }}>NIYAT</div>
              <p className="auth-subtitle">Machine-Understood Human Reliability</p>
            </header>

            <form onSubmit={handleLogin} className="auth-form">
              <div className="input-group">
                <label>Email Address</label>
                <div className="input-wrapper">
                  <Mail size={18} className="input-icon" />
                  <input
                    type="email"
                    placeholder="niyat@admin.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Password</label>
                <div className="input-wrapper">
                  <Lock size={18} className="input-icon" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="auth-options">
                <label className="checkbox-label">
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#" className="forgot-link">Forgot password?</a>
              </div>

              <button type="submit" className="btn-primary auth-submit" disabled={isLoading}>
                {isLoading ? 'VERIFYING...' : 'SIGN IN'}
              </button>
            </form>

            <div className="auth-divider"><span>or continue with</span></div>

            <div className="social-auth">
              <button className="social-btn glass-card"><Chrome size={20} /></button>
              <button className="social-btn glass-card"><Github size={20} /></button>
              <button className="social-btn glass-card"><Linkedin size={20} /></button>
            </div>

            <p className="auth-footer">
              Don't have an account? <Link to="/signup">Start Building Trust</Link>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .login-container { min-height: 100vh; width: 100vw; overflow: hidden; }
        .auth-split { display: grid; grid-template-columns: 1.2fr 1fr; height: 100vh; }
        .auth-visual-side { position: relative; background: #000; }
        .auth-visual-overlay { position: absolute; bottom: 100px; left: 10%; z-index: 10; }
        .visual-caption h2 { font-size: 3rem; }
        .auth-form-side { display: flex; align-items: center; justify-content: center; padding: 40px; }
        .login-card { width: 100%; max-width: 480px; padding: 50px; }
        .auth-header { text-align: center; margin-bottom: 40px; }
        .input-group { margin-bottom: 24px; }
        .input-group label { display: block; font-size: 0.85rem; margin-bottom: 10px; color: var(--gray-text); }
        .input-wrapper { position: relative; display: flex; align-items: center; }
        .input-icon { position: absolute; left: 16px; color: var(--gray-text); }
        .auth-form input { width: 100%; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--glass-border); padding: 14px 14px 14px 48px; border-radius: 12px; color: white; }
        .auth-form input:focus { outline: none; border-color: var(--cyan-neon); box-shadow: 0 0 15px rgba(0, 242, 255, 0.2); }
        .auth-submit { width: 100%; padding: 16px; font-weight: 700; letter-spacing: 1px; }
        .auth-divider { text-align: center; margin-bottom: 24px; position: relative; }
        .auth-divider span { background: #1a1a1a; padding: 0 10px; color: var(--gray-text); font-size: 0.8rem; }
        .auth-divider::before { content: ''; position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: var(--glass-border); z-index: -1; }
        .social-auth { display: flex; gap: 16px; justify-content: center; margin-bottom: 30px; }
        .social-btn { width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 12px; cursor: pointer; transition: transform 0.2s ease; }
        .social-btn:hover { transform: translateY(-5px); border-color: var(--cyan-neon); }
        .auth-footer a { color: var(--cyan-neon); text-decoration: none; font-weight: 600; }
        @media (max-width: 1024px) {
          .auth-split { grid-template-columns: 1fr; }
          .auth-visual-side { display: none; }
        }
      `}</style>
    </div>
  );
}

export default Login;
