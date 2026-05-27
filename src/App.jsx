import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Passport from './pages/Passport';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
import Pricing from './pages/Pricing';
import Compatibility from './pages/Compatibility';
import Settings from './pages/Settings';
import SmoothScroll from './components/SmoothScroll';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

// Fix for scroll position not resetting on route change
function ScrollToTop() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, state]);
  return null;
}

function App() {
  const [loading, setLoading] = useState(() => {
    // Check if loader has already been shown in this session
    return !sessionStorage.getItem('loader_shown');
  });

  const handleLoaderFinish = () => {
    setLoading(false);
    sessionStorage.setItem('loader_shown', 'true');
  };

  return (
    <Router>
      <ScrollToTop />
      {loading && <Loader onFinish={handleLoaderFinish} />}
      <Navbar />
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/passport" element={<Passport />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={
            <ProtectedRoute adminOnly={true}>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/compatibility" element={<Compatibility />} />
          <Route path="/settings" element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          } />
        </Routes>
      </SmoothScroll>
    </Router>
  );
}

export default App;
