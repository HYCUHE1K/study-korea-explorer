# Copilot Instructions for StudyExplorer

당신은 매우 뛰어난 추론 능력과 계획력을 가지고 있습니다. 이 중요한 지침을 사용하여 계획, 생각, 그리고 대응을 체계적으로 정리하십시오.

어떤 조치(도구 호출 *또는* 사용자에 대한 응답)를 취하기 전에, 다음에 대해 사전 예방적이고 체계적이며 독립적으로 계획하고 추론해야 합니다.

1) 논리적 종속성 및 제약 조건: 다음 요소를 기준으로 의도된 조치를 분석합니다.
중요도 순으로 충돌을 해결합니다.
1.1) 정책 기반 규칙, 필수 전제 조건 및 제약 조건
1.2) 작업 순서: 조치를 취해도 이후에 필요한 작업이 방해받지 않는지 확인합니다.
1.2.1) 사용자는 무작위 순서로 작업을 요청할 수 있지만, 작업의 성공적인 완료를 극대화하기 위해 작업 순서를 변경해야 할 수 있습니다.
1.3) 기타 전제 조건(필요한 정보 및/또는 작업).
1.4) 명시적인 사용자 제약 조건 또는 선호도.

2) 위험 평가: 조치를 취하면 어떤 결과가 발생합니까? 새로운 상태로 인해 향후 문제가 발생합니까?
2.1) 탐색 작업(예: 검색)의 경우, *선택적* 매개변수가 누락되는 것은 위험성이 낮습니다.
`규칙 1(논리적 종속성) 추론에 따라 계획의 이후 단계에 선택적 정보가 필요하다고 판단되는 경우를 제외하고는 사용자에게 묻는 것보다 사용 가능한 정보를 사용하여 도구를 호출하는 것을 선호합니다.

3) 귀추적 추론 및 가설 탐색: 각 단계에서 발생한 문제에 대한 가장 논리적이고 가능성 있는 이유를 파악합니다.
3.1) 즉각적이거나 명백한 원인을 넘어서 살펴보세요. 가장 가능성 있는 이유는 가장 간단하지 않을 수 있으며 더 깊은 추론이 필요할 수 있습니다.
3.2) 가설에는 추가 연구가 필요할 수 있습니다. 각 가설을 테스트하는 데 여러 단계가 필요할 수 있습니다.
3.3) 가능성을 기준으로 가설의 우선순위를 정하되, 가능성이 낮은 가설을 조기에 버리지 마세요. 가능성이 낮은 사건이 여전히 근본 원인일 수 있습니다.

4) 결과 평가 및 적응성: 이전 관찰로 인해 계획 변경이 필요합니까?
4.1) 초기 가설이 반증되면 수집된 정보를 기반으로 적극적으로 새로운 가설을 생성합니다.

5) 정보 가용성: 다음을 포함하여 적용 가능한 모든 정보 출처와 대체 정보를 통합합니다.
5.1) 사용 가능한 도구 및 기능 사용
5.2) 모든 정책, 규칙, 체크리스트 및 제약 조건
5.3) 이전 관찰 및 대화 기록
5.4) 사용자에게 질문을 통해서만 제공되는 정보

6) 정확성 및 근거: 추론이 각 진행 상황에 매우 정확하고 관련성이 있는지 확인합니다.
6.1) 언급할 때 정확한 적용 가능한 정보(정책 포함)를 인용하여 주장을 확인합니다.

7) 완전성: 모든 요구 사항, 제약 조건, 옵션 및 선호 사항이 계획에 완전히 통합되었는지 확인합니다.
7.1) 1번의 중요도 순서대로 충돌을 해결합니다.
7.2) 성급한 결론을 피합니다. 주어진 상황에 대해 여러 관련 옵션이 있을 수 있습니다
7.2.1) 옵션이 관련성이 있는지 확인하려면 5번의 모든 정보 출처를 근거로 추론하십시오.
7.2.2) 적용 가능한 옵션인지 여부를 알기 위해 사용자에게 문의해야 할 수도 있습니다. 확인 없이 적용할 수 없다고 가정하지 마십시오.
7.3) 5번의 적용 가능한 정보 출처를 검토하여 현재 상태와 관련된 정보를 확인하십시오.

8) 끈기와 인내: 위의 모든 근거가 소진될 때까지 포기하지 마십시오.
8.1) 시간이 걸리거나 사용자가 좌절한다고 해서 포기하지 마십시오.
8.2) 이러한 끈기는 지능적이어야 합니다. *일시적인* 오류(예: '다시 시도해 주세요')가 발생하는 경우 **명시적인 재시도 제한(예: 최대 x회 시도)에 도달하지 않는 한** 반드시 재시도해야 합니다. 이러한 제한에 도달하면 중지해야 합니다. *기타* 오류의 경우 전략이나 인수를 변경해야 하며, 실패한 동일한 호출을 반복해서는 안 됩니다

9) 반응을 억제하세요: 위의 모든 추론이 완료된 후에만 행동을 취하세요. 일단 행동을 취하면 되돌릴 수 없습니다

## Project Overview
A multilingual education portal for Korean students exploring US study opportunities. Built with React + TypeScript + Vite, featuring 13 language translations and shadcn/ui component system.

## Architecture

### Core Stack
- **Build**: Vite with SWC React plugin for fast compilation
- **Routing**: React Router v6 with catch-all route at `/*` → always add custom routes ABOVE this
- **State**: TanStack Query (v5) for server state
- **Styling**: Tailwind CSS with HSL-based CSS variables theme system
- **i18n**: i18next with browser language detection, persisted to localStorage
- **Backend**: Supabase (client configured with auto-refresh tokens)

### Key Patterns

**Component Structure**
- Pages in `src/pages/` (simple layout composition, minimal logic)
- Feature components in `src/components/[feature]/` (e.g., `home/`, `layout/`)
- Reusable UI in `src/components/ui/` (shadcn/ui primitives - DON'T modify these directly)

**Styling Convention**
- Use `cn()` utility from `@/lib/utils` to merge Tailwind classes
- Color palette uses CSS variables: `bg-primary`, `text-muted-foreground`, etc.
- Custom colors: `primary` (green), `green-light`, `cream`, `gold`, `sage` (check tailwind.config.ts)
- Default font: Noto Sans KR for Korean character support

**Internationalization**
- Translation keys follow hierarchical pattern: `"hero.title"`, `"header.nav.whyUSA"`
- New strings: add to ALL 13 locale files in `src/i18n/locales/` (en, ko, zh, ja, vi, mn, ar, hi, es, fr, de, ru, th)
- Access via `useTranslation()` hook: `const { t } = useTranslation();`
- Language switching via dropdown (`LanguageSwitcher` component) - persists to localStorage

**Import Aliases**
- `@/` maps to `src/` directory (configured in vite.config.ts)
- shadcn/ui components: `@/components/ui/[component]`
- Utilities: `@/lib/utils`, `@/hooks/[hook]`

## Development Workflows

**Run Commands**
```bash
bun run dev              # Dev server on port 8080 (host "::")
bun run build            # Production build
bun run build:dev        # Development build
bun run test             # Run tests once
bun run test:watch       # Watch mode
bun run preview          # Preview production build
```

**Testing Setup**
- Vitest with jsdom environment
- Setup file: `src/test/setup.ts`
- React Testing Library + jest-dom matchers
- Test pattern: `src/**/*.{test,spec}.{ts,tsx}`

**Adding shadcn/ui Components**
This project uses shadcn/ui. When adding new UI components, they should be installed via the shadcn CLI (not manually created). Components are configured via `components.json` with the "default" style and slate base color.

**Supabase Integration**
- Client is pre-configured in `src/integrations/supabase/client.ts`
- Import: `import { supabase } from "@/integrations/supabase/client"`
- Types auto-generated in `types.ts` (currently empty schema - no tables defined)
- Uses environment variables: `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`

## Component Guidelines

**Creating New Components**
1. Place in appropriate directory: `pages/`, `components/[feature]/`, or `components/ui/`
2. Use PascalCase for file and component names
3. Start with translation hook if displaying text: `const { t } = useTranslation();`
4. Import UI primitives from `@/components/ui/`

**Example Pattern**
```tsx
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-primary">{t("section.title")}</h1>
      <Button variant="outline">{t("section.action")}</Button>
    </div>
  );
};
```

## Project-Specific Context

**Brand Identity**
- Logo: Almond emoji (🌰) in primary green circle
- Name split: "Go" (primary color) + "Almond" (default text)
- Theme: Educational, approachable, green/nature-inspired palette

**Page Structure**
- Home page (`Index.tsx`) is composed of distinct section components:
  - HeroSection → SearchCards → StudySteps → HelpfulResources → VideoSection → NoticeSection → CommunitySection
- Header is sticky with language switcher and auth buttons (not yet functional)
- Footer at bottom of all pages

**Development Environment**
- Built for Lovable.dev platform (see README - includes lovable-tagger plugin in dev mode)
- Auto-committed to Git when edited via Lovable
- HMR overlay disabled in vite.config.ts

## Common Pitfalls

❌ **Don't** manually edit shadcn/ui components in `src/components/ui/` - regenerate via CLI instead  
❌ **Don't** forget to add route BEFORE the `*` catch-all in App.tsx  
❌ **Don't** add new translatable strings without updating all 13 locale files  
❌ **Don't** use absolute colors - use CSS variable-based Tailwind classes  
✅ **Do** use `cn()` to conditionally merge className strings  
✅ **Do** wrap components in Header/Footer for consistent layout  
✅ **Do** check existing home section components before creating new patterns


프로젝트를 생성할 때, 외부에서 가져온 코드, github에서 가져온 코드, 다른 AI 자동화 도구, Figma 디자인 등에 대해 리뷰한다.
인계 받은 프로젝트에 대한 의견을/개발계획을 만든다.
현재 코드 리뷰에 대한 보고서를 만든다
현재 프로젝트에 대해 디자인 리뷰를 한다
현재 상태 기반 개발 계획을 만든다.
개발환경 구축과 운영을 위한 가이드를 만든다. windows용, ubuntu용으로 각각 만든다.

I. AI도구 개발 기본 지침
개발 정책을 정한다 Policy

앞으로,
1. 개발 중 외부 기능을 쓸 경우, 알고리즘을(기능을) 구현할 경우, 참고자료 출처를 명시해줘
2. commit 메시지에 내용을 '충실하게' 써줘. 내가 알아볼 수 있게.
내가 요구한 내용 
네가 답한 내용
수정한 내용 요약
3. '중대한 변화'를 만들 때는 branch를 새로 만들고, History 폴더에 수정 내역을 문서화 해줘
신기능 구현
DB 구조 수정
UI 레이아웃 대규모 변경
4. 구현한 기능에 대한 테스트 코드를 함께 만들어줘
신기능 구현
DB 구조 수정
UI 레이아웃 대규모 변경

II. 개발자용 보안 코딩 가이드라인
목적: 한국 개인정보보호법 / ISMS-P 수준을 염두에 두고,
“코드 한 줄부터 안전하게” 개발하기 위한 최소 보안 수칙 모음

1. 인증 / 세션 / 토큰
1-1. 비밀번호 처리
[✅ 해야 할 것]
비밀번호는 반드시 해시(BCrypt 또는 Argon2) 후 저장
비밀번호는 로그, 예외 메시지, 디버그 출력에 절대 남기지 말 것
비밀번호 변경 / 재설정 시:
기존 비밀번호 검증 → 새 비밀번호 정책 검증 → 해시 저장

[❌ 하면 안 되는 것]
평문 비밀번호를 DB, 파일, 로그에 저장
비밀번호를 이메일/슬랙 등에 그대로 노출

1-2. 세션 / 토큰 관리
[✅ 해야 할 것]
JWT/세션 토큰은 HttpOnly + Secure + SameSite=Lax/Strict 쿠키로 전달
Refresh Token은 DB에 해시로 저장 (원본은 클라이언트만)

토큰 재발급 시:
기존 토큰 무효화(Revocation) 처리
새 토큰 발급 후, 응답 외 어디에도 토큰 기록 X

[❌ 하면 안 되는 것]
토큰을 localStorage에 저장하고, JS로 아무 데서나 읽어 쓰기
토큰 값을 로그에 출력 (console.log, 서버 로그 등)

2. 권한 / 접근 제어 (Authorization)
[✅ 해야 할 것]
항상 “현재 사용자(user_id, role)”를 기준으로 데이터 접근을 제한
WHERE owner_id = :user_id와 같은 조건 필수
관리자 기능 접근 시에도 role 검사 + Audit Log 기록

[❌ 하면 안 되는 것]
프론트에서 버튼 숨기는 것만으로 권한을 통제했다고 생각하기
“어차피 내부 서비스니까” 라고 API 권한 체크를 생략

3. 입력 검증 / 출력 인코딩
3-1. 입력 검증 (Validation)
[✅ 해야 할 것]
백엔드에서 모든 입력 검증 (프론트 검증은 편의 + UX일 뿐)
이메일, 전화번호, URL, 파일명 등은 정규식/라이브러리로 검증
페이지 번호, limit/offset, ID 등은 숫자 범위 제한

[❌ 하면 안 되는 것]
“프론트에서 이미 검사했다”는 이유로 검증 생략
사용자가 넣은 값 그대로 DB 쿼리/파일명/경로에 사용

3-2. XSS / 출력 인코딩

[✅ 해야 할 것]
HTML에 출력할 값: 반드시 escape/encode
리치 텍스트(사업계획서 내용 등)는 WYSIWYG 에디터의 허용 태그 화이트리스트 사용
JSON 응답에서는 JS 코드가 섞이지 않도록 구조화된 형식 유지

[❌ 하면 안 되는 것]
<div dangerouslySetInnerHTML={userInput}> 이런 스타일 무심코 사용
Markdown/HTML을 그대로 렌더링하면서 아무 필터도 안 거는 것

4. 암호화 / 시크릿 관리
4-1. 필드 암호화(Field-level Encryption)

[✅ 해야 할 것]
개인정보 / API Key / 민감 설정 값은 필드 단위로 암호화 후 저장
예: 이름, 이메일, 전화번호, 외부 LLM API Key 등
암호화 키는:
코드/레포에 하드코딩 ❌
환경변수 + Secret Manager/Vault에서 불러오기
암호화 알고리즘:
AES-256-GCM + 무결성 검사(HMAC 등)

[❌ 하면 안 되는 것]
const SECRET_KEY = "abcd1234"... 이런 코드 쓰기
개발 편하다고 평문으로 DB에 넣어두고, “나중에 바꾸자”라고 미루기

4-2. 시크릿 / 설정값
[✅ 해야 할 것]
DB 비밀번호, API Key, 토큰 등은:
.env → 로컬 개발용
운영 환경 → Secret Manager/Vault 사용
Git에는 .env, 시크릿 파일 절대 커밋 금지
CI에 secret leakage 스캐너(gitleaks 등) 추가

[❌ 하면 안 되는 것]
Slack/이메일에 API Key, DB 접속정보 막 던지기
“테스트니까…” 하면서 운영 계정/비밀번호를 공유 채널에 올리기

5. 로그 / 예외 처리
[✅ 해야 할 것]

로그에는 최소 정보만:
user_id, action, resource_id, timestamp, IP 정도

에러 메시지:
사용자에게는 일반적인 메시지만 (“오류가 발생했습니다. 다시 시도해주세요”)
상세 스택트레이스는 내부 로그에만
개인정보 / 토큰 / 비밀번호 / API Key는 로그에 절대 기록하지 말 것

[❌ 하면 안 되는 것]
console.log("login error", req.body) 같이 통째로 찍기
500 에러 화면에 DB 에러 메시지, SQL, 파일 경로 그대로 노출

6. 파일 업로드 / 다운로드

[✅ 해야 할 것]
허용 확장자/용량 명시:
업로드 문서 파일: PDF only, 크기/페이지 제한
참고자료: pdf/mp4/jpg 등 화이트리스트
MIME 타입 + Magic number(파일 헤더) 검증
업로드된 파일은 웹 루트 밖에 저장, 접근은 signed URL/전용 API로 제공
PDF/문서에 워터마크 + 권한 검증 후 제공
업로드 한 파일에 대한 보안 검사, 바이러스/맬웨어 검사

[❌ 하면 안 되는 것]
사용자가 올린 파일을 /uploads/파일명 으로 바로 공개
파일명 그대로 사용해서 저장 (../../../ 경로 공격 위험)

7. AI / LLM 연동 시 주의사항

[✅ 해야 할 것]
LLM으로 보낼 때:
이름, 이메일, 연락처 등 PII는 마스킹하거나 제거
필요 없는 원문 전체 대신 요약/발췌본만 보내는 것을 우선 고려
LLM 요청/응답 로그:
문서 ID, 요약 내용만 저장 (원문 텍스트 그대로 장기 보관 X)
“데이터 학습에 사용하지 않는다” 옵션/정책 확인 후 사용

[❌ 하면 안 되는 것]
입력한 원문 + 개인정보  + 사용자의 intent 등을 그대로 Prompt에 통째로 붙이기
Prompt/Response 원문을 별도 마스킹 없이 그대로 오래 보관

8. 프론트엔드 보안 기본 수칙

[✅ 해야 할 것]
모든 민감 데이터는 백엔드에서 검증/필터링 후 전달
로컬스토리지에는 가능한 한 민감정보/토큰 저장 금지

CSRF 방어:
SameSite 쿠키 + CSRF 토큰 or Double Submit Token 패턴 사용
API 호출 시:
항상 인증 토큰/쿠키 포함 여부 및 HTTPS 여부 확인

[❌ 하면 안 되는 것]
“어차피 내부 API니까…” 라며, 프론트에서만 권한 제어하고 백엔드에서 체크 안함
민감한 정보(예: 투자자 프로필 상세)를 프론트 상태 관리에 평문으로 오래 유지

9. 관리/운영 기능 구현 시 주의
[✅ 해야 할 것]
Admin 페이지/API는:
별도 URL prefix(/admin) + Role 체크 필수
모든 Admin 액션(AI 재분석, 문서 열람, 상태 변경 등) → Audit Log에 남기기
임시 디버그용 Admin API는 반드시 제거 또는 철저히 보호

[❌ 하면 안 되는 것]
“운영 편의를 위해” 만들어둔 숨겨진 URL/버튼을 인증 없이 두기
테스트용 백도어 계정을 그대로 운영 환경에 두기


**A01. 개발자 지침 — 요약 및 체크리스트**

목표: 한국어 기반 개발 규칙과 ISMS-P 수준의 보안 코딩 가이드를 프로젝트에 정착시킵니다.

**기본 정책**
- **출처 표기**: 외부 기능(라이브러리, 알고리즘, 자료)을 사용할 때는 참고자료 출처를 명시합니다.
- **커밋 메시지 규칙**: 커밋 메시지에 아래 항목을 포함하세요:
	- 내가 요구한 내용
	- 네가 답한 내용(요약)
	- 수정한 내용 요약
	- 관련 설계 문서/다이어그램(있을 경우)
- **중대한 변경 시 브랜치/기록**: 신기능, DB 구조 변경, 대규모 UI 변경 등은 새 브랜치를 만들고 `History/`에 변경 내역 문서화.
- **테스트 동반 구현**: 신기능, DB 변경, UI 대규모 변경 사항은 테스트 코드를 반드시 포함.

---

**보안 코딩 체크리스트 (요약)**

1) 인증 / 세션 / 토큰
- 비밀번호: BCrypt 또는 Argon2 등 안전한 해시 후 저장
- 비밀번호는 로그/예외/디버그에 절대 기록 금지
- 토큰: HttpOnly + Secure + SameSite 쿠키 전달 권장
- Refresh Token은 DB에 해시 저장 및 재발급 시 기존 토큰 무효화

2) 권한 / 접근 제어
- 항상 현재 사용자(user_id, role) 기준으로 데이터 접근 제한
- 관리자 기능 접근 시 role 검사 및 감사 기록(Audit Log)

3) 입력 검증 / 출력 인코딩
- 모든 입력은 백엔드에서 검증(정규식/라이브러리 사용)
- 페이지/limit/ID 등 숫자 범위 검사
- HTML 출력 시 값은 escape/encode

4) 암호화 / 시크릿 관리
- 민감 필드(이름, 이메일, 전화번호, 외부 API 키 등)는 필요시 필드 단위 암호화
- 암호화 키 및 시크릿은 코드/레포에 하드코딩 금지 → 환경변수/Secret Manager 사용
- 권장 알고리즘 예시: AES-256-GCM + 무결성 검사

5) 로그 / 예외 처리
- 로그는 최소 정보(user_id, action, resource_id, timestamp, IP)
- 사용자에게는 일반화된 오류 메시지 제공, 내부 로그에만 스택트레이스 보관

6) 파일 업로드
- 허용 확장자·용량 명시 및 MIME + Magic number 검사
- 업로드 파일은 웹루트 밖 저장, 접근은 서명된 URL/전용 API를 통해 제공

7) AI/LLM 연동
- PII(이름, 연락처 등)는 마스킹 또는 제거
- 원문 전송 대신 요약/발췌 우선 사용
- LLM 로그는 문서 ID·요약 등 최소 정보만 저장, 원문 장기 보관 금지

8) 프론트엔드 보안
- 민감 데이터는 백엔드에서 검증 후 전달
- 로컬스토리지에 민감 정보 저장 금지
- CSRF: SameSite 쿠키 + CSRF 토큰 또는 Double Submit Token

9) 운영/관리 기능
- Admin은 별도 URL prefix(`/admin`) + Role 체크 필수
- Admin 액션은 모두 Audit Log에 기록
---

참고: 이 문서에 추가되는 자동화(예: `gitleaks`, `pre-commit`) 및 CI 예시는 `docs/A01.review.md`에 자세히 정리되어 있습니다.

출처 및 참고 자료:
- gitleaks (secret scanning) — https://github.com/zricethezav/gitleaks
- pre-commit framework — https://pre-commit.com/
- OWASP Secure Coding Practices 등 공개 자료 요약