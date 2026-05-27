const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Simulation of Behavioral AI Model
const calculateReliability = (userId) => {
    // Logic simulate multi-model behavioral analysis
    return {
        userId,
        score: Math.floor(Math.random() * (98 - 75) + 75), // Mock high reliability
        consistency: 'High',
        stressResilience: 88,
        lastUpdate: new Date(),
        signals: [
            { type: 'Communication', status: 'Stable' },
            { type: 'Deadlines', status: 'Met' },
            { type: 'Tone', status: 'Professional' }
        ]
    };
};

// API Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'active', engine: 'Niyat Behavioral Intelligence v1.0' });
});

// Behavioral Passport Endpoint
app.get('/api/passport/:id', (req, res) => {
    const data = calculateReliability(req.params.id);
    res.json(data);
});

// Ghosting Prediction Endpoint
app.post('/api/predict/ghosting', (req, res) => {
    const { communicationData } = req.body;
    // Mock AI analyzing patterns
    const risk = Math.floor(Math.random() * 20); // Low risk simulation
    res.json({
        probability: risk,
        status: risk > 50 ? 'High Risk' : 'Healthy',
        reason: 'Response rhythm matches historical stability.'
    });
});

// Compatibility Assessment
app.post('/api/compatibility', (req, res) => {
    const { userA, userB } = req.body;
    const score = Math.floor(Math.random() * (95 - 60) + 60);
    res.json({
        compatibilityScore: score,
        conflictRisk: 100 - score,
        matchingStyles: ['Detailed Communication', 'Sync-based workflow'],
        verdict: score > 80 ? 'Ideal Match' : 'Potential Friction'
    });
});

// Event Ingestion
app.post('/api/events', (req, res) => {
    const event = req.body;
    console.log('Ingested Event:', event);
    res.status(201).json({ message: 'Event ingested to Reliability Graph', eventId: Date.now() });
});

app.listen(PORT, () => {
    console.log(`NIYAT Trust Engine running on port ${PORT}`);
});
