import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

mongoose.connect(process.env.DBURI, {
    serverSelectionTimeoutMS: 5000, // Keep this option to prevent long delays in connection attempts
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Failed to connect to MongoDB", err));

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        try {
            const existingUser = await User.findOne({ username });
            const correctPassword = await bcrypt.compare(password, existingUser.password)

            if (!existingUser) {
                return res.status(401).json({message:'Login not successful'})
            } else if (existingUser && correctPassword) {
                return res.status(200).json({message:'Login successful'})
            } else {
                return res.status(401).json({message:'Login not successful'})
            }
        } catch (error) {
            console.error("Error logging in user:", error);
            res.status(500).json({ message: 'Server error', error });
        }
    } else {
        const users = await User.find();
        res.status(200).json(users);
    }
}
