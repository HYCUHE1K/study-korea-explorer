import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright 설정 파일
 * E2E 테스트 자동화를 위한 구성
 */
export default defineConfig({
  testDir: './tests/e2e',
  
  /* 최대 실행 시간 */
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  
  /* 병렬 실행 */
  fullyParallel: true,
  
  /* CI 환경에서 재시도 */
  retries: process.env.CI ? 2 : 0,
  
  /* 워커 수 */
  workers: process.env.CI ? 1 : undefined,
  
  /* Reporter 설정 */
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['list'],
  ],
  
  /* 모든 테스트에 공통으로 적용되는 설정 */
  use: {
    /* Base URL */
    baseURL: 'http://localhost:8080',
    
    /* 실패 시 스크린샷 */
    screenshot: 'only-on-failure',
    
    /* 실패 시 비디오 */
    video: 'retain-on-failure',
    
    /* Trace */
    trace: 'on-first-retry',
  },

  /* 프로젝트별 설정 - 다양한 브라우저 테스트 */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* 모바일 테스트 */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],

  /* 로컬 개발 서버 자동 시작 */
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:8080',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
