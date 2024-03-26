
import React from 'react';
import { FaRegKeyboard, FaRegComments, FaRegStar, FaChartLine } from 'react-icons/fa';


const FeaturesSection = () => {
  return (
    <section id="features" className="bg-indigo-50 text-gray-600 body-font">
      <div className="container flex flex-col px-5 pt-14 mx-auto">
        <div className="flex flex-col flex-wrap items-center w-full mb-10 text-center">
          <h1 className="mb-2 text-4xl font-bold text-gray-900 sm:text-5xl title-font">
           All you need to Ace the Technical Round
          </h1>
          <p className="w-50 mt-5 leading-relaxed text-gray-500">
           Hey there, gearing up to tackle those technical interviews head-on?</p>
          <p className="w-50 leading-relaxed text-gray-500">Interview Buddy is your reliable companion in conquering those daunting coding challenges. </p>
          <p className="w-50 leading-relaxed text-gray-500">We're here to elevate your preparation and ensure you shine in every technical round!</p>
        </div>
        <div className="flex flex-row m-3">
          {/* Feature 1: Interactive Practice Sessions */}
          <div className="feature-card flex p-4 w-1/4 md:w-1/2">
            <div className="feature-content border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition duration-200 ease-in-out">
              <FaRegKeyboard className="feature-icon p-1 mx-4 mt-2 text-violet-500 text-4xl" />
              <h3 className="text-xl px-5 font-semibold mb-2">Interactive Practice Sessions</h3>
              <p className="text-gray-700 text-left px-5 pb-5">Dive into our immersive interactive practice sessions, meticulously crafted to simulate real interview scenarios. Engage dynamically with challenging coding problems.</p>
            </div>
          </div>
          
          {/* Feature 2: Real-time Feedback and Guidance */}
          <div className="feature-card flex p-4 w-1/4 md:w-1/2">
            <div className="feature-content border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition duration-200 ease-in-out">
              <FaRegComments className="feature-icon p-1 mx-4 mt-2 text-violet-500 text-4xl" />
              <h3 className="text-xl px-5 font-semibold mb-2">Real-time Feedback and Guidance</h3>
              <p className="text-gray-700 text-left px-5 pb-5">Receive instant feedback and personalized guidance throughout your practice sessions.</p>
            </div>
          </div>
          
          {/* Feature 3: Personalized Scoring and Improvement Suggestions */}
          <div className="feature-card flex p-4 w-1/4 md:w-1/2">
            <div className="feature-content border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition duration-200 ease-in-out">
              <FaRegStar className="feature-icon p-1 mx-4 mt-2 text-violet-500 text-4xl" />
              <h3 className="text-xl px-5 font-semibold mb-2">Personalized Scoring and Improvement Suggestions</h3>
              <p className="text-gray-700 text-left px-5 pb-5">Get detailed scores based on your performance and receive tailored suggestions for improvement.</p>
            </div>
          </div>
          
          {/* Feature 4: Performance Analysis Dashboard */}
          <div className="feature-card flex p-4 w-1/4 md:w-1/2">
            <div className="feature-content border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition duration-200 ease-in-out">
              <FaChartLine className="feature-icon p-1 mx-4 mt-2 text-violet-500 text-4xl" />
              <h3 className="text-xl px-5 font-semibold mb-2">Performance Analysis Dashboard</h3>
              <p className="text-gray-700 text-left px-5 pb-5">Track your progress and performance with detailed analytics and insights.</p>
            </div>
          </div>
        </div>
        <a href="#practice" className="bg-violet-500  hover:bg-violet-600 hover:shadow-md text-white text-center font-semibold py-3 px-6 mb-10 rounded-full transition duration-300 inline-block mx-auto">Start Preparation</a>  
      </div>
    </section>
  );
};

export default FeaturesSection;

