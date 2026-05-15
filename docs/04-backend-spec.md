# Back-end 구현 문서

# 사용 기술
- Node.js
- Express

---

# 폴더 구조

```txt
server/
├── server.js
├── routes/
├── controllers/
├── services/
└── utils/
```

---

# API 설계

## POST /api/analyze

### Request
```json
{
  "text": "오늘 정말 행복해"
}
```

### Response
```json
{
  "sentiment": "positive",
  "confidence": 91,
  "reason": "긍정 표현이 많음"
}
```

---

# 서버 기능

반드시 구현:
- OpenAI API 호출
- 입력 검증
- 오류 처리
- Supabase 저장

---

# 에러 처리

반드시 처리:
- OpenAI 실패
- Timeout
- 잘못된 입력
- DB 저장 실패

---

# 보안 규칙

금지:
- API Key 노출
- 클라이언트 직접 호출

---

# 완료 기준

- API 응답 성공
- 500 에러 처리 완료
- 잘못된 요청 차단
