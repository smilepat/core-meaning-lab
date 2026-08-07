// 서버리스 핸들러의 소스. 여기서 만든 앱을 scripts/build-api.mjs 가 번들해
// api/[...path].js 로 내보내고, Vercel 이 그 파일을 함수로 띄운다.
//
// 왜 번들이 필요한가: Vercel 의 Node 런타임은 api/ 아래 .ts 파일을 트랜스파일만 하고
// import 경로는 손대지 않는다. 이 저장소는 import 에 .ts 확장자를 쓰므로
// (`allowImportingTsExtensions`), 트랜스파일된 파일이 런타임에 ../server/app.ts 를
// 찾다가 ERR_MODULE_NOT_FOUND 로 죽는다. 그래서 우리가 먼저 한 파일로 묶어 넘긴다.
import { createApp } from "./app.ts";

// 정적 파일은 Vercel 이 dist/ 에서 직접 서빙하므로 serveStatic 은 끈다.
export default createApp();
