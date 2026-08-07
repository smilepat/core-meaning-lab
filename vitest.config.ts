import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/**/*.test.ts"],
    // 기본은 node. 브라우저 저장소를 쓰는 파일만 맨 위 주석으로 jsdom 을 고른다.
    environment: "node",
  },
});
