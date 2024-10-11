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

  const questions = [
    // Easy Problems (10)
    "two-sum",
    "reverse-linked-list",
    "valid-parentheses",
    "merge-two-sorted-lists",
    "maximum-subarray",
    "best-time-to-buy-and-sell-stock",
    "symmetric-tree",
    "fizz-buzz",
    "climbing-stairs",
    "intersection-of-two-linked-lists",

    // Medium Problems (25)
    "add-two-numbers",
    "longest-substring-without-repeating-characters",
    "3sum",
    "container-with-most-water",
    "group-anagrams",
    "decode-ways",
    "binary-tree-inorder-traversal",
    "search-in-rotated-sorted-array",
    "top-k-frequent-elements",
    "longest-palindromic-substring",
    "minimum-window-substring",
    "valid-sudoku",
    "rotate-list",
    "word-search",
    "subarray-sum-equals-k",
    "coin-change",
    "combination-sum",
    "unique-paths",
    "letter-combinations-of-a-phone-number",
    "product-of-array-except-self",
    "happy-number",
    "find-peak-element",
    "string-to-integer-atoi",
    "merge-intervals",
    "binary-tree-level-order-traversal",

    // Hard Problems (15)
    "median-of-two-sorted-arrays",
    "n-queens",
    "regular-expression-matching",
    "first-missing-positive",
    "trapping-rain-water",
    "wildcard-matching",
    "longest-valid-parentheses",
    "maximum-length-of-repeated-subarray",
    "insert-interval",
    "minimum-path-sum",
    "word-ladder",
    "largest-rectangle-in-histogram",
    "palindrome-partitioning",
    "number-of-islands",
    "3sum-closest",
  ];

  const companies = [
    {
      name: "Adobe",
      heading1: "Start your interview with Adobe and experience:",
      heading2: "Real-time coding challenges",
      content2: "designed to test your problem-solving skills and data structure knowledge.",
      heading3: "In-depth technical questions",
      content3: "crafted to evaluate your knowledge and decision making ability.",
      heading4: "Interactive assessments",
      content4: "that simulate actual interview scenarios and help to assess better.",
      content5:
        "Prepare to engage dynamically with problems that reflect the challenges you'll face in a real interview.",
    },
    {
      name: "Oracle",
      heading1: "Start your interview with Oracle and experience:",
      heading2: "Real-time coding challenges",
      content2:
        "designed to test your problem-solving and algorithmic thinking.",
      heading3: "In-depth technical questions",
      content3:
        "crafted to evaluate your knowledge of databases, systems, and enterprise software.",
      heading4: "Interactive assessments",
      content4: "that simulate complex enterprise-level scenarios and give real life examples.",
      content5:
        "Prepare to tackle challenges focused on large-scale, high-performance systems and databases.",
    },
    {
      name: "Intuit",
      heading1: "Start your interview with Intuit and experience:",
      heading2: "Real-time coding challenges",
      content2:
        "focused on data structures, algorithms, and business logic problems.",
      heading3: "In-depth technical questions",
      content3:
        "tailored to evaluate your understanding of financial software solutions.",
      heading4: "Interactive assessments",
      content4: "mimicking scenarios from actual software development cycles.",
      content5:
        "Engage with questions designed to reflect challenges in building scalable, user-centric financial platforms.",
    },
    {
      name: "Samsung",
      heading1: "Start your interview with Samsung and experience:",
      heading2: "Real-time coding challenges",
      content2:
        "focusing on embedded systems, software optimization, and innovation.",
      heading3: "In-depth technical questions",
      content3:
        "crafted to gauge your expertise in hardware-software integration and mobile technologies.",
      heading4: "Interactive assessments",
      content4:
        "designed to mirror real-world hardware and software interaction challenges.",
      content5:
        "Prepare to solve complex problems related to the development of cutting-edge consumer electronics.",
    },
    {
      name: "Microsoft",
      heading1: "Start your interview with Microsoft and experience:",
      heading2: "Real-time coding challenges",
      content2:
        "designed to test your problem-solving skills in cloud, AI, and enterprise software.",
      heading3: "In-depth technical questions",
      content3:
        "evaluating your knowledge of distributed systems, scalability, and software architecture.",
      heading4: "Interactive assessments",
      content4:
        "that simulate large-scale software design and architecture challenges.",
      content5:
        "Engage with real-world problems reflecting the demands of Microsoft’s global-scale platforms and services.",
    },
    {
      name: "Morgan Stanley",
      heading1: "Start your interview with Morgan Stanley and experience:",
      heading2: "Real-time coding challenges",
      content2:
        "focused on algorithms and systems used in financial technology.",
      heading3: "In-depth technical questions",
      content3:
        "crafted to test your understanding of risk analysis, trading systems, and data-driven decision-making.",
      heading4: "Interactive assessments",
      content4:
        "that replicate the fast-paced and critical thinking required in the financial services industry.",
      content5:
        "Prepare for high-stakes problems reflecting the operational demands of global finance and trading systems.",
    },
  ];

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
          {companies.slice(0, 3).map((company, index) => (
            <div className="feature-card flex p-4  w-1/4 md:w-1/2">
              <a href={`/question/${questions[Math.floor(Math.random() * questions.length)]}`}>
                <div className="feature-content bg-white border border-gray-200 rounded-lg hover:border-transparent hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  <div className="feature-icon p-3 mx-4 mt-4 bg-gradient-to-r from-violet-500 to-indigo-500 text-white rounded-full inline-block text-4xl">
                    <FaRegKeyboard />
                  </div>
                  <div className="px-6 py-4">
                    <h3 className="text-3xl font-bold mb-2 text-gray-900 hover:text-violet-600 transition duration-300 ease-in-out">
                      {company.name}
                    </h3>
                    <p className="text-gray-600 text-left mb-4">
                      {company.heading1}
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                      <li>
                        <span className="font-bold text-violet-600">
                          {company.heading2}
                        </span>{" "}
                        {company.content2}
                      </li>
                      <li>
                        <span className="font-bold text-violet-600">
                          {company.heading3}
                        </span>{" "}
                        {company.content3}
                      </li>
                      <li>
                        <span className="font-bold text-violet-600">
                          {company.heading4}
                        </span>{" "}
                        {company.content4}
                      </li>
                    </ul>
                    <p className="text-gray-600 text-left mb-4">
                      {company.content5}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}

          {/* Feature 2: Real-time Feedback and Guidance */}
        </div>
        {/* New shit */}

        <div className="flex flex-row m-3">
          {/* Feature 1: Interactive Practice Sessions */}
          {companies.slice(3, 6).map((company, index) => (
            <div className="feature-card flex p-4  w-1/4 md:w-1/2">
              <a href={`/question/${questions[Math.floor(Math.random() * questions.length)]}`}>
                <div className="feature-content bg-white border border-gray-200 rounded-lg hover:border-transparent hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  <div className="feature-icon p-3 mx-4 mt-4 bg-gradient-to-r from-violet-500 to-indigo-500 text-white rounded-full inline-block text-4xl">
                    <FaRegKeyboard />
                  </div>
                  <div className="px-6 py-4">
                    <h3 className="text-3xl font-bold mb-2 text-gray-900 hover:text-violet-600 transition duration-300 ease-in-out">
                      {company.name}
                    </h3>
                    <p className="text-gray-600 text-left mb-4">
                      {company.heading1}
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                      <li>
                        <span className="font-bold text-violet-600">
                          {company.heading2}
                        </span>{" "}
                        {company.content2}
                      </li>
                      <li>
                        <span className="font-bold text-violet-600">
                          {company.heading3}
                        </span>{" "}
                        {company.content3}
                      </li>
                      <li>
                        <span className="font-bold text-violet-600">
                          {company.heading4}
                        </span>{" "}
                        {company.content4}
                      </li>
                    </ul>
                    <p className="text-gray-600 text-left mb-4">
                      {company.content5}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
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
