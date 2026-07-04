import { useEffect, useState } from "react";

type HealthState = "checking" | "ok" | "error";

function App() {
  const [health, setHealth] = useState<HealthState>("checking");

  useEffect(() => {
    fetch("/api/health")
      .then((response) => {
        setHealth(response.ok ? "ok" : "error");
      })
      .catch(() => {
        setHealth("error");
      });
  }, []);

  return (
    <main className="app-shell">
      <section className="workspace">
        <p className="eyebrow">wenyoumoniqi</p>
        <h1>项目已经准备好起步了</h1>
        <p className="summary">FastAPI 后端和 React 前端已分开管理，适合后续逐步扩展功能。</p>
        <div className="status-row">
          <span className={`status-dot status-${health}`} />
          <span>
            API 状态：
            {health === "checking" && "检查中"}
            {health === "ok" && "已连接"}
            {health === "error" && "未连接"}
          </span>
        </div>
      </section>
    </main>
  );
}

export default App;
