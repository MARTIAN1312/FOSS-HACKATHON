```markdown
# Code Quality Guardian - FOSS Hack 2025

A lightweight, open-source code analysis tool empowering developers to identify and rectify code quality issues in Python projects.

---

## 📌 Project Overview

**Code Quality Guardian** is a web-based application engineered to automate code quality assessments for Python projects. By delivering immediate insights into code style, potential bugs, and security vulnerabilities, it aids developers in upholding robust and secure codebases. This tool is indispensable for both novices and seasoned developers aiming to ensure their Python code is pristine, secure, and maintainable.

---

## 🚀 Key Features

- **Syntax Analysis**: Detect syntax errors and potential bugs.
- **Style Enforcement**: Ensure adherence to PEP 8 standards and maintain consistent code style.
- **Security Auditing**: Uncover security vulnerabilities using Bandit.
- **Complexity Evaluation**: Assess code complexity and derive maintainability scores.
- **User-Friendly Interface**: Intuitive UI for seamless file uploads and result visualization.
- **Comprehensive Reporting**: Generate in-depth analysis reports in various formats.

---

## 🛠️ Technology Stack

- **Backend**: Python, FastAPI
- **Analysis Tools**: Pylint, Bandit
- **Frontend**: TypeScript, JavaScript, CSS (Generated via [V0.dev](https://v0.dev))
- **Documentation**: Markdown, OpenAPI/Swagger
- **Testing**: pytest

---

## 📥 Installation & Setup

### Prerequisites

- Python 3.8 or higher
- Node.js and npm (for frontend)
- Git

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MARTIAN1312/FOSS-HACKATHON.git
   cd FOSS-HACKATHON/backend
   ```

2. **Set up a virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install backend dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Start the FastAPI server**:
   ```bash
   uvicorn main:app --reload
   ```

   The backend API will be accessible at `http://localhost:8000`.

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd ../frontend
   ```

2. **Install frontend dependencies**:
   ```bash
   npm install
   ```

3. **Build the frontend**:
   ```bash
   npm run build
   ```

   This will generate static files in the `dist` directory.

4. **Serve the frontend**:
   - **Option 1**: **Using a Static Server**:
     ```bash
     npx serve -s dist
     ```
     The frontend will be available at the URL provided in the terminal.

   - **Option 2**: **Integrating with FastAPI**:
     - Copy the contents of the `dist` directory to a static directory within your FastAPI project.
     - Update the FastAPI app to serve static files from this directory.

---

## 🖥️ Usage Instructions

1. **Access the Application**:
   - Open your browser and navigate to the frontend URL (as set up above).

2. **Upload a Python File**:
   - Click on the "Upload" button and select the Python file you wish to analyze.

3. **Review Analysis Results**:
   - The application will display detailed results, highlighting issues and suggesting improvements.

4. **Iterate and Improve**:
   - Utilize the feedback to refine your code, enhancing quality and security.

---

## 🔗 Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Pylint Documentation](https://pylint.readthedocs.io/)
- [Bandit Documentation](https://bandit.readthedocs.io/)
- [PEP 8 Style Guide](https://www.python.org/dev/peps/pep-0008/)

---

## 👥 Contributors

- **Sarthak Dubey** ([@MARTIAN1312](https://github.com/MARTIAN1312)) – Backend Development & Project Lead
- **Rahul Yadav** ([@rahul-afkCoder](https://github.com/rahul-afkCoder)) – Frontend Development & UI/UX Design
- **Ishan Kumar Badpaga** ([@Ishanbadpaga](https://github.com/Ishanbadpaga)) – Code Analysis & Testing
- **Kumar Vikrant** ([@kumarvikrant12](https://github.com/kumarvikrant12)) – Documentation & Deployment

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 📧 Contact

For inquiries, feedback, or collaboration opportunities, please reach out via:

- **Email**: sarthakdubey704@gmail.com
- **GitHub Issues**: [Submit an Issue](https://github.com/MARTIAN1312/FOSS-HACKATHON/issues)

---

🚀 **Happy Coding!** 🎯
```
