import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import gsap from 'gsap';
import { Mail, Lock, CheckCircle, Github, Linkedin, Chrome } from 'lucide-react';
import NeuralGlobe from '../components/NeuralGlobe';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Animation for the login card
        gsap.fromTo('.login-card',
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        );
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // AI Initialization Animation simulation
        setTimeout(() => {
            if (email === 'niyat@admin.com' && password === 'niyat@access.com') {
                // Switch to Admin mode
                gsap.to('.login-container', { opacity: 0, duration: 0.5, onComplete: () => navigate('/admin') });
            } else {
                // Normal user login
                gsap.to('.login-container', { opacity: 0, duration: 0.5, onComplete: () => navigate('/dashboard') });
            }
        }, 2000);
    };

    return (
        <div className="login-container">
            <div className="bg-glow"></div>

            <div className="auth-split">
                {/* Left Side: Neural AI Network */}
                <div className="auth-visual-side">
                    <NeuralGlobe />
                    <div className="auth-visual-overlay">
                        <div className="visual-caption">
                            <h2 className="text-gradient">Evolving Trust</h2>
                            <p>Real-time behavioral graph initialization...</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Login Form */}
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
                                        placeholder="name@company.com"
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
                                {isLoading ? 'INITIALIZING AI...' : 'SIGN IN'}
                            </button>
                        </form>

                        <div className="auth-divider">
                            <span>or continue with</span>
                        </div>

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
        .login-container {
          min-height: 100vh;
          width: 100vw;
          overflow: hidden;
        }

        .auth-split {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          height: 100vh;
        }

        .auth-visual-side {
          position: relative;
          background: rgba(0, 0, 0, 0.5);
          overflow: hidden;
        }

        .auth-visual-overlay {
          position: absolute;
          bottom: 100px;
          left: 10%;
          z-index: 10;
        }

        .visual-caption h2 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .visual-caption p {
          color: var(--gray-text);
          font-size: 1.1rem;
          letter-spacing: 1px;
        }

        .auth-form-side {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          background: var(--bg-deep);
        }

        .login-card {
          width: 100%;
          max-width: 480px;
          padding: 50px;
          border-radius: 30px;
        }

        .auth-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .auth-subtitle {
          color: var(--gray-text);
          font-size: 0.9rem;
          margin-top: 8px;
          letter-spacing: 0.5px;
        }

        .input-group {
          margin-bottom: 24px;
        }

        .input-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: var(--gray-text);
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 16px;
          color: var(--gray-text);
        }

        .auth-form input {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          padding: 14px 14px 14px 48px;
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .auth-form input:focus {
          outline: none;
          border-color: var(--cyan-neon);
          box-shadow: 0 0 15px rgba(0, 242, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
        }

        .auth-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          font-size: 0.85rem;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--gray-text);
          cursor: pointer;
        }

        .forgot-link {
          color: var(--cyan-neon);
          text-decoration: none;
        }

        .auth-submit {
          width: 100%;
          padding: 16px;
          font-size: 1rem;
          letter-spacing: 2px;
          margin-bottom: 30px;
        }

        .auth-divider {
          text-align: center;
          margin-bottom: 24px;
          position: relative;
        }

        .auth-divider span {
          background: #1a1a1a;
          padding: 0 10px;
          color: var(--gray-text);
          font-size: 0.8rem;
          z-index: 2;
        }

        .auth-divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--glass-border);
          z-index: -1;
        }

        .social-auth {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-bottom: 30px;
        }

        .social-btn {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .social-btn:hover {
          transform: translateY(-5px);
          border-color: var(--cyan-neon);
        }

        .auth-footer {
          text-align: center;
          font-size: 0.9rem;
          color: var(--gray-text);
        }

        .auth-footer a {
          color: var(--cyan-neon);
          text-decoration: none;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .auth-split { grid-template-columns: 1fr; }
          .auth-visual-side { display: none; }
          .auth-form-side { padding: 20px; }
          .login-card { padding: 30px; border-radius: 20px; }
        }
      `}</style>
        </div>
    );
}

export default Login;
