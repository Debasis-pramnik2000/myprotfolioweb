const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

// ✅ Allow frontend (React) to communicate with backend
app.use(cors({ origin: 'http://localhost:3000' }));

// ✅ To parse JSON data
app.use(express.json());

// ✅ Routes
app.use('/api/contact', require('./routes/api/contact'));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
