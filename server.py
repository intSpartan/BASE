from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def run_python_code():
    try:
        # Extracting the code from the POST request
        data = request.get_json(force=True)
        code = data['code']

        # Running the Python code securely
        process = subprocess.Popen(
            ['python3', '-c', code],
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )
        stdout, stderr = process.communicate()

        if process.returncode == 0:
            # If execution was successful
            return jsonify({'output': stdout.strip()}), 200
        else:
            # If there was an error
            return jsonify({'error': stderr.strip()}), 400

    except Exception as e:
        # If there was an error in handling the request
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
