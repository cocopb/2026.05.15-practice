document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const charCount = document.getElementById('currentCharCount');
    const errorContainer = document.getElementById('errorContainer');
    const resultCard = document.getElementById('resultCard');
    const sentimentBadge = document.getElementById('sentimentBadge');
    const confidenceValue = document.getElementById('confidenceValue');
    const reasonText = document.getElementById('reasonText');

    // Character Count Tracking
    textInput.addEventListener('input', () => {
        const length = textInput.value.length;
        charCount.textContent = length;
        
        if (length > 1000) {
            charCount.style.color = 'var(--negative-color)';
            analyzeBtn.disabled = true;
        } else {
            charCount.style.color = 'var(--neutral-color)';
            analyzeBtn.disabled = false;
        }
        
        // Clear error when typing
        if (errorContainer.style.display === 'block') {
            errorContainer.style.display = 'none';
        }
    });

    // Analyze Button Click
    analyzeBtn.addEventListener('click', async () => {
        const text = textInput.value.trim();

        // Validation
        if (!text) {
            showError('분석할 텍스트를 입력해주세요.');
            return;
        }

        if (text.length > 1000) {
            showError('텍스트는 1000자 이내로 입력해주세요.');
            return;
        }

        // Loading State
        setLoading(true);
        resultCard.classList.remove('active');

        try {
            const response = await fetch('/api/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || '분석 중 오류가 발생했습니다.');
            }

            renderResult(data);
        } catch (error) {
            showError(error.message);
        } finally {
            setLoading(false);
        }
    });

    function renderResult(data) {
        // Map sentiment to Korean and CSS classes
        const sentimentMap = {
            'positive': { text: '긍정', class: 'sentiment-positive' },
            'negative': { text: '부정', class: 'sentiment-negative' },
            'neutral': { text: '중립', class: 'sentiment-neutral' }
        };

        const result = sentimentMap[data.sentiment] || sentimentMap['neutral'];

        sentimentBadge.textContent = result.text;
        sentimentBadge.className = `sentiment-badge ${result.class}`;
        confidenceValue.textContent = data.confidence;
        reasonText.textContent = data.reason;

        resultCard.classList.add('active');
    }

    function showError(message) {
        errorContainer.textContent = message;
        errorContainer.style.display = 'block';
    }

    function setLoading(isLoading) {
        if (isLoading) {
            analyzeBtn.disabled = true;
            analyzeBtn.textContent = '분석 중...';
        } else {
            analyzeBtn.disabled = false;
            analyzeBtn.textContent = '감성 분석하기';
        }
    }
});
