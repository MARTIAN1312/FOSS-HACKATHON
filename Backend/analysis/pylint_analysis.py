import subprocess

# Function to run Pylint analysis on a specified file
def run_pylint_analysis(file_path: str) -> str:
    """Run Pylint analysis on the given file and return the output."""
    try:
        # Execute the Pylint tool as a subprocess
        result = subprocess.run(
            ["pylint", file_path],  # Command and file path
            capture_output=True,    # Capture both stdout and stderr
            text=True,              # Return output as a string
        )
        # Return the standard output of the command
        return result.stdout
    except Exception as e:
        # Handle exceptions and return an error message
        return f"Pylint analysis failed: {str(e)}"



