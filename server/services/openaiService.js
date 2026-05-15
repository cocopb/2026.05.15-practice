const { OpenAI } = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Performs sentiment analysis on the provided text using OpenAI.
 * @param {string} text - The text to analyze.
 * @returns {Promise<Object>} - The analysis result containing sentiment, confidence, and reason.
 */
async function analyzeSentiment(text) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "Analyze the sentiment of the following text. Return JSON only in the following format: { \"sentiment\": \"positive\" | \"negative\" | \"neutral\", \"confidence\": number (0-100), \"reason\": \"string\" }"
                },
                {
                    role: "user",
                    content: text
                }
            ],
            response_format: { type: "json_object" }
        });

        const result = JSON.parse(response.choices[0].message.content);
        
        // Validate sentiment values
        const validSentiments = ['positive', 'negative', 'neutral'];
        if (!validSentiments.includes(result.sentiment)) {
            result.sentiment = 'neutral';
        }

        return result;
    } catch (error) {
        console.error('OpenAI API Error:', error);
        throw new Error('감성 분석 중 오류가 발생했습니다.');
    }
}

module.exports = {
    analyzeSentiment
};
