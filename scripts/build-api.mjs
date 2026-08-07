// server/handler.ts 를 한 파일로 묶어 dist-api/handler.js 로 내보낸다.
// api/[...path].js 는 이걸 다시 export 하는 한 줄짜리 shim 이고, 그쪽이 저장소에 커밋된다.
//
// 왜 이렇게 갈라놨나:
// 1) Vercel 은 **저장소 소스**에 있는 api/ 를 보고 서버리스 함수를 등록한다. 빌드 중에
//    api/ 를 만들어 내면 CLI 배포는 통해도 git 푸시 배포에서는 함수가 통째로 없다
//    (모든 /api/* 가 플랫폼 404). 그래서 api/ 엔트리는 생성물이 아니라 커밋된 파일이어야 한다.
// 2) 그렇다고 엔트리에서 ../server/app.ts 를 직접 부를 수도 없다. Vercel 은 api/*.ts 를
//    트랜스파일만 하고 import 경로를 손대지 않아, .ts 확장자가 런타임에
//    ERR_MODULE_NOT_FOUND 로 죽는다. 그래서 우리가 미리 한 파일로 묶어 .js 로 넘긴다.
//
// --packages=external: node_modules 는 묶지 않는다. express 같은 CJS 를 ESM 으로 밀어
// 넣으면 동적 require 에서 깨질 수 있고, Vercel 이 import 문을 따라가 함께 올려 준다.
import { build } from "esbuild";
import { mkdirSync } from "node:fs";

const outfile = "dist-api/handler.js";

mkdirSync("dist-api", { recursive: true });

await build({
  entryPoints: ["server/handler.ts"],
  outfile,
  bundle: true,
  platform: "node",
  format: "esm",
  target: "node20",
  packages: "external",
  logLevel: "info",
});

console.log(`[build-api] ${outfile} 생성 완료`);
