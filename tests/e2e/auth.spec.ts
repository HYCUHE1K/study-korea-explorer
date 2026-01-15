import { test, expect } from '@playwright/test';

/**
 * 인증 플로우 E2E 테스트
 */
test.describe('인증 시스템', () => {
  test('로그인 페이지 접근', async ({ page }) => {
    await page.goto('/login');
    
    // 로그인 폼 확인
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
    
    // OAuth 버튼 확인
    await expect(page.locator('button:has-text("Continue with Google")')).toBeVisible();
    await expect(page.locator('button:has-text("Continue with Github")')).toBeVisible();
    
    // 회원가입 링크 확인
    await expect(page.locator('text=/Sign up|회원가입/i')).toBeVisible();
  });

  test('회원가입 페이지 접근', async ({ page }) => {
    await page.goto('/signup');
    
    // 회원가입 폼 확인
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]').first()).toBeVisible();
    
    // 비밀번호 확인 필드
    const passwordInputs = page.locator('input[type="password"]');
    await expect(passwordInputs).toHaveCount(2);
    
    // OAuth 버튼 확인
    await expect(page.locator('button:has-text("Continue with Google")')).toBeVisible();
  });

  test('이메일 유효성 검사', async ({ page }) => {
    await page.goto('/login');
    
    // 잘못된 이메일 입력
    await page.fill('input[type="email"]', 'invalid-email');
    await page.fill('input[type="password"]', 'password123');
    await page.click('button[type="submit"]');
    
    // 에러 메시지 확인
    await expect(page.locator('text=/Invalid email|이메일/i')).toBeVisible({ timeout: 3000 });
  });

  test('비밀번호 표시/숨김 토글', async ({ page }) => {
    await page.goto('/login');
    
    const passwordInput = page.locator('input[type="password"]').first();
    
    // 초기 상태는 password type
    await expect(passwordInput).toHaveAttribute('type', 'password');
    
    // 토글 버튼 클릭
    const toggleButton = page.locator('button[aria-label*="password"], button:has(svg)').last();
    await toggleButton.click();
    
    // text type으로 변경됨
    await expect(passwordInput).toHaveAttribute('type', 'text');
  });

  test('보호된 페이지 접근 시 로그인 페이지로 리다이렉트', async ({ page }) => {
    // 로그인하지 않고 프로필 페이지 접근 시도
    await page.goto('/profile');
    
    // 로그인 페이지로 리다이렉트됨
    await expect(page).toHaveURL('/login');
  });

  test('회원가입 폼 검증', async ({ page }) => {
    await page.goto('/signup');
    
    // 이메일 입력
    await page.fill('input[type="email"]', 'test@example.com');
    
    // 약한 비밀번호 입력
    await page.fill('input[type="password"]').nth(0).fill('weak');
    await page.fill('input[type="password"]').nth(1).fill('weak');
    
    // 제출 버튼 클릭
    await page.click('button[type="submit"]');
    
    // 비밀번호 강도 에러 메시지 확인
    await expect(page.locator('text=/at least 8 characters|8자 이상/i')).toBeVisible({ timeout: 3000 });
  });
});
