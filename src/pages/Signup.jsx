import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock, Briefcase, ChevronRight } from 'lucide-react';
import NeuralGlobe from '../components/NeuralGlobe';

function Signup() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('Freelancer');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await axios.post('http://localhost:5000/api/auth/signup', {
                fullName,
                email,
                password,
                accountType
            });
            alert(res.data.message);
            navigate('/login');
        } catch (err) {
            alert(err.response?.data?.message || 'Error creating identity');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="signup-container">
            <div className="bg-glow"></div>

            <div className="auth-split">
                {/* Left Side: Neural AI Network */}
                <div className="auth-visual-side">
                    <NeuralGlobe />
                    <div className="auth-visual-overlay">
                        <div className="visual-caption">
                            <h2 className="text-gradient">Universal Trust</h2>
                            <p>Join the internet's reliability layer.</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Signup Form */}
                <div className="auth-form-side">
                    <div className="login-card glass-card">
                        <header className="auth-header">
                            <div className="logo text-gradient" style={{ fontSize: '2rem' }}>NIYAT</div>
                            <p className="auth-subtitle">Initialize Your Behavioral Identity</p>
                        </header>

                        <form className="auth-form" onSubmit={handleSignup}>
                            <div className="input-group">
                                <label>Full Name</label>
                                <div className="input-wrapper">
                                    <User size={18} className="input-icon" />
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        required
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <label>Email Address</label>
                                <div className="input-wrapper">
                                    <Mail size={18} className="input-icon" />
                                    <input
                                        type="email"
                                        placeholder="john@niyat.com"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <label>Account Type</label>
                                <div className="input-wrapper">
                                    <Briefcase size={18} className="input-icon" />
                                    <select
                                        className="auth-select"
                                        value={accountType}
                                        onChange={(e) => setAccountType(e.target.value)}
                                    >
                                        <option>Freelancer</option>
                                        <option>Client</option>
                                        <option>Agency</option>
                                        <option>Enterprise</option>
                                        <option>Remote Team</option>
                                    </select>
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

                            <button type="submit" className="btn-primary auth-submit" disabled={isLoading}>
                                {isLoading ? "INITIALIZING..." : "CREATE IDENTITY"}
                                {!isLoading && <ChevronRight size={18} style={{ marginLeft: '8px' }} />}
                            </button>
                        </form>

                        <div className="onboarding-preview glass-card">
                            <div className="preview-item">
                                <div className="p-dot"></div>
                                <span>Compatibility Engine Preview</span>
                            </div>
                            <div className="preview-item">
                                <div className="p-dot purple"></div>
                                <span>Trust Passport Setup</span>
                            </div>
                        </div>

                        <p className="auth-footer" style={{ marginTop: '20px' }}>
                            Already have an identity? <Link to="/login">Sign In</Link>
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .signup-container { min-height: 100vh; overflow: hidden; }
        .auth-split { display: grid; grid-template-columns: 1fr 1fr; height: 100vh; }
        .auth-visual-side { position: relative; background: #000; overflow: hidden; }
        .auth-visual-overlay { position: absolute; bottom: 80px; left: 10%; z-index: 10; }
        .visual-caption h2 { font-size: 2.5rem; margin-bottom: 8px; }
        .auth-form-side { display: flex; align-items: center; justify-content: center; padding: 40px; }
        .login-card { width: 100%; max-width: 500px; padding: 40px; }
        .auth-header { margin-bottom: 30px; text-align: left; }
        .input-group { margin-bottom: 20px; }
        .input-group label { display: block; font-size: 0.8rem; margin-bottom: 8px; color: var(--gray-text); }
        .input-wrapper { position: relative; display: flex; align-items: center; }
        .input-icon { position: absolute; left: 16px; color: var(--gray-text); }
        .auth-form input, .auth-select {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          padding: 12px 12px 12px 48px;
          border-radius: 10px;
          color: white;
        }
        .auth-select { appearance: none; cursor: pointer; }
        .auth-submit { width: 100%; padding: 14px; margin-top: 10px; display: flex; align-items: center; justify-content: center; }
        
        .onboarding-preview {
          margin-top: 30px;
          padding: 15px;
          display: flex;
          gap: 20px;
          justify-content: center;
        }
        .preview-item { display: flex; align-items: center; gap: 8px; font-size: 0.75rem; color: var(--gray-text); }
        .p-dot { width: 6px; height: 6px; background: var(--cyan-neon); border-radius: 50%; box-shadow: 0 0 10px var(--cyan-neon); }
        .p-dot.purple { background: var(--purple-glow); box-shadow: 0 0 10px var(--purple-glow); }

        @media (max-width: 1024px) {
          .auth-split { grid-template-columns: 1fr; }
          .auth-visual-side { display: none; }
        }
      `}</style>
        </div>
    );
}

export default Signup;
