// server/handler.ts 를 한 파일로 묶어 api/[...path].js 로 내보낸다.
//
// 파일 이름이 catch-all([...path])인 이유: Vercel 은 이 이름일 때만 /api 아래 여러 단계
// 경로(/api/grade/context 등)를 한 함수로 보내고, req.url 에 원래 경로를 남긴다.
// Express 라우터는 그 경로를 보고 분기한다.
//
// --packages=external: node_modules 는 묶지 않는다. express 같은 CJS 패키지를 ESM 으로
// 밀어 넣으면 동적 require 에서 깨질 수 있고, Vercel 이 어차피 import 문을 따라가
// 필요한 패키지를 함께 올려 준다. 우리가 묶어야 하는 건 우리 소스뿐이다.
import { build } from "esbuild";
import { mkdirSync } from "node:fs";

const outfile = "api/[...path].js";

mkdirSync("api", { recursive: true });

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
