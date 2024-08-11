import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

mongoose.connect(process.env.DBURI, {
    serverSelectionTimeoutMS: 5000, // Keep this option to prevent long delays in connection attempts
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Failed to connect to MongoDB", err));

// Check if the model is already compiled, and if not, compile it
const User = mongoose.models.User || mongoose.model('User', new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}));

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        try {
            // Check if the user already exists
            const existingUser = await User.findOne({ username });
            if (existingUser) {
                return res.status(400).json({ message: 'Username already taken' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create a new user
            const newUser = new User({ username, password: hashedPassword });
            await newUser.save();

            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error("Error registering user:", error);
            res.status(500).json({ message: 'Server error', error });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}