const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Logs the sentiment analysis result to Supabase.
 * @param {Object} logData - The data to log (text, sentiment, confidence, reason).
 */
async function logSentiment(logData) {
    try {
        const { data, error } = await supabase
            .from('sentiment_logs')
            .insert([
                {
                    text: logData.text,
                    sentiment: logData.sentiment,
                    confidence: logData.confidence,
                    reason: logData.reason
                }
            ]);

        if (error) {
            console.error('Supabase Insertion Error:', error);
            // We don't necessarily want to fail the whole request if DB logging fails,
            // but we should log it.
        }
    } catch (error) {
        console.error('Supabase Service Error:', error);
    }
}

module.exports = {
    logSentiment
};
