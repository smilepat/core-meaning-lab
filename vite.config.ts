import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 개발 중에는 Vite 가 /api 요청을 Express 로 넘긴다.
// 운영에서는 정적 파일과 API 를 같은 오리진에서 서빙하므로 프록시가 필요 없다.
//
// 포트를 환경변수로 뺀 이유: 이 PC 에서는 다른 프로젝트가 5173/5174 를 이미 쓰고 있었다.
// 게다가 먼저 뜬 쪽이 ::1(IPv6 루프백)에 바인드하면 localhost 요청이 통째로 그쪽으로 가
// "우리 서버는 떴다고 하는데 응답은 남의 앱"인 상태가 된다. 겹치면 포트만 바꿔 띄운다:
//   CLIENT_PORT=5183 PORT=5184 npm run dev
const apiPort = Number(process.env.PORT) || 5174;
const clientPort = Number(process.env.CLIENT_PORT) || 5173;

export default defineConfig({
  plugins: [react()],
  server: {
    port: clientPort,
    proxy: {
      "/api": `http://127.0.0.1:${apiPort}`,
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
