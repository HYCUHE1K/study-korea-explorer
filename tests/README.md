# 테스트 가이드

## 테스트 구조

```
tests/
├── e2e/                    # Playwright E2E 테스트
│   ├── homepage.spec.ts    # 홈페이지 테스트
│   ├── auth.spec.ts        # 인증 플로우 테스트
│   ├── navigation.spec.ts  # 네비게이션 테스트
│   └── accessibility.spec.ts # 접근성 테스트
└── README.md               # 이 파일

src/test/                   # Vitest 단위 테스트
├── Login.test.tsx
├── Signup.test.tsx
└── ProtectedRoute.test.tsx
```

## 실행 방법

### Unit Tests (Vitest)
```bash
# 단위 테스트 실행
npm run test

# Watch 모드
npm run test:watch
```

### E2E Tests (Playwright)

#### 첫 실행 전 브라우저 설치
```bash
npm run playwright:install
```

#### 테스트 실행
```bash
# 기본 실행 (headless)
npm run test:e2e

# UI 모드 (시각적 인터페이스)
npm run test:e2e:ui

# Headed 모드 (브라우저 창 표시)
npm run test:e2e:headed

# Debug 모드
npm run test:e2e:debug
```

#### 특정 테스트만 실행
```bash
# 특정 파일
npx playwright test homepage.spec.ts

# 특정 브라우저
npx playwright test --project=chromium

# 특정 테스트 (grep)
npx playwright test -g "로그인"
```

## 테스트 작성 가이드

### E2E 테스트 예시

```typescript
import { test, expect } from '@playwright/test';

test('페이지 제목 확인', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/StudyExplorer/);
});

test('버튼 클릭', async ({ page }) => {
  await page.goto('/');
  await page.click('button:has-text("Login")');
  await expect(page).toHaveURL('/login');
});
```

### Unit 테스트 예시

```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

## 테스트 범위

### ✅ 현재 커버리지

#### E2E Tests
- **홈페이지**: 로딩, 언어 전환, 섹션 표시
- **인증**: 로그인/회원가입 폼, OAuth 버튼, 유효성 검사
- **네비게이션**: 404 페이지, 라우팅, 뒤로가기
- **접근성**: 키보드 네비게이션, ARIA 레이블

#### Unit Tests
- **Login 컴포넌트**: 폼 렌더링, 검증
- **Signup 컴포넌트**: 비밀번호 정책
- **ProtectedRoute**: 인증 체크, 리다이렉트

### 📋 향후 추가 예정

- [ ] 프로필 페이지 E2E 테스트
- [ ] 파일 업로드 테스트
- [ ] API 모킹 테스트
- [ ] 다국어 테스트 (13개 언어)
- [ ] 모바일 반응형 테스트
- [ ] 성능 테스트 (Lighthouse)
- [ ] 시각적 회귀 테스트

## CI/CD 통합

GitHub Actions에서 자동으로 실행됩니다:
- PR 생성 시
- main 브랜치 push 시
- feature/* 브랜치 push 시

실패 시 스크린샷과 비디오가 Artifacts에 업로드됩니다.

## 디버깅

### Playwright
```bash
# Inspector로 단계별 실행
npm run test:e2e:debug

# 특정 테스트만 디버그
npx playwright test auth.spec.ts --debug

# Trace 뷰어
npx playwright show-report
```

### Vitest
```bash
# UI 모드
npx vitest --ui

# 커버리지
npx vitest --coverage
```

## 모범 사례

### DO ✅
- 독립적인 테스트 작성 (각 테스트는 독립 실행 가능)
- 명확한 테스트 이름 사용
- AAA 패턴: Arrange, Act, Assert
- `data-testid` 사용보다 사용자 중심 선택자 사용
- 실패 시 유용한 에러 메시지 제공

### DON'T ❌
- 테스트 간 의존성 생성
- 하드코딩된 타임아웃 남용
- 실제 외부 API 호출 (모킹 사용)
- 너무 구체적인 CSS 선택자 의존
- 프로덕션 데이터 사용

## 참고 자료

- [Playwright 공식 문서](https://playwright.dev/)
- [Vitest 공식 문서](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [접근성 테스트 가이드](https://www.w3.org/WAI/test-evaluate/)
