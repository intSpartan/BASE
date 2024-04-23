import React, { useState } from 'react';
import Link from 'next/link';
import Javascript from '../javascript/page.jsx';
import Python from '../python/page.jsx';
import Dart from '../dart/page.jsx';

function CodingPage(props) {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleClick = (language) => {
    console.log(props.title);  // Logging to ensure title is received correctly
    if (props.title === language) {
      setActiveComponent(activeComponent === language ? null : language);
    }
  };


return (
    <>
      <div className="codingContainer mx-auto p-6 bg-white shadow-md rounded-lg">
        {props.title === "JavaScript" && (
          <div className="p-4 bg-yellow-100 rounded-lg shadow">
            <Javascript params={props}/>
          </div>
        )}

        {props.title === "Python" && (
          <div className="p-4 bg-green-100 rounded-lg shadow">
            <Python params={props}/>
          </div>
        )}

        {props.title === "Dart" && (
          <div className="p-4 bg-blue-100 rounded-lg shadow">
            <Dart params={props}/>
          </div>
        )}
      </div>
    </>
  );
}

export default CodingPage;
