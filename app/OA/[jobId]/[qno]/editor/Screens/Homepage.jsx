import React from 'react'
import CodingPage from '../HomepageScreen/CodingPage';
// import ImageCod from '../assets/JavaScript frameworks-rafiki.svg'
import { useState } from 'react';
// import Pycod from '../assets/Man reading-pana.svg'
// import SpeechCod from '../assets/Speech to text-bro.svg'
// import CodJava from '../assets/Coding-bro.svg'

function Homepage(props) {

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <>
      <div className="container py-6">
        <select
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="p-3 border-2 border-gray-300 rounded-md shadow w-full focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
        >
          <option value="">Select a Language</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Dart">Dart</option>
        </select>

        {selectedLanguage && (
          <div className="mt-8">
            {selectedLanguage === "JavaScript" && (
              <CodingPage
                title="JavaScript"
                con="Run JavaScript"
                info={<>All The <mark className="bg-yellow-200 rounded px-1">Logic</mark> That you need to Learn and Practice <mark className="bg-yellow-200 rounded px-1">JavaScript</mark> will be Accomplished by this <mark className="bg-yellow-200 rounded px-1">Js Text Editor</mark>.</>}
                path='/javascript'
                jobId={props.jobId}
              />
            )}

            {selectedLanguage === "Python" && (
              <CodingPage
                title="Python"
                con="Run Python"
                path="/python"
                info={<>Leash out All your <mark className="bg-green-200 rounded px-1">Logic and Understanding</mark> with the Easiest Programming Language <mark className="bg-green-200 rounded px-1">Python</mark> in this Super Easy Web IDE</>}
                image={Pycod}
                uniId={"uni"}
              />
            )}

            {selectedLanguage === "Dart" && (
              <CodingPage
                title="Dart"
                path='/dart'
                con="Run Dart"
                info={<><mark className="bg-blue-200 rounded px-1">Dart</mark> is a Programming Language <mark className="bg-blue-200 rounded px-1">Developed by Google</mark> and it is used with <mark className="bg-blue-200 rounded px-1">Flutter</mark> to Create Mobile and Web Applications. Embrace your <mark className="bg-blue-200 rounded px-1">Knowledge</mark> with <mark className="bg-blue-200 rounded px-1">Dart Code Editor</mark></>}
                image={CodJava}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Homepage
