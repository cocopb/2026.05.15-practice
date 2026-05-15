# UI 구현 가이드

# 디자인 컨셉

첨부 이미지 스타일 참고.

## 핵심 스타일
- 플랫 일러스트
- 단순한 라인
- 부드러운 곡선
- 레드 포인트 컬러
- 청록 계열 배경
- 밝은 회색 배경

---

# 컬러 가이드

## Primary
```css
--primary-red: #ff3b3b;
```

## Secondary
```css
--teal: #2ea7a0;
```

## Background
```css
--bg-light: #f2efef;
```

## Text
```css
--text-dark: #222222;
```

---

# 레이아웃 구조

```txt
Header
Hero Section
Input Card
Result Card
Footer
```

---

# Hero 영역

포함 요소:
- 친환경 모빌리티 일러스트
- 서비스 제목
- 짧은 설명

예시 문구:
"AI가 당신의 문장을 분석합니다."

---

# 입력 카드

포함 요소:
- textarea
- 글자 수 표시
- 분석 버튼

버튼 상태:
- 기본
- hover
- loading
- disabled

---

# 결과 카드

표시 요소:
- 감정 결과
- 신뢰도
- 분석 이유

상태별 색상:
- positive → 초록
- negative → 빨강
- neutral → 회색

---

# 반응형 기준

## Desktop
- 최대 너비 1200px

## Tablet
- 2단 → 1단 전환

## Mobile
- 세로 정렬
- 버튼 전체 너비

---

# 금지 사항

금지:
- 과한 그림자
- 복잡한 패턴
- 네온 컬러
- 작은 글씨
