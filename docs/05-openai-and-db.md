# OpenAI & Supabase 연동 문서

# OpenAI 역할

텍스트 감정 분석 수행.

---

# OpenAI Prompt 규칙

반드시 JSON 형태 반환 요청.

예시:

```txt
Analyze the sentiment of the following text.

Return JSON only.

{
  "sentiment": "positive",
  "confidence": 90,
  "reason": "positive tone"
}
```

---

# 감정 분류 범위

허용 값:
- positive
- negative
- neutral

다른 값 반환 금지.

---

# Supabase 테이블

## Table: sentiment_logs

컬럼:
- id
- text
- sentiment
- confidence
- reason
- created_at

---

# 저장 흐름

```txt
사용자 입력
→ OpenAI 분석
→ 결과 반환
→ Supabase 저장
```

---

# 검증 기준

- DB 저장 성공 확인
- 잘못된 응답 차단
- JSON 파싱 오류 처리
