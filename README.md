# wenyoumoniqi

Python 后端 + 前端分离项目起步仓库。

## 技术栈

- Backend: FastAPI, Python 3.12, uv
- Frontend: Vite, React, TypeScript, pnpm

## 本地启动

后端：

```powershell
cd backend
uv sync
uv run fastapi dev app/main.py
```

前端：

```powershell
cd frontend
pnpm install
pnpm dev
```

默认约定：

- Backend API: `http://127.0.0.1:8000`
- Frontend dev server: `http://127.0.0.1:5173`

## 目录结构

```text
backend/
  app/
    main.py
  tests/
frontend/
  src/
```
