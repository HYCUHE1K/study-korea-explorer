# StudyExplorer 개발 계획
**작성일**: 2026-01-16  
**버전**: 1.0  
**프로젝트**: 미국 유학 포털 서비스

## 🎯 프로젝트 비전

한국 학생들이 미국 유학을 준비하는 전 과정을 지원하는 원스톱 플랫폼

## 📅 개발 로드맵

### Phase 1: 기반 구축 ✅ (완료)
**기간**: 2026-01-16  
**목표**: 사용자 인증 및 프로필 시스템

#### 완료된 작업
- [x] 프로젝트 초기 설정 (React + TypeScript + Vite)
- [x] Supabase 통합
- [x] 인증 시스템 (이메일, OAuth)
- [x] 사용자 프로필 관리
- [x] 13개 언어 다국어 지원
- [x] 보안 정책 수립

---

### Phase 2: 핵심 기능 구현 🚀 (진행 중)
**기간**: 2026-01-17 ~ 2026-02-28 (6주)  
**목표**: 유학 정보 검색 및 매칭 시스템

#### 2.1 대학 정보 데이터베이스 (Week 1-2)

**데이터베이스 스키마**
```sql
-- 대학 테이블
universities (
  id, name, name_ko, name_zh, ...
  location_state, location_city
  type (public/private/community_college)
  ranking_us_news, ranking_qs
  tuition_in_state, tuition_out_state, tuition_international
  acceptance_rate, student_count
  website_url, logo_url
  description, description_ko, ...
  created_at, updated_at
)

-- 프로그램 테이블
programs (
  id, university_id
  name, degree_type (bachelor/master/phd)
  department, field_of_study
  duration_years, credits_required
  tuition_per_year
  requirements (jsonb)
  created_at, updated_at
)

-- 입학 요건 테이블
admission_requirements (
  id, university_id, program_id
  min_gpa, min_toefl, min_ielts
  min_sat, min_gre, min_gmat
  required_documents (jsonb)
  deadlines (jsonb)
)
```

**API 엔드포인트**
- `GET /api/universities` - 대학 목록 (필터링, 정렬, 페이징)
- `GET /api/universities/:id` - 대학 상세 정보
- `GET /api/programs` - 프로그램 검색
- `GET /api/programs/:id` - 프로그램 상세

**UI 컴포넌트**
- UniversityList - 대학 목록 카드
- UniversityDetail - 상세 페이지
- SearchFilters - 검색 필터 (위치, 학비, 전공 등)
- ComparisonTool - 대학 비교 도구

#### 2.2 장학금 정보 시스템 (Week 2-3)

**데이터베이스 스키마**
```sql
scholarships (
  id, name, name_ko, ...
  provider_type (government/university/private)
  provider_name
  amount_min, amount_max, currency
  eligibility_criteria (jsonb)
  application_deadline
  website_url
  description, description_ko, ...
  target_countries (array)
  target_degrees (array)
)

-- 사용자-장학금 매칭
user_scholarship_matches (
  id, user_id, scholarship_id
  match_score (0-100)
  matched_at
)
```

**기능**
- 장학금 검색 및 필터링
- 사용자 프로필 기반 자동 매칭
- 마감일 알림
- 즐겨찾기 기능

#### 2.3 스마트 매칭 알고리즘 (Week 3-4)

**매칭 로직**
```typescript
interface MatchingCriteria {
  gpa: number;
  testScores: { toefl?: number; ielts?: number; sat?: number };
  fieldOfInterest: string;
  budgetRange: string;
  preferredLocation: string[];
  targetDegree: string;
}

interface MatchResult {
  university: University;
  program: Program;
  matchScore: number; // 0-100
  matchReasons: string[];
  admissionChance: 'high' | 'medium' | 'low';
}
```

**알고리즘 요소**
- GPA 매칭 (25%)
- 시험 점수 매칭 (25%)
- 전공 관심도 (20%)
- 예산 적합성 (15%)
- 위치 선호도 (10%)
- 기타 요소 (5%)

#### 2.4 대시보드 구현 (Week 4-5)

**사용자 대시보드**
- 추천 대학 목록
- 관심 대학 추적
- 지원 진행 상황
- 마감일 캘린더
- 할 일 체크리스트

