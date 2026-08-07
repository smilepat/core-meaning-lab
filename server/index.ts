import "dotenv/config";
import { createApp } from "./app.ts";
import { isGeminiEnabled } from "./grade.ts";

// 로컬 개발·자체 호스팅용 진입점. 운영 빌드에서는 dist/ 도 같이 서빙한다.
// Vercel 서버리스 배포는 이 파일이 아니라 api/index.ts 를 쓴다.
const app = createApp({ serveStatic: process.env.NODE_ENV === "production" });

const port = Number(process.env.PORT) || 5174;
app.listen(port, () => {
  console.log(`[server] http://localhost:${port} 에서 대기 중`);
  console.log(
    isGeminiEnabled()
      ? "[server] 채점 엔진: Gemini API"
      : "[server] 채점 엔진: 오프라인 폴백 (GEMINI_API_KEY 가 없습니다)",
  );
});
