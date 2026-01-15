import { test, expect } from '@playwright/test';

/**
 * 네비게이션 테스트
 */
test.describe('네비게이션', () => {
  test('404 페이지 표시', async ({ page }) => {
    await page.goto('/non-existent-page');
    
    // Not Found 메시지 확인
    await expect(page.locator('text=/404|Not Found/i')).toBeVisible();
    
    // 홈으로 돌아가기 링크
    await expect(page.locator('a[href="/"]')).toBeVisible();
  });

  test('Header 네비게이션 링크', async ({ page }) => {
    await page.goto('/');
    
    // Header에서 로그인 링크 클릭
    const loginLink = page.locator('header').locator('a[href="/login"], button:has-text("Login")').first();
    await loginLink.click();
    
    // 로그인 페이지로 이동
    await expect(page).toHaveURL('/login');
  });

  test('로고 클릭 시 홈으로 이동', async ({ page }) => {
    await page.goto('/login');
    
    // 로고 또는 사이트 이름 클릭
    const logo = page.locator('a:has-text("Go"), a:has-text("🌰")').first();
    await logo.click();
    
    // 홈페이지로 이동
    await expect(page).toHaveURL('/');
  });

  test('브라우저 뒤로가기 작동', async ({ page }) => {
    await page.goto('/');
    await page.goto('/login');
    
    // 뒤로가기
    await page.goBack();
    
    // 홈페이지로 돌아옴
    await expect(page).toHaveURL('/');
  });
});
