import subprocess

def run_bandit_analysis(file_path: str) -> str:
    """Run Bandit analysis on the given file."""
    try:
        # Run Bandit and capture the output
        result = subprocess.run(
            ["bandit", file_path],
            capture_output=True,
            text=True,
        )
        return result.stdout
    except Exception as e:
        return f"Bandit analysis failed: {str(e)}"
