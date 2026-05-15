# AGENTS.md

## 프로젝트 개요
이 프로젝트는 사용자가 입력한 텍스트를 OpenAI API로 감성 분석하여 긍정 / 부정 / 중립 결과를 제공하는 웹 서비스입니다.

프로젝트 목적:
- 비전공자도 이해 가능한 구조 유지
- Antigravity AI 코딩 에이전트가 추측 없이 구현 가능하도록 명확한 규칙 제공
- 최소 기능 제품(MVP)을 안정적으로 완성

---

# 작업 원칙

## 1. 절대 추측하지 말 것
다음 항목은 임의로 변경 금지:
- API 응답 형식
- DB 컬럼 구조
- UI 색상 체계
- 폴더 구조
- 환경 변수 이름
- 결과 표시 방식

모르는 항목은 TODO 주석으로 남긴다.

예시:
```js
// TODO: 관리자 승인 후 감정 카테고리 추가
```

---

# 2. 구현 범위

## 포함 범위
반드시 구현:
- 텍스트 입력
- 감성 분석 요청
- 긍정 / 부정 / 중립 결과 표시
- 신뢰도 퍼센트 표시
- 분석 이유 표시
- 오류 메시지 표시
- Supabase 저장
- 반응형 UI

## 제외 범위
이번 프로젝트에서 구현하지 않음:
- 로그인
- 회원가입
- 결제
- 다국어 지원
- 실시간 채팅
- 이미지 업로드
- 음성 분석
- 관리자 페이지

---

# 3. 기술 스택 고정

## Front-end
- HTML
- CSS
- Vanilla JavaScript

React, Vue, Tailwind 사용 금지.

## Back-end
- Node.js
- Express

## AI
- OpenAI API

## Database
- Supabase

## Deploy
- Vercel

---

# 4. 코드 스타일 규칙

## HTML
- 시맨틱 태그 사용
- 접근성 속성 포함

## CSS
- 클래스 네이밍 일관성 유지
- CSS 변수 사용
- 하드코딩 최소화

## JavaScript
- async/await 사용
- 함수 단위 분리
- 에러 처리 필수

---

# 5. API 규칙

## OpenAI 요청
반드시 서버에서 호출한다.

브라우저에서 OpenAI API Key 사용 금지.

## API 응답 형식
```json
{
  "sentiment": "positive",
  "confidence": 92,
  "reason": "긍정적인 표현이 많음"
}
```

---

# 6. 환경 변수 규칙

필수 환경 변수:
```env
OPENAI_API_KEY=
SUPABASE_URL=
SUPABASE_ANON_KEY=
PORT=3000
```

.env 파일은 Git에 업로드 금지.

---

# 7. UI 디자인 규칙

첨부 이미지 스타일 참고:
- 플랫 일러스트 느낌
- 부드러운 곡선
- 레드 + 청록 포인트 컬러
- 친환경 / 미래형 모빌리티 감성
- 넓은 여백
- 단순한 아이콘 스타일

금지:
- 과도한 애니메이션
- 네온 효과
- 다크 사이버펑크 스타일
- 복잡한 그래프 UI

---

# 8. 완료 기준 (Definition of Done)

아래 조건을 모두 만족해야 완료:
- 감성 분석 정상 동작
- 긍정/부정/중립 표시 성공
- 오류 처리 동작 확인
- 모바일 화면 정상 출력
- Supabase 저장 성공
- Vercel 배포 성공
- 콘솔 에러 없음

---

# 9. 검증 기준

## 기능 검증
- 긍정 문장 입력 시 positive 반환
- 부정 문장 입력 시 negative 반환
- 애매한 문장 입력 시 neutral 반환

## 예외 검증
- 빈 문자열 입력 차단
- API 실패 시 오류 메시지 출력
- 네트워크 실패 시 재시도 안내 표시

---

# 10. 폴더 구조

```txt
project-root/
├── public/
├── server/
├── docs/
├── package.json
├── AGENTS.md
├── PRD.md
└── .env
```
