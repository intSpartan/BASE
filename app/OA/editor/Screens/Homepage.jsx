"use client"

import React from 'react'
import CodingPage from '../HomepageScreen/CodingPage';
import ImageCod from '../assets/JavaScript frameworks-rafiki.svg'

import Pycod from '../assets/Man reading-pana.svg'
import SpeechCod from '../assets/Speech to text-bro.svg'
import CodJava from '../assets/Coding-bro.svg'

function Homepage() {

  return (
    <>
      <div className="container">
        <CodingPage
          title="JavaScript"
          con="Run JavaScript"
          info={<>All The <mark>Logic</mark> That you need to Learn and Practice <mark> JavaScript </mark> will be Accomplished by this <mark> Js Text Editor </mark> .</>}
          path='/javascript'
          image={ImageCod}
        // poss={{'flexDirection':'row'}}

        />
        <CodingPage
          title="Python"
          con="Run Python"
          path="/python"
          info={<>Leash out All your <mark> Logic and Understanding</mark> with the Easiest Programming Language <mark>Python</mark> in this Super Easy Web IDE</>}
          image={Pycod}
          // poss={{'flexDirection':'row-reverse'}}
          uniId={"uni"}
        />
        <CodingPage
          title="Dart"
          path='/dart'
          con="Run Dart"
          info={<><mark>Dart</mark> is a Programming Language <mark>Developed by Google</mark> and it is use with <mark>Flutter </mark>to Create Mobile and Web Application .Embrace your <mark>Knowledge</mark> with <mark>Dart Code Editor</mark></>}
          image={CodJava}
        // poss={{'flexDirection':'row'}}
        />
        <CodingPage
          title="Voice To Code"
          path='/editor/voice2text'
          image={SpeechCod}
          info={<>
            <mark>"Words Speak more than Actions"</mark> let this quote get Install into your life by our latest tool <mark>Voice to Text</mark> feature .
          </>}
          con="Get Started"
          // poss={{'flexDirection':'row-reverse'}}
          uniId={"uni"}
        />
        {/* <a href="http://" target="_blank" rel="noopener noreferrer"></a> */}
      </div>
    </>
  )
}

export default Homepage