from fastapi import FastAPI, File, UploadFile import subprocess

Create a FastAPI app instance

app = FastAPI()

Define an endpoint to handle file uploads

@app.post("/upload/") async def upload_file(file: UploadFile = File(...)): try: # Construct the file path where the uploaded file will be saved file_path = f"uploads/{file.filename}"

# Open the file in write-binary mode and save its contents
    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    # Run Pylint on the uploaded file to check code quality
    pylint_results = subprocess.run(
        ["pylint", file_path],  # Command to execute
        capture_output=True,    # Capture standard output and error
        text=True,              # Return output as a string
    ).stdout

    # Run Bandit on the uploaded file to check for security issues
    bandit_results = subprocess.run(
        ["bandit", file_path],
        capture_output=True,
        text=True,
    ).stdout

    # Return the results of both Pylint and Bandit, along with the filename
    return {
        "filename": file.filename,
        "pylint_results": pylint_results,
        "bandit_results": bandit_results,
    }
except Exception as e:
    # Handle any exceptions that occur during the process
    return {"error": str(e)}

