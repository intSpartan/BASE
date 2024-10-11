import React, { useState, useEffect } from "react";
import {
  FaRegKeyboard,
  FaRegComments,
  FaRegStar,
  FaChartLine,
} from "react-icons/fa";

const FeaturesSection = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length === 3 ? "" : prevDots + "."));
    }, 500); // Adjust speed as needed

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <section id="features" className="bg-indigo-50 text-gray-600 body-font">
      <div className="container flex flex-col px-5 pt-14 mx-auto">
        <div className="flex flex-col flex-wrap items-center w-full mb-10 text-center">
          <h1 className="mb-2 text-4xl font-bold text-gray-900 sm:text-5xl title-font flex items-center">
            Interviews Pending
            <span style={{ marginLeft: "8px" }}>{dots}</span>
          </h1>
          <p className="w-50 mt-5 leading-relaxed text-gray-500">
            {" "}
            Below is the list of all the AI interviews pending for you{" "}
          </p>
          <p className="w-50 leading-relaxed text-gray-500">
            Clicking on any of following cards would start the respective
            company's interview.{" "}
          </p>
          {/* <p className="w-50 leading-relaxed text-gray-500">We're here to elevate your preparation and ensure you shine in every technical round!</p> */}
        </div>
        <div className="flex flex-row m-3">
          {/* Feature 1: Interactive Practice Sessions */}
          <div className="feature-card flex p-4  w-1/4 md:w-1/2">
            <a href="/question/two-sum">
              <div className="feature-content bg-white border border-gray-200 rounded-lg hover:border-transparent hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <div className="feature-icon p-3 mx-4 mt-4 bg-gradient-to-r from-violet-500 to-indigo-500 text-white rounded-full inline-block text-4xl">
                  <FaRegKeyboard />
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-3xl font-bold mb-2 text-gray-900 hover:text-violet-600 transition duration-300 ease-in-out">
                    Adobe
                  </h3>
                  <p className="text-gray-600 text-left mb-4">
                    Start your interview with Adobe and experience:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    <li>
                      <span className="font-bold text-violet-600">
                        Real-time coding challenges
                      </span>{" "}
                      designed to test your problem-solving skills.
                    </li>
                    <li>
                      <span className="font-bold text-violet-600">
                        In-depth technical questions
                      </span>{" "}
                      crafted to evaluate your knowledge.
                    </li>
                    <li>
                      <span className="font-bold text-violet-600">
                        Interactive assessments
                      </span>{" "}
                      that simulate actual interview scenarios.
                    </li>
                  </ul>
                  <p className="text-gray-600 text-left mb-4">
                    Prepare to engage dynamically with problems that reflect the
                    challenges you'll face in a real interview.
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Feature 2: Real-time Feedback and Guidance */}
          <div className="feature-card flex p-4  w-1/4 md:w-1/2">
            <a href="/question/two-sum">
              <div className="feature-content bg-white border border-gray-200 rounded-lg hover:border-transparent hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <div className="feature-icon p-3 mx-4 mt-4 bg-gradient-to-r from-violet-500 to-indigo-500 text-white rounded-full inline-block text-4xl">
                  <FaRegKeyboard />
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-3xl font-bold mb-2 text-gray-900 hover:text-violet-600 transition duration-300 ease-in-out">
                    Adobe
                  </h3>
                  <p className="text-gray-600 text-left mb-4">
                    Start your interview with Adobe and experience:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    <li>
                      <span className="font-bold text-violet-600">
                        Real-time coding challenges
                      </span>{" "}
                      designed to test your problem-solving skills.
                    </li>
                    <li>
                      <span className="font-bold text-violet-600">
                        In-depth technical questions
                      </span>{" "}
                      crafted to evaluate your knowledge.
                    </li>
                    <li>
                      <span className="font-bold text-violet-600">
                        Interactive assessments
                      </span>{" "}
                      that simulate actual interview scenarios.
                    </li>
                  </ul>
                  <p className="text-gray-600 text-left mb-4">
                    Prepare to engage dynamically with problems that reflect the
                    challenges you'll face in a real interview.
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Feature 3: Personalized Scoring and Improvement Suggestions */}
          <div className="feature-card flex p-4  w-1/4 md:w-1/2">
            <a href="/question/two-sum">
              <div className="feature-content bg-white border border-gray-200 rounded-lg hover:border-transparent hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <div className="feature-icon p-3 mx-4 mt-4 bg-gradient-to-r from-violet-500 to-indigo-500 text-white rounded-full inline-block text-4xl">
                  <FaRegKeyboard />
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-3xl font-bold mb-2 text-gray-900 hover:text-violet-600 transition duration-300 ease-in-out">
                    Adobe
                  </h3>
                  <p className="text-gray-600 text-left mb-4">
                    Start your interview with Adobe and experience:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    <li>
                      <span className="font-bold text-violet-600">
                        Real-time coding challenges
                      </span>{" "}
                      designed to test your problem-solving skills.
                    </li>
                    <li>
                      <span className="font-bold text-violet-600">
                        In-depth technical questions
                      </span>{" "}
                      crafted to evaluate your knowledge.
                    </li>
                    <li>
                      <span className="font-bold text-violet-600">
                        Interactive assessments
                      </span>{" "}
                      that simulate actual interview scenarios.
                    </li>
                  </ul>
                  <p className="text-gray-600 text-left mb-4">
                    Prepare to engage dynamically with problems that reflect the
                    challenges you'll face in a real interview.
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Feature 4: Performance Analysis Dashboard */}
          <div className="feature-card flex p-4  w-1/4 md:w-1/2">
            <a href="/question/two-sum">
              <div className="feature-content bg-white border border-gray-200 rounded-lg hover:border-transparent hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <div className="feature-icon p-3 mx-4 mt-4 bg-gradient-to-r from-violet-500 to-indigo-500 text-white rounded-full inline-block text-4xl">
                  <FaRegKeyboard />
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-3xl font-bold mb-2 text-gray-900 hover:text-violet-600 transition duration-300 ease-in-out">
                    Adobe
                  </h3>
                  <p className="text-gray-600 text-left mb-4">
                    Start your interview with Adobe and experience:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    <li>
                      <span className="font-bold text-violet-600">
                        Real-time coding challenges
                      </span>{" "}
                      designed to test your problem-solving skills.
                    </li>
                    <li>
                      <span className="font-bold text-violet-600">
                        In-depth technical questions
                      </span>{" "}
                      crafted to evaluate your knowledge.
                    </li>
                    <li>
                      <span className="font-bold text-violet-600">
                        Interactive assessments
                      </span>{" "}
                      that simulate actual interview scenarios.
                    </li>
                  </ul>
                  <p className="text-gray-600 text-left mb-4">
                    Prepare to engage dynamically with problems that reflect the
                    challenges you'll face in a real interview.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* New shit */}

        <div className="flex flex-row m-3">
          {/* Feature 1: Interactive Practice Sessions */}
          <div className="feature-card flex p-4  w-1/4 md:w-1/2">
            <a href="/question/two-sum">
              <div className="feature-content bg-white border border-gray-200 rounded-lg hover:border-transparent hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <div className="feature-icon p-3 mx-4 mt-4 bg-gradient-to-r from-violet-500 to-indigo-500 text-white rounded-full inline-block text-4xl">
                  <FaRegKeyboard />
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-3xl font-bold mb-2 text-gray-900 hover:text-violet-600 transition duration-300 ease-in-out">
                    Adobe
                  </h3>
                  <p className="text-gray-600 text-left mb-4">
                    Start your interview with Adobe and experience:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    <li>
                      <span className="font-bold text-violet-600">
                        Real-time coding challenges
                      </span>{" "}
                      designed to test your problem-solving skills.
                    </li>
                    <li>
                      <span className="font-bold text-violet-600">
                        In-depth technical questions
                      </span>{" "}
                      crafted to evaluate your knowledge.
                    </li>
                    <li>
                      <span className="font-bold text-violet-600">
                        Interactive assessments
                      </span>{" "}
                      that simulate actual interview scenarios.
                    </li>
                  </ul>
                  <p className="text-gray-600 text-left mb-4">
                    Prepare to engage dynamically with problems that reflect the
                    challenges you'll face in a real interview.
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Feature 2: Real-time Feedback and Guidance */}
          <div className="feature-card flex p-4  w-1/4 md:w-1/2">
            <a href="/question/two-sum">
              <div className="feature-content bg-white border border-gray-200 rounded-lg hover:border-transparent hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <div className="feature-icon p-3 mx-4 mt-4 bg-gradient-to-r from-violet-500 to-indigo-500 text-white rounded-full inline-block text-4xl">
                  <FaRegKeyboard />
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-3xl font-bold mb-2 text-gray-900 hover:text-violet-600 transition duration-300 ease-in-out">
                    Adobe
                  </h3>
                  <p className="text-gray-600 text-left mb-4">
                    Start your interview with Adobe and experience:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    <li>
                      <span className="font-bold text-violet-600">
                        Real-time coding challenges
                      </span>{" "}
                      designed to test your problem-solving skills.
                    </li>
                    <li>
                      <span className="font-bold text-violet-600">
                        In-depth technical questions
                      </span>{" "}
                      crafted to evaluate your knowledge.
                    </li>
                    <li>
                      <span className="font-bold text-violet-600">
                        Interactive assessments
                      </span>{" "}
                      that simulate actual interview scenarios.
                    </li>
                  </ul>
                  <p className="text-gray-600 text-left mb-4">
                    Prepare to engage dynamically with problems that reflect the
                    challenges you'll face in a real interview.
                  </p>
                </div>
              </div>
            </a>
          </div>
          {/* Feature 3: Personalized Scoring and Improvement Suggestions */}
          <div className="feature-card flex p-4  w-1/4 md:w-1/2">
            <a href="/question/two-sum">
              <div className="feature-content bg-white border border-gray-200 rounded-lg hover:border-transparent hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <div className="feature-icon p-3 mx-4 mt-4 bg-gradient-to-r from-violet-500 to-indigo-500 text-white rounded-full inline-block text-4xl">
                  <FaRegKeyboard />
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-3xl font-bold mb-2 text-gray-900 hover:text-violet-600 transition duration-300 ease-in-out">
                    Adobe
                  </h3>
                  <p className="text-gray-600 text-left mb-4">
                    Start your interview with Adobe and experience:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    <li>
                      <span className="font-bold text-violet-600">
                        Real-time coding challenges
                      </span>{" "}
                      designed to test your problem-solving skills.
                    </li>
                    <li>
                      <span className="font-bold text-violet-600">
                        In-depth technical questions
                      </span>{" "}
                      crafted to evaluate your knowledge.
                    </li>
                    <li>
                      <span className="font-bold text-violet-600">
                        Interactive assessments
                      </span>{" "}
                      that simulate actual interview scenarios.
                    </li>
                  </ul>
                  <p className="text-gray-600 text-left mb-4">
                    Prepare to engage dynamically with problems that reflect the
                    challenges you'll face in a real interview.
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Feature 4: Performance Analysis Dashboard */}
          <div className="feature-card flex p-4  w-1/4 md:w-1/2">
            <a href="/question/two-sum">
              <div className="feature-content bg-white border border-gray-200 rounded-lg hover:border-transparent hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <div className="feature-icon p-3 mx-4 mt-4 bg-gradient-to-r from-violet-500 to-indigo-500 text-white rounded-full inline-block text-4xl">
                  <FaRegKeyboard />
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-3xl font-bold mb-2 text-gray-900 hover:text-violet-600 transition duration-300 ease-in-out">
                    Adobe
                  </h3>
                  <p className="text-gray-600 text-left mb-4">
                    Start your interview with Adobe and experience:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    <li>
                      <span className="font-bold text-violet-600">
                        Real-time coding challenges
                      </span>{" "}
                      designed to test your problem-solving skills.
                    </li>
                    <li>
                      <span className="font-bold text-violet-600">
                        In-depth technical questions
                      </span>{" "}
                      crafted to evaluate your knowledge.
                    </li>
                    <li>
                      <span className="font-bold text-violet-600">
                        Interactive assessments
                      </span>{" "}
                      that simulate actual interview scenarios.
                    </li>
                  </ul>
                  <p className="text-gray-600 text-left mb-4">
                    Prepare to engage dynamically with problems that reflect the
                    challenges you'll face in a real interview.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <a
          href="#practice"
          className="bg-violet-500  hover:bg-violet-600 hover:shadow-md text-white text-center font-semibold py-3 px-6 mb-10 rounded-full transition duration-300 inline-block mx-auto"
        >
          Start Preparation
        </a>
      </div>
    </section>
  );
};

export default FeaturesSection;
