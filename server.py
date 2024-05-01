from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import subprocess
import requests
import fitz
import os

app = Flask(__name__)
CORS(app)

def extract_text_from_pdf(url):
    # Download the PDF file from the URL
    fake_useragent = 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25'
    response = requests.get(url, headers={'User-Agent': fake_useragent})
    with open("temp.pdf", "wb") as f:
        f.write(response.content)

    # Open the PDF and extract text
    document = fitz.open("temp.pdf")
    text = ''
    for page in document:
        text += page.get_text()
    document.close()

    # os.remove("temp.pdf")

    return text

@app.route('/resumes/<filename>')
def download_file(filename):
    return send_from_directory('resumes', filename)

@app.route('/', methods=['POST'])
def run_python_code():
    try:

        data = request.get_json(force=True)
        code = data['code']


        process = subprocess.Popen(
            ['python3', '-c', code],
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )
        stdout, stderr = process.communicate()

        if process.returncode == 0:

            return jsonify({'output': stdout.strip()}), 200
        else:

            return jsonify({'error': stderr.strip()}), 400

    except Exception as e:

        return jsonify({'error': str(e)}), 500

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    if file:
        file_path = os.path.join('resumes', file.filename)
        file.save(file_path)
        return jsonify({'url': f'http://localhost:5000/{file_path}'})
    return jsonify({'error': 'No file provided'}), 400

@app.route('/score')
def score_resume():
    url = request.args.get('url')
    if not url:
        return jsonify({'error': 'URL parameter is required'}), 400

    try:
        text = extract_text_from_pdf(url)

        headers = {
            'Authorization': f'Bearer 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',
            'Content-Type': 'application/json'
        }

        data = {
            'model': 'gpt-3.5-turbo',
            'messages': [{'role': 'user', 'content': f'Score the following resume from 20 to 100 based on the skills. Give 20 if there is no skills also dont give good rating everytime. Give 20% weightage to CGPA, 20% on the idea of projects , 30% on the numerical data present in resume and 30% based on skills and achievements. Same skill and achievements should be considered as one. (!IMPORTANT - GIVE YOUR ANSWER ONLY IN TWO DIGITS) : {text}'}]
        }

        response = requests.post('https://api.openai.com/v1/chat/completions', json=data, headers=headers)
        response_data = response.json()
        print(response_data)
        if(len(response_data["choices"][0]["message"]["content"]) > 2):
            return "Sorry, the provided pdf doesn't seem to be a resume, or let us score it as 0"
        return response_data["choices"][0]["message"]["content"]
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
