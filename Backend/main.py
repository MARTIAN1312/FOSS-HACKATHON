from fastapi import FastAPI, File, UploadFile
import subprocess

app = FastAPI()

@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    try:
        # Save the uploaded file
        file_path = f"uploads/{file.filename}"
        with open(file_path, "wb") as buffer:
            buffer.write(await file.read())

        # Run Pylint
        pylint_results = subprocess.run(
            ["pylint", file_path],
            capture_output=True,
            text=True,
        ).stdout

        # Run Bandit
        bandit_results = subprocess.run(
            ["bandit", file_path],
            capture_output=True,
            text=True,
        ).stdout

        return {
            "filename": file.filename,
            "pylint_results": pylint_results,
            "bandit_results": bandit_results,
        }
    except Exception as e:
        return {"error": str(e)}
