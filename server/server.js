require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const analyzeRoute = require('./routes/analyze');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/api/analyze', analyzeRoute);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
