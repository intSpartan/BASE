"use client"

import React, { useEffect, useState } from 'react';
// import LangList from '../Editor/LangList';
// import copy_icon from '../assets/copy_icon.gif';
// import download_icon from '../assets/download_logo.png';
import { useRouter } from 'next/navigation';

const Javascript = ({ props , params }) => {
  let DayName = "Monday"

  const router = useRouter();

  const savedCode = localStorage.getItem(`savedCodeJs${params.qno}`) || '';

  const [code, setcode] = useState(savedCode);

  const runCode = () => {
    try {
      alert("Code Execution Started")
      let textCode = document.querySelector("#javascript").value;
      const originalLog = console.log;
      console.log = function (...value) {
        originalLog.apply(console, value); // Keep the original log functionality
        output.push(value.join(" ")); // Push the stringified value to the output array
      };

      let output = [];
      eval(textCode);
      console.log = originalLog;
      document.getElementById("consoleOutput").innerText = output.join("\n");
    }
    catch (err) {
      alert("Please Enter Valid Code")
      console.log(`${err}`);
    }
  };

  console.log(params);


  const originalConsoleLog = console.log;

  useEffect(() => {
    const consoleOutput = document.getElementById('consoleOutput');
    const btn = document.querySelector('.btn1');

    const consoleLoghandler = function (message) {
      const paragraph = document.createElement('p');
      paragraph.textContent = message;
      consoleOutput.appendChild(paragraph);
      originalConsoleLog.apply(console);
    };

    btn.addEventListener('click', () => {
      consoleOutput.innerHTML = "";
    });

    // console.log = consoleLoghandler;

    return () => {
      btn.removeEventListener('click', () => {
        consoleOutput.innerHTML = "";
      });
      // console.log = originalConsoleLog;
    };
  }, []);


  const clear = () => {
    alert("Output Cleared")
    const box = document.querySelector("#consoleOutput");
    box.innerHTML = "";
  }

  const copyContent = () => {
    navigator.clipboard.writeText(code);
    alert("Copied to Clipboard")
  }


  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const codeToFile = () => {
    alert("Download Started");

    const text = document.querySelector(".dartpython").value;
    const blob = new Blob([text], { type: "text/javascript" });

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    // const FileCodeName = `CodoFile-(${DayName})`;

    // link.download = FileCodeName;
    // link.click();
  }

  // console.log(params);

  const codeSave = (e) => {
    console.log(e.target.value)
    setcode(e.target.value)
    localStorage.setItem(`savedCodeJs${params.qno}`, e.target.value);
  }


  const submitCode = () => {
    router.push(`/OA/${params.jobId}/coding`);
  }


  return (
    <>
      <div className="jsContainer mx-auto max-w-4xl">
        <div className="flex">
          <div className="flex-grow bg-white p-4 rounded-lg shadow-lg">
            <div className='runHeaderJS flex justify-between items-center mb-4'>
              <div className='flex space-x-2'>
                <button className='vbtn p-2 bg-blue-500 hover:bg-blue-700 rounded shadow text-white' onClick={copyContent}>
                  {/* <img className='voicebtn w-5 h-5' src={copy_icon} alt='Copy Clip' /> */}
                </button>
                <button className='vbtn p-2 bg-green-500 hover:bg-green-700 rounded shadow text-white' onClick={codeToFile}>
                  {/* <img className='voicebtn w-5 h-5' src={download_icon} alt='Download Code' /> */}
                </button>
                <button className='btn btn1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow' onClick={runCode}>RUN</button>
              </div>
              <div className='flex items-center space-x-2'>
                <mark><p className="bg-yellow-100 p-1 rounded">OUTPUT</p></mark>
                <button className='clear bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded shadow' onClick={clear}>Clear</button>
              </div>
            </div>
            <div className='jsplayground flex gap-4 mb-4'>
              <div className='leftplayground flex-1'>
                <textarea className='w-full h-60 p-2 border border-gray-300 rounded resize-none' data-testid="jsTextarea" name="javascript" id="javascript" value={code} onChange={(e) => codeSave(e)} placeholder='console.log("Hello CodoPlayer");'></textarea>
              </div>
              <div className='rightplayground flex-1 bg-gray-50 p-2 border border-gray-300 rounded' id='consoleOutput'>
                {/* Simulated console output */}
              </div>
            </div>
            <div>
              <button className="p-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded shadow" onClick={submitCode}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Javascript
