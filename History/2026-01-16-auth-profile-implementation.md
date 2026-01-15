# 인증 및 프로필 기능 구현

**날짜**: 2026-01-16  
**브랜치**: feature/auth-and-profile  
**작업자**: AI Agent

## 요구사항

### 1. 회원가입 기능
- Google 계정으로 회원가입 (OAuth)
- Github 계정으로 회원가입 (OAuth)
- 이메일로 회원가입
- 2FA (Two-Factor Authentication) 인증 기능

### 2. 로그인/로그아웃 기능
- 이메일/비밀번호 로그인
- OAuth 로그인 (Google, Github)
- 로그아웃 기능
- 비밀번호 변경 기능

### 3. 사용자 프로필
- 유학 서비스를 위한 사용자 프로필 페이지
- 프로필 정보 수정 기능

## 기술 스택

- **인증**: Supabase Auth
  - OAuth (Google, Github) 지원
  - 이메일/비밀번호 인증
  - Multi-Factor Authentication (MFA/2FA) 지원
- **상태 관리**: React Context + TanStack Query
- **UI**: shadcn/ui components
- **폼 검증**: react-hook-form + zod

## 데이터베이스 스키마

### profiles 테이블
```sql
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  full_name text,
  avatar_url text,
  phone text,
  date_of_birth date,
  nationality text,
  current_education_level text,
  target_degree text,
  field_of_interest text,
  preferred_location text,
  budget_range text,
  english_proficiency text,
  gpa numeric(3,2),
  test_scores jsonb, -- TOEFL, IELTS, SAT, GRE 등
  study_timeline text,
  additional_info text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS 정책
alter table profiles enable row level security;

create policy "Users can view own profile"
  on profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on profiles for update
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on profiles for insert
  with check (auth.uid() = id);

-- 트리거 (updated_at 자동 업데이트)
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_profiles_updated_at
  before update on profiles
  for each row
  execute procedure update_updated_at_column();
```

## 구현 내용

### 파일 구조
```
src/
  contexts/
    AuthContext.tsx        # 인증 컨텍스트
  hooks/
    useAuth.ts            # 인증 훅
  pages/
    Login.tsx             # 로그인 페이지
    Signup.tsx            # 회원가입 페이지
    Profile.tsx           # 프로필 페이지
    ChangePassword.tsx    # 비밀번호 변경 페이지
  components/
    auth/
      LoginForm.tsx       # 로그인 폼
      SignupForm.tsx      # 회원가입 폼
      OAuthButtons.tsx    # OAuth 버튼
      MFASetup.tsx        # 2FA 설정
    profile/
      ProfileForm.tsx     # 프로필 폼
      ProfileView.tsx     # 프로필 보기
```

### 주요 기능

1. **AuthContext**: 전역 인증 상태 관리
2. **Protected Routes**: 인증된 사용자만 접근 가능한 라우트
3. **OAuth Integration**: Supabase를 통한 Google, Github 로그인
4. **2FA/MFA**: Supabase Auth의 MFA 기능 활용
5. **프로필 관리**: 유학 관련 정보 저장 및 수정

## 보안 고려사항

- 비밀번호는 Supabase Auth에서 자동으로 해시 처리
- RLS (Row Level Security) 정책으로 데이터 접근 제어
- HTTPS only (production)
- CSRF 보호: Supabase Auth가 자동 처리
- XSS 방지: React의 기본 이스케이프 처리
- 세션 관리: HttpOnly 쿠키 사용 (Supabase 기본 설정)

## 참고 자료

- Supabase Auth Documentation: https://supabase.com/docs/guides/auth
- Supabase MFA: https://supabase.com/docs/guides/auth/auth-mfa
- React Hook Form: https://react-hook-form.com/
- Zod Validation: https://zod.dev/

## 테스트 계획

- [ ] 이메일 회원가입 테스트
- [ ] OAuth 로그인 테스트 (Google, Github)
- [ ] 2FA 설정 및 검증 테스트
- [ ] 로그인/로그아웃 플로우 테스트
- [ ] 프로필 생성/수정 테스트
- [ ] 비밀번호 변경 테스트
- [ ] Protected routes 접근 제어 테스트
