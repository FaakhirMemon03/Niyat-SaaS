import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, LayoutDashboard, UserCircle, Settings, LogOut } from 'lucide-react';
import useAuthStore from '../store/authStore';

const Navbar = () => {
    const location = useLocation();
    const { isAuthenticated, logout } = useAuthStore();
    const isAuthPage = ['/login', '/signup'].includes(location.pathname);
    const isAdmin = location.pathname.startsWith('/admin');

    if (isAuthPage) return null;

    return (
        <nav className="main-nav">
            <div className="nav-container">
                <Link to="/" className="logo text-gradient">NIYAT</Link>

                {!isAdmin && (
                    <div className="nav-links">
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                        <a href="/#features">Features</a>
                        <Link to="/passport" className={location.pathname === '/passport' ? 'active' : ''}>Passport</Link>
                    </div>
                )}

                <div className="nav-actions">
                    {isAuthenticated ? (
                        <>
                            <Link to="/dashboard" className="nav-btn glass-card">
                                <LayoutDashboard size={18} />
                                <span>Dashboard</span>
                            </Link>
                            <button onClick={logout} className="nav-btn glass-card" style={{ cursor: 'pointer', background: 'transparent', border: 'none', color: 'inherit', fontFamily: 'inherit' }}>
                                <LogOut size={18} />
                                <span>Logout</span>
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="nav-btn glass-card">
                                <UserCircle size={18} />
                                <span>Login</span>
                            </Link>
                            <Link to="/signup" className="btn-primary" style={{ textDecoration: 'none' }}>Get Started</Link>
                        </>
                    )}
                </div>
            </div>

            <style jsx>{`
                .main-nav {
                    height: 80px;
                    display: flex;
                    align-items: center;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    background: rgba(5, 5, 5, 0.8);
                    backdrop-filter: blur(12px);
                    border-bottom: 1px solid var(--glass-border);
                    width: 100%;
                }
                .nav-container {
                    width: 100%;
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 5%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    font-size: 1.8rem;
                    font-weight: 800;
                    text-decoration: none;
                    letter-spacing: -1px;
                }
                .nav-links {
                    display: flex;
                    gap: 40px;
                }
                .nav-links a, .nav-links .active {
                    color: var(--gray-text);
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 0.95rem;
                    transition: color 0.3s ease;
                }
                .nav-links a:hover, .nav-links .active {
                    color: var(--cyan-neon);
                }
                .nav-actions {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }
                .nav-btn {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 8px 16px;
                    color: white;
                    text-decoration: none;
                    font-size: 0.9rem;
                    border-radius: 100px;
                }
                .nav-btn:hover {
                    border-color: var(--cyan-neon);
                    color: var(--cyan-neon);
                }
                @media (max-width: 768px) {
                    .nav-links { display: none; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
