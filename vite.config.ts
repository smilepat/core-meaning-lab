import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 개발 중에는 Vite(5173)가 /api 요청을 Express(5174)로 넘긴다.
// 운영에서는 Express가 dist/ 를 직접 서빙하므로 프록시가 필요 없다.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:5174",
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
