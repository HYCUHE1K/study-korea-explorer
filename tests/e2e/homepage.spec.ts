import { test, expect } from '@playwright/test';

/**
 * 홈페이지 기본 테스트
 */
test.describe('홈페이지', () => {
  test('페이지가 정상적으로 로드된다', async ({ page }) => {
    await page.goto('/');
    
    // 페이지 제목 확인
    await expect(page).toHaveTitle(/StudyExplorer|Go Almond/i);
    
    // 로고 확인
    const logo = page.locator('text=🌰');
    await expect(logo).toBeVisible();
  });

  test('언어 전환이 작동한다', async ({ page }) => {
    await page.goto('/');
    
    // 언어 선택 드롭다운 클릭
    const languageSwitcher = page.locator('button:has-text("English"), button:has-text("한국어")').first();
    await languageSwitcher.click();
    
    // 한국어 선택
    const koreanOption = page.locator('text=한국어').first();
    await koreanOption.click();
    
    // 한국어로 변경되었는지 확인 (페이지에 한글이 표시되어야 함)
    await expect(page.locator('body')).toContainText('미국');
  });

  test('주요 섹션이 표시된다', async ({ page }) => {
    await page.goto('/');
    
    // Hero Section
    await expect(page.locator('text=/유학|Study/i').first()).toBeVisible();
    
    // Header 네비게이션
    await expect(page.locator('header')).toBeVisible();
    
    // Footer
    await expect(page.locator('footer')).toBeVisible();
  });

  test('스크롤이 정상 작동한다', async ({ page }) => {
    await page.goto('/');
    
    // 페이지 하단으로 스크롤
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Footer가 보이는지 확인
    await expect(page.locator('footer')).toBeInViewport();
  });
});
