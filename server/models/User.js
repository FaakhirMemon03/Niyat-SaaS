const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ['user', 'freelancer', 'client', 'enterprise', 'analyst', 'admin', 'super_admin'],
        default: 'user'
    },
    accountType: { type: String, default: 'Freelancer' },
    trustScore: { type: Number, default: 75 },
    behavioralProfile: {
        consistency: { type: Number, default: 50 },
        stability: { type: Number, default: 50 },
        resilience: { type: Number, default: 50 }
    },
    lastLogin: { type: Date },
    integrations: [String],
    aiInsights: [String]
}, { timestamps: true });

// Admin Schema
const adminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'super_admin' },
    permissions: { type: [String], default: ['god_mode'] },
    systemAccessLevel: { type: Number, default: 10 }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);

module.exports = { User, Admin };