**컴포넌트**
- DashboardOverview
- RecommendedUniversities
- ApplicationTimeline
- DeadlineCalendar
- TodoList

#### 2.5 지원 관리 시스템 (Week 5-6)

**데이터베이스 스키마**
```sql
applications (
  id, user_id, university_id, program_id
  status (draft/submitted/under_review/accepted/rejected/waitlisted)
  application_deadline
  submitted_at, decision_at
  notes, documents (jsonb)
  created_at, updated_at
)

application_documents (
  id, application_id
  document_type (transcript/essay/recommendation/resume)
  file_url, file_name, file_size
  uploaded_at
)
```

**기능**
- 지원서 작성 및 저장
- 서류 업로드 (Supabase Storage)
- 진행 상황 추적
- 이메일 알림

---

### Phase 3: 커뮤니티 및 콘텐츠 (5-6주)
**기간**: 2026-03-01 ~ 2026-04-15

#### 3.1 커뮤니티 포럼
- 질문 게시판
- 합격 후기
- 지역별 모임
- 멘토링 매칭

#### 3.2 콘텐츠 관리 시스템
- 유학 가이드 아티클
- 비자 정보
- 생활 정보
- 인터뷰 준비

#### 3.3 비디오 콘텐츠
- 유학생 인터뷰
- 대학 투어
- 전공 소개
- 입시 팁

---

### Phase 4: 고급 기능 (6-8주)
**기간**: 2026-04-16 ~ 2026-06-15

#### 4.1 AI 챗봇
- OpenAI API 연동
- 유학 관련 질의응답
- 대학 추천
- 에세이 피드백 (베타)

#### 4.2 상담 예약 시스템
- 전문 상담사 프로필
- 실시간 예약 캘린더
- 화상 상담 연동 (Zoom API)
- 결제 시스템 (Stripe)

#### 4.3 문서 관리 고도화
- PDF 뷰어 내장
- 주석 및 하이라이트
- 버전 관리
- 공유 기능

#### 4.4 데이터 분석 대시보드
- 지원 성공률 통계
- 인기 대학/전공 트렌드
- 사용자 행동 분석
- A/B 테스트 플랫폼

---

### Phase 5: 엔터프라이즈 기능 (8-12주)
**기간**: 2026-06-16 ~ 2026-09-15

#### 5.1 관리자 포털
- 사용자 관리
- 콘텐츠 관리
- 통계 및 리포팅
- 권한 관리

#### 5.2 파트너 시스템
- 대학 파트너 대시보드
- 유학원 파트너 시스템
- API 제공 (파트너용)
- 수익 공유 시스템

#### 5.3 모바일 앱
- React Native
- 푸시 알림
- 오프라인 모드
- 위치 기반 서비스

---

## 🛠 기술 스택 확장 계획

### 현재 (Phase 1)
- Frontend: React 18, TypeScript, Vite, Tailwind CSS
- Backend: Supabase (Auth, Database, Storage)
- State: TanStack Query, React Context
- Testing: Vitest, React Testing Library

### 추가 예정

#### Phase 2
- **검색**: Algolia 또는 Elasticsearch
- **이미지**: Cloudinary (이미지 최적화)
- **지도**: Google Maps API
- **차트**: Recharts, D3.js

#### Phase 3
- **실시간**: Supabase Realtime (채팅, 알림)
- **이메일**: SendGrid
- **CMS**: Sanity.io 또는 Strapi

#### Phase 4
- **AI**: OpenAI API, Langchain
- **화상**: Zoom API 또는 Twilio Video
- **결제**: Stripe
- **분석**: Mixpanel, Amplitude

#### Phase 5
- **모니터링**: Sentry, Datadog
- **CDN**: Cloudflare
- **CI/CD**: GitHub Actions
- **모바일**: React Native

---

## 📊 주요 메트릭 및 KPI

### 사용자 메트릭
- 회원 가입 수
- 월간 활성 사용자 (MAU)
- 프로필 완성률
- 평균 세션 시간

### 서비스 메트릭
- 대학 정보 조회 수
- 장학금 검색 수
- 매칭 정확도
- 지원서 제출 수

### 비즈니스 메트릭
- 전환율 (가입 → 유료)
- 고객 생애 가치 (LTV)
- 이탈률
- 추천 지수 (NPS)

