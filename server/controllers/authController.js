const { User, Admin } = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'niyat_secret_key';

const signup = async (req, res) => {
    try {
        const { fullName, email, password, accountType } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'Email already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);

        // Map accountType to role for internal logic
        const role = accountType.toLowerCase() === 'enterprise' ? 'enterprise' :
            accountType.toLowerCase() === 'client' ? 'client' : 'freelancer';

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
            accountType,
            role
        });

        await newUser.save();
        res.status(201).json({ message: 'Behavioral Identity Created Successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if it's the master admin
        if (email === 'niyat@admin.com' && password === 'niyat@access.com') {
            const token = jwt.sign({ email, role: 'super_admin' }, JWT_SECRET, { expiresIn: '1d' });
            return res.json({ token, role: 'super_admin', message: 'ADMIN ACCESS VERIFIED' });
        }

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found' });

        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });
        res.json({ token, role: user.role, user: { fullName: user.fullName, email: user.email } });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { signup, login };
