from resume_parser import resumeparse

def parse_resume(file_path):
    try:
        # Parse the resume
        data = resumeparse.read_file(file_path)
        print(data)

    except Exception as e:
        print("Error parsing resume:", e)

# Path to the local PDF file
pdf_file_path = "/home/abhishek/Desktop/Resumes/Abhishek_Pandey_V5.pdf"

# Call parse_resume function with the file path
parse_resume(pdf_file_path)