---

## 🎨 디자인 시스템 개선

### 단기
- [ ] 컴포넌트 Storybook 구축
- [ ] 디자인 토큰 정리
- [ ] 애니메이션 라이브러리 (Framer Motion)
- [ ] 아이콘 시스템 통일

### 중기
- [ ] 다크 모드 지원
- [ ] 접근성 (WCAG 2.1 AA) 준수
- [ ] 반응형 개선 (태블릿 최적화)
- [ ] 프린트 스타일시트

---

## 🔐 보안 강화 계획

### 즉시 (Phase 2)
- [x] Rate limiting (API Gateway)
- [ ] CAPTCHA (회원가입, 로그인)
- [ ] 이메일 확인 강제화
- [ ] 세션 타임아웃

### 단기 (Phase 3)
- [ ] 2FA/MFA 구현
- [ ] 감사 로그 (Audit Trail)
- [ ] 정기 보안 스캔 (Snyk)
- [ ] 침투 테스트

### 중기 (Phase 4)
- [ ] WAF (Web Application Firewall)
- [ ] DDoS 방어
- [ ] 데이터 암호화 강화
- [ ] 정기 백업 자동화

---

## 🧪 테스트 전략

### Phase 2
- **Unit Tests**: 80% 커버리지 목표
- **Integration Tests**: API 엔드포인트
- **E2E Tests**: Playwright (주요 플로우)

### Phase 3
- **Performance Tests**: Lighthouse CI
- **Accessibility Tests**: axe-core
- **Visual Regression**: Percy

### Phase 4
- **Load Tests**: k6
- **Security Tests**: OWASP ZAP
- **Chaos Engineering**: 서버 장애 시뮬레이션

---

## 📱 마케팅 및 출시 계획

### Soft Launch (Phase 2 완료 후)
- **타겟**: 한국 대학생 100명 베타 테스터
- **기간**: 2주
- **목표**: 피드백 수집, 버그 수정

### Public Beta (Phase 3 완료 후)
- **타겟**: 한국, 중국, 베트남 학생
- **마케팅**: SNS, 유학 커뮤니티, 블로그
- **목표**: 1,000명 사용자

### Official Launch (Phase 4 완료 후)
- **타겟**: 글로벌 (13개 언어)
- **마케팅**: SEO, 유료 광고, 파트너십
- **목표**: 10,000명 사용자

---

## 💰 수익화 전략

### 무료 서비스
- 기본 대학 정보 검색
- 장학금 정보
- 커뮤니티 포럼

### 프리미엄 서비스 (Phase 4)
- AI 맞춤 추천
- 무제한 지원서 관리
- 전문가 상담 (유료)
- 에세이 첨삭 서비스

### B2B 서비스 (Phase 5)
- 대학 파트너십 (학생 모집)
- 유학원 대시보드
- API 접근권

---

## 🎯 성공 지표

### 3개월 후 (Phase 2 완료)
- [ ] 1,000명 가입자
- [ ] 500개 대학 정보
- [ ] 50개 장학금 정보
- [ ] 80% 프로필 완성률

### 6개월 후 (Phase 3 완료)
- [ ] 10,000명 가입자
- [ ] 1,000개 대학 정보
- [ ] 200개 장학금 정보
- [ ] 커뮤니티 월 1,000건 게시물

### 12개월 후 (Phase 5 완료)
- [ ] 100,000명 가입자
- [ ] 전체 미국 대학 데이터
- [ ] 1,000개 장학금 정보
- [ ] 10개 파트너 대학
- [ ] 흑자 전환

---

## 🚀 즉시 실행 항목

### 이번 주 (2026-01-17 ~ 2026-01-23)
1. [x] Playwright E2E 테스트 구축
2. [ ] 대학 데이터베이스 스키마 설계
3. [ ] 대학 정보 크롤링 스크립트 작성
4. [ ] API 엔드포인트 설계

### 다음 주 (2026-01-24 ~ 2026-01-31)
1. [ ] 대학 목록 페이지 UI
2. [ ] 검색 필터 구현
3. [ ] 대학 상세 페이지
4. [ ] 즐겨찾기 기능

---

**문서 버전**: 1.0  
**최종 업데이트**: 2026-01-16  
**다음 리뷰**: 2026-02-15
