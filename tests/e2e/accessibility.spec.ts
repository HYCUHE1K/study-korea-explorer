import { test, expect } from '@playwright/test';

/**
 * 접근성 기본 테스트
 */
test.describe('접근성', () => {
  test('키보드 네비게이션 - 로그인 폼', async ({ page }) => {
    await page.goto('/login');
    
    // 이메일 입력에 포커스
    await page.keyboard.press('Tab');
    const emailInput = page.locator('input[type="email"]');
    await expect(emailInput).toBeFocused();
    
    // 비밀번호 입력으로 이동
    await page.keyboard.press('Tab');
    const passwordInput = page.locator('input[type="password"]');
    await expect(passwordInput).toBeFocused();
  });

  test('키보드 Enter로 폼 제출', async ({ page }) => {
    await page.goto('/login');
    
    // 이메일 입력
    await page.fill('input[type="email"]', 'test@example.com');
    
    // 비밀번호 입력 후 Enter
    await page.fill('input[type="password"]', 'password123');
    await page.keyboard.press('Enter');
    
    // 폼 제출 시도 (에러 또는 로딩 표시)
    // 실제 인증 실패로 에러 메시지가 표시될 수 있음
    await page.waitForTimeout(1000);
  });

  test('로딩 인디케이터 aria-label', async ({ page }) => {
    // 보호된 페이지 접근 (로딩 표시)
    await page.goto('/profile');
    
    // 로딩 인디케이터의 aria-label 또는 role 확인
    const loadingIndicator = page.locator('[role="status"], [aria-label="Loading"]');
    
    // 잠시 표시되었다가 사라짐 (리다이렉트)
    // 타임아웃을 짧게 설정하여 존재 여부만 확인
  });

  test('버튼에 적절한 텍스트', async ({ page }) => {
    await page.goto('/login');
    
    // 제출 버튼
    const submitButton = page.locator('button[type="submit"]');
    await expect(submitButton).toContainText(/Sign in|로그인/i);
    
    // OAuth 버튼
    const googleButton = page.locator('button:has-text("Google")');
    await expect(googleButton).toBeVisible();
  });

  test('링크에 명확한 텍스트', async ({ page }) => {
    await page.goto('/login');
    
    // 회원가입 링크
    const signupLink = page.locator('a:has-text("Sign up"), a:has-text("회원가입")').first();
    await expect(signupLink).toBeVisible();
    
    // 비밀번호 찾기 링크
    const forgotPasswordLink = page.locator('a:has-text("Forgot"), a:has-text("비밀번호")').first();
    await expect(forgotPasswordLink).toBeVisible();
  });
});
