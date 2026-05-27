const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const { signup, login } = require('./controllers/authController');
const { verifyToken, verifyRole } = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/niyat_ai';

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

// MongoDB Connection
mongoose.connect(MONGO_URI)
    .then(() => console.log('NIYAT AI: Connected to MongoDB Database'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Auth Routes
app.post('/api/auth/signup', signup);
app.post('/api/auth/login', login);

// Protected Logic simulation
app.get('/api/user/profile', verifyToken, (req, res) => {
    res.json({ message: 'Behavioral profile data loaded', user: req.user });
});

app.get('/api/admin/observatory', verifyToken, verifyRole(['super_admin']), (req, res) => {
    res.json({ message: 'Ecosystem observatory access granted' });
});

// Original Simulation Endpoints (Legacy for frontend compatibility)
app.get('/api/health', (req, res) => {
    res.json({ status: 'active', engine: 'Niyat Behavioral Intelligence v1.0' });
});

app.listen(PORT, () => {
    console.log(`NIYAT Trust Engine running on port ${PORT}`);
});
