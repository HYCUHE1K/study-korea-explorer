# Supabase 설정 가이드

## 1. Supabase 프로젝트 생성

1. [Supabase](https://supabase.com) 웹사이트 접속
2. "Start your project" 클릭
3. 새 프로젝트 생성:
   - Organization: 기존 조직 선택 또는 새로 생성
   - Name: `studyexplorer` (또는 원하는 이름)
   - Database Password: 강력한 비밀번호 설정 (저장 필수!)
   - Region: Northeast Asia (Seoul) 또는 가까운 지역 선택
4. "Create new project" 클릭 (프로젝트 생성에 1-2분 소요)

## 2. 환경 변수 설정

프로젝트 생성 후 Settings > API에서 다음 정보를 복사하여 `.env` 파일에 추가:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-public-key
```

### 현재 프로젝트 ID
프로젝트 ID: `sbhdxktqkcnovyoujjuo`

`.env` 파일 예시:
```env
VITE_SUPABASE_URL=https://sbhdxktqkcnovyoujjuo.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 3. 데이터베이스 마이그레이션 실행 ⭐ 중요!

### ✅ Supabase Dashboard 사용 (추천 - 가장 간단!)

1. **Supabase Dashboard 접속**: https://supabase.com/dashboard/project/sbhdxktqkcnovyoujjuo
2. 왼쪽 메뉴에서 **SQL Editor** 클릭
3. "New query" 버튼 클릭
4. 프로젝트의 `supabase/migrations/20260116000000_create_profiles.sql` 파일 열기
5. 전체 SQL 코드 복사 (약 70줄)
6. SQL Editor에 붙여넣기
7. **"Run"** 또는 **Ctrl+Enter** 눌러 실행
8. 성공 메시지 확인: "Success. No rows returned"

### 대안: Supabase CLI 사용 (선택사항)

> **주의**: Node.js v20.17+ 또는 v22.9+ 필요. 현재 Node v18.19.1은 지원 안 됨.

#### 방법 1: sudo로 설치
```bash
sudo npm install -g supabase
```

#### 방법 2: npx로 실행 (설치 없이)
```bash
# 프로젝트 링크
npx supabase link --project-ref sbhdxktqkcnovyoujjuo

# 마이그레이션 실행
npx supabase db push
```

#### 방법 3: Node.js 업그레이드 (고급)
```bash
# nvm이 설치되어 있는 경우에만
nvm install 22
nvm use 22
npm install -g supabase

# nvm이 없는 경우: NodeSource에서 설치 (Ubuntu/Debian)
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install -g supabase
```

**💡 권장**: 복잡한 설치 과정은 건너뛰고 **Dashboard만 사용하세요!** CLI 없이도 모든 작업이 가능합니다.

### 마이그레이션 내용 확인
- ✅ `profiles` 테이블 생성
- ✅ RLS (Row Level Security) 정책 설정
- ✅ 자동 프로필 생성 트리거 설정

**확인 방법**: 
- Dashboard → Database → Tables에서 `profiles` 테이블 확인
- 컬럼: id, email, full_name, phone, date_of_birth, nationality 등

## 4. OAuth 제공자 설정 (Google & Github)

### Google OAuth 설정

1. **Google Cloud Console 설정**
   - [Google Cloud Console](https://console.cloud.google.com/) 접속
   - 새 프로젝트 생성 또는 기존 프로젝트 선택
   - "APIs & Services" → "Credentials" 이동
   - "Create Credentials" → "OAuth 2.0 Client ID" 선택
   - Application type: Web application
   - Authorized redirect URIs 추가:
     ```
     https://sbhdxktqkcnovyoujjuo.supabase.co/auth/v1/callback
     ```
   - Client ID와 Client Secret 복사

2. **Supabase에 Google OAuth 설정**
   - Supabase Dashboard → Authentication → Providers
   - "Google" 선택하여 활성화
   - Google Client ID 입력
   - Google Client Secret 입력
   - "Save" 클릭

### Github OAuth 설정

1. **Github OAuth App 생성**
   - Github → Settings → Developer settings → OAuth Apps
   - "New OAuth App" 클릭
   - Application name: `StudyExplorer`
   - Homepage URL: `http://localhost:8080` (개발용) 또는 실제 도메인
   - Authorization callback URL:
     ```
     https://sbhdxktqkcnovyoujjuo.supabase.co/auth/v1/callback
     ```
   - "Register application" 클릭
   - Client ID와 Client Secret 복사

2. **Supabase에 Github OAuth 설정**
   - Supabase Dashboard → Authentication → Providers
   - "GitHub" 선택하여 활성화
   - GitHub Client ID 입력
   - GitHub Client Secret 입력
   - "Save" 클릭

## 5. 이메일 인증 설정

### 개발 환경
- Supabase Dashboard → Authentication → Email Templates
- 기본 템플릿이 자동으로 설정되어 있습니다
- 개발 중에는 Supabase에서 제공하는 무료 이메일 서비스 사용

### 프로덕션 환경
- SMTP 설정 필요 (SendGrid, AWS SES 등)
- Dashboard → Project Settings → Auth → SMTP Settings

## 6. 로컬 개발 서버 실행

```bash
# 패키지 설치 (아직 안 한 경우)
npm install
# 또는
bun install

# 개발 서버 실행
npm run dev
# 또는
bun run dev
```

서버 실행 후 http://localhost:8080 접속

## 7. 기능 테스트

### 1) 회원가입 테스트
- `/signup` 페이지 접속
- 이메일과 비밀번호로 회원가입
- 이메일 확인 링크 클릭 (받은편지함 확인)

### 2) OAuth 로그인 테스트
- `/login` 페이지 접속
- "Continue with Google" 또는 "Continue with Github" 클릭
- 권한 승인 후 자동 로그인 확인

### 3) 프로필 테스트
- 로그인 후 Header의 사용자 메뉴 클릭
- "My Profile" 선택
- 유학 정보 입력 후 저장
- Supabase Dashboard → Table Editor → profiles에서 데이터 확인

## 8. 보안 설정 확인

### RLS (Row Level Security) 확인
Supabase Dashboard → Database → Tables → profiles

- ✅ "Enable RLS" 활성화 상태 확인
- ✅ Policies 3개 설정 확인:
  - Users can view own profile
  - Users can update own profile
  - Users can insert own profile

### URL 설정 확인
Dashboard → Authentication → URL Configuration

- Site URL: `http://localhost:8080` (개발) / 실제 도메인 (프로덕션)
- Redirect URLs에 다음 추가:
  ```
  http://localhost:8080/**
  https://your-production-domain.com/**
  ```

## 9. 문제 해결

### "Invalid API Key" 오류
- `.env` 파일의 `VITE_SUPABASE_PUBLISHABLE_KEY` 확인
- 개발 서버 재시작 필요 (환경 변수 변경 시)

### OAuth 로그인 실패
- OAuth Provider의 Redirect URI 확인
- Supabase Dashboard에서 Provider 활성화 상태 확인

### 이메일 미수신
- 스팸/프로모션 폴더 확인
- Supabase Dashboard → Authentication → Users에서 사용자 상태 확인
- 개발 중에는 "Auto Confirm" 옵션 활성화 가능

### 데이터베이스 연결 오류
- `VITE_SUPABASE_URL` 형식 확인 (https://로 시작)
- 프로젝트 ID 확인
- 네트워크 연결 확인

## 10. 다음 단계

- [ ] 프로덕션 도메인 설정
- [ ] 커스텀 이메일 템플릿 구성
- [ ] SMTP 설정 (프로덕션)
- [ ] MFA/2FA 활성화 테스트
- [ ] 에러 모니터링 설정
- [ ] 백업 정책 설정

## 참고 자료

- [Supabase 공식 문서](https://supabase.com/docs)
- [Supabase Auth 가이드](https://supabase.com/docs/guides/auth)
- [Google OAuth 설정](https://supabase.com/docs/guides/auth/social-login/auth-google)
- [Github OAuth 설정](https://supabase.com/docs/guides/auth/social-login/auth-github)
- [RLS 정책 작성 가이드](https://supabase.com/docs/guides/auth/row-level-security)
