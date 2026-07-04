from fastapi import FastAPI

app = FastAPI(title="wenyoumoniqi API")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/")
def root() -> dict[str, str]:
    return {"message": "wenyoumoniqi backend is running"}
