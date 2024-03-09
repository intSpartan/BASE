"use client"

import React, { useEffect, useState } from 'react';
import LangList from '../Editor/LangList';
import copy_icon from '../assets/copy_icon.gif';
import download_icon from '../assets/download_logo.png';
import { useRouter } from 'next/navigation';
const data = new Date()
let DayName;
if (data.getDay() === 1) {
  DayName = "Monday";
}
else if (data.getDay() === 2) {
  DayName = "Tuesday";
}
else if (data.getDay() === 3) {
  DayName = "Wednesday";
}
else if (data.getDay() === 4) {
  DayName = "Thursday";
}
else if (data.getDay() === 5) {
  DayName = "Friday";
}

else if (data.getDay() === 6) {
  DayName = "Saturday";
}
else if (data.getDay() === 0) {
  DayName = "Sunday"
}
else {
  DayName = "CodoFile";
}
const Javascript = ({ params }) => {

  const CodingQuestionsPool = [
    'Q: Find the sum of all elements in an array: arr.reduce((sum, num) => sum + num, 0);',

    'Q: Find the maximum element in an array: Math.max(...arr);',

    'Q: Check if an array contains a specific element: arr.includes(target);',

    'Q: Reverse the elements of an array: arr.reverse();',

    'Q: Filter even numbers from an array: arr.filter(num => num % 2 === 0);',
  ];

  shuffleArray(CodingQuestionsPool)

  // const jobInfo = await fetchOA(params.jobId);

  const router = useRouter();

  const savedCode = localStorage.getItem(`savedCodeJs${params.qno}`) || '';

  const [code, setcode] = useState(savedCode);

  const runCode = () => {
    try {
      alert("Code Execution Started")
      let textCode = document.querySelector(".dartpython").value;
      eval(textCode);
    }
    catch (err) {
      alert("Please Enter Valid Code")
      console.log(`${err}`);
    }
  };



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

    console.log = consoleLoghandler;

    return () => {
      btn.removeEventListener('click', () => {
        consoleOutput.innerHTML = "";
      });
      console.log = originalConsoleLog;
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
    setcode(e.target.value)
    localStorage.setItem(`savedCodeJs${params.qno}`, code);
  }


  const submitCode = () => {
    router.push(`/OA/${params.jobId}/coding`);
  }


  return (
    <>
      <div>{CodingQuestionsPool[Math.floor(Math.random() * 5)]}</div>
      <div className="jsContainer">
        <div className="jsBody wholeeditorBody">
          <div className="leftLang">
          </div>
          <div className="PlaygroundMain">
            <div className='runHeaderJS'>
              <div className='jsleftheaderfile jsfile'>
                <div className='runbtn'>
                  <button className='vbtn'>
                    <img className='voicebtn' onClick={copyContent} src={copy_icon} alt='CopyClip' />
                  </button>
                  <button className='vbtn'>
                    <img className='voicebtn' onClick={codeToFile} src={download_icon} alt='DownLoadCode' />
                  </button>
                  <button className='btn btn1' onClick={runCode}>RUN</button>
                </div>
              </div>
              <div className='jsrightheaderfile jsfile'>
                <mark><p>OUTPUT</p></mark>
                <button className='clear' onClick={clear}>Clear</button>
              </div>
            </div>
            <div className='jsplayground playground'>
              <div className='leftplayground snippet'>
                <textarea className='dartpython' data-testid="jsTextarea" name="javascript" id="javascript" value={code} onChange={(e) => codeSave(e)} placeholder='console.log("Hello CodoPlayer");'></textarea>
              </div>
              <h1 className="invisible">
                <mark>Output</mark>
              </h1>
              <div className='rightplayground snippet' id='consoleOutput' data-testid="consoleOutput" >
                {/* <p>{output}</p> */}
              </div>
              <div>
                <button onClick={submitCode}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Javascript