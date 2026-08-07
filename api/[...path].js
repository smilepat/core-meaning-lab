// Vercel 서버리스 진입점. **이 파일은 커밋된다** — Vercel 이 저장소 소스의 api/ 를 보고
// 함수를 등록하기 때문이다. 빌드 중에 만들어 내면 git 푸시 배포에서 함수가 통째로 없다.
//
// 파일 이름이 catch-all([...path])인 이유: 이 이름일 때만 /api 아래 경로가 이 함수 하나로
// 들어오고 req.url 에 원래 경로가 남는다. 다만 Vercel 의 catch-all 은 **한 단계까지만**
// 잡아 주므로 라우트를 /api/grade-context 처럼 평탄하게 두었다 (server/app.ts 참고).
//
// 알맹이는 dist-api/handler.js — scripts/build-api.mjs 가 server/handler.ts 를 묶어 만든다.
// vercel.json 의 includeFiles 가 그 파일을 함수 번들에 확실히 넣어 준다.
export { default } from "../dist-api/handler.js";
