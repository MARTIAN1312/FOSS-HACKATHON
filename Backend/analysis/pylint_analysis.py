import subprocess

def run_pylint_analysis(file_path: str) -> str:
    """Run Pylint analysis on the given file."""
    try:
        # Run Pylint and capture the output
        result = subprocess.run(
            ["pylint", file_path],
            capture_output=True,
            text=True,
        )
        return result.stdout
    except Exception as e:
        return f"Pylint analysis failed: {str(e)}"
