"use client"

import React, { useState } from 'react';
import LangList from '../Editor/LangList';
// import axios from 'axios';
import copy_icon from '../assets/copy_icon.gif';
import download_icon from '../assets/download_logo.png';
import { useRouter } from 'next/navigation';

function Python({ params }) {

  const [output, setOutput] = useState('');

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }


  const router = useRouter();

  // shuffleArray(CodingQuestionsPool)

  const savedCode = localStorage.getItem(`savedCodePy${params.qno}`) || '';
  const [code, setcode] = useState(savedCode);


  const handleSubmit = async () => {
    alert('Please Wait while File is Execuing');
    const payload = {
      language: "python",
      code: code,
      input: "",
    };

    try {
      const response = await fetch("http://localhost:5000/", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
      const data = await response.json()
      if (response.ok) {
        setOutput(data.output);
        alert("Executed Successfully.");
      }
      else {
        setOutput(data.error);
        alert("An error Occured.");
      }
    } catch (err) {
      setOutput("Error in communication with the server")
      alert("Please Enter Valid Python Code");
      console.log(`error is in python.js .The error : ${err}`);
    }
  }

  const clear = () => {
    alert('Output Cleared')
    const box = document.querySelector("#consoleOutput p");
    box.innerText = "";
  }

  const copyContent = () => {
    alert("Copied")
    navigator.clipboard.writeText(code);
  }

  const codeToFile = () => {
    alert('File is Downloading...')
    const text = document.querySelector('#python').value;

    const blob = new Blob([text], { type: "text/python" });

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "codofile-python.py";
    link.click();
  }


  const codeSave = (e) => {
    console.log(e.target.value)
    setcode(e.target.value)
    localStorage.setItem(`savedCodePy${params.qno}`, e.target.value);
  }

  const submitCode = () => {
    router.push(`/OA/${params.jobId}/coding`);
  }


  return (
    <div className="bg-white shadow-md rounded-lg p-4 my-4 mx-auto max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="order-2 md:order-1">
          <textarea
            className="w-full h-64 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="python"
            id="python"
            value={code}
            onChange={codeSave}
            placeholder='print("hello codoPlayers")'
          ></textarea>
          <button
            className="mt-2 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md focus:outline-none"
            onClick={handleSubmit}
          >
            RUN
          </button>
        </div>
        <div className="order-1 md:order-2 bg-gray-100 p-3 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <button
              className="p-2 bg-green-500 hover:bg-green-700 text-white rounded-lg"
              onClick={copyContent}
              aria-label="Copy code"
            >
              <img alt="Copy" className="h-6 w-6" />
            </button>
            <button
              className="p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg"
              onClick={codeToFile}
              aria-label="Download code"
            >
              <img alt="Download" className="h-6 w-6" />
            </button>
            <button
              className="p-2 bg-red-500 hover:bg-red-700 text-white rounded-lg"
              onClick={clear}
              aria-label="Clear output"
            >
              Clear
            </button>
          </div>
          <div className="h-64 overflow-auto bg-white p-2 rounded-lg" id="consoleOutput">
            <p>{output}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Python
