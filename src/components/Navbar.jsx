import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Settings, LogOut, UserCircle, Menu, X } from 'lucide-react';
import useAuthStore from '../store/authStore';

const Navbar = () => {
    const location = useLocation();
    const { isAuthenticated, logout } = useAuthStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isAuthPage = ['/login', '/signup'].includes(location.pathname);
    const isAdmin = location.pathname.startsWith('/admin');

    if (isAuthPage || isAdmin) return null;

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="main-nav">
            <div className="nav-container">
                <Link to="/" className="logo text-gradient" onClick={closeMenu}>NIYAT</Link>

                <div className="desktop-nav">
                    <div className="nav-links">
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                        <Link to="/" state={{ scrollTo: 'features' }}>Features</Link>
                        <Link to="/compatibility" className={location.pathname === '/compatibility' ? 'active' : ''}>Compatibility</Link>
                        <Link to="/pricing" className={location.pathname === '/pricing' ? 'active' : ''}>Pricing</Link>
                        <Link to="/passport" className={location.pathname === '/passport' ? 'active' : ''}>Passport</Link>
                    </div>

                    <div className="nav-actions">
                        {isAuthenticated ? (
                            <>
                                <Link to="/dashboard" className="nav-btn glass-card">
                                    <LayoutDashboard size={18} />
                                    <span>Dashboard</span>
                                </Link>
                                <Link to="/settings" className="nav-btn glass-card">
                                    <Settings size={18} />
                                    <span>Settings</span>
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

                <button className="mobile-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Sidebar */}
            <div className={`mobile-sidebar ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-links">
                    <Link to="/" onClick={closeMenu}>Home</Link>
                    <Link to="/" state={{ scrollTo: 'features' }} onClick={closeMenu}>Features</Link>
                    <Link to="/compatibility" onClick={closeMenu}>Compatibility</Link>
                    <Link to="/pricing" onClick={closeMenu}>Pricing</Link>
                    <Link to="/passport" onClick={closeMenu}>Passport</Link>

                    <div className="mobile-divider"></div>

                    {isAuthenticated ? (
                        <>
                            <Link to="/dashboard" onClick={closeMenu}>Dashboard</Link>
                            <Link to="/settings" onClick={closeMenu}>Settings</Link>
                            <button onClick={() => { logout(); closeMenu(); }} className="logout-mobile">
                                <LogOut size={18} /> Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" onClick={closeMenu}>Login</Link>
                            <Link to="/signup" className="btn-primary" onClick={closeMenu} style={{ textAlign: 'center' }}>Get Started</Link>
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
                    background: rgba(5, 5, 5, 0.85);
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
                    z-index: 1001;
                }
                .desktop-nav {
                    display: flex;
                    align-items: center;
                    gap: 60px;
                }
                .nav-links {
                    display: flex;
                    gap: 40px;
                }
                .nav-links a {
                    color: var(--gray-text);
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 0.95rem;
                    transition: color 0.3s ease;
                }
                .nav-links a:hover, .nav-links a.active {
                    color: var(--cyan-neon);
                }
                .nav-actions {
                    display: flex;
                    align-items: center;
                    gap: 15px;
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
                
                .mobile-toggle {
                    display: none;
                    background: transparent;
                    border: none;
                    color: white;
                    cursor: pointer;
                    z-index: 1001;
                }

                .mobile-sidebar {
                    position: fixed;
                    top: 0;
                    right: -100%;
                    width: 80%;
                    max-width: 300px;
                    height: 100vh;
                    background: #050505;
                    border-left: 1px solid var(--glass-border);
                    transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    padding: 100px 40px;
                    z-index: 999;
                }

                .mobile-sidebar.open {
                    right: 0;
                    box-shadow: -20px 0 50px rgba(0,0,0,0.8);
                }

                .mobile-links {
                    display: flex;
                    flex-direction: column;
                    gap: 25px;
                }

                .mobile-links a {
                    color: var(--white-pure);
                    text-decoration: none;
                    font-size: 1.1rem;
                    font-weight: 600;
                }

                .mobile-divider {
                    height: 1px;
                    background: var(--glass-border);
                    margin: 10px 0;
                }

                .logout-mobile {
                    background: transparent;
                    border: none;
                    color: var(--red-anomaly);
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    padding: 0;
                    cursor: pointer;
                    text-align: left;
                }

                @media (max-width: 1024px) {
                    .desktop-nav { display: none; }
                    .mobile-toggle { display: block; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
