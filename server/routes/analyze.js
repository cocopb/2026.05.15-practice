const express = require('express');
const router = express.Router();
const { analyzeSentiment } = require('../services/openaiService');
const { logSentiment } = require('../services/supabaseService');

router.post('/', async (req, res) => {
    const { text } = req.body;

    // Validation
    if (!text || text.trim() === '') {
        return res.status(400).json({ error: '분석할 텍스트를 입력해주세요.' });
    }

    if (text.length > 1000) {
        return res.status(400).json({ error: '텍스트는 1000자 이내로 입력해주세요.' });
    }

    try {
        // 1. Analyze with OpenAI
        const analysis = await analyzeSentiment(text);

        // 2. Log to Supabase
        await logSentiment({
            text,
            sentiment: analysis.sentiment,
            confidence: analysis.confidence,
            reason: analysis.reason
        });

        // 3. Return result
        res.json(analysis);
    } catch (error) {
        console.error('Analysis Route Error:', error);
        res.status(500).json({ error: error.message || '분석 중 서버 오류가 발생했습니다.' });
    }
});

module.exports = router;
