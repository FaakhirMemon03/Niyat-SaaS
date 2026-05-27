import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Passport from './pages/Passport';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
import SmoothScroll from './components/SmoothScroll';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/passport" element={<Passport />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </SmoothScroll>
    </Router>
  );
}

export default App;
