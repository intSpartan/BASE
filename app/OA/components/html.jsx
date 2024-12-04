// components/HtmlQuiz.js
'use client'
import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { useGlobalContext } from '../../GlobalContext';

const updateOAScoreList = async (applicant_id, jobId, score) => {
  // console.log(applicant_id);
  const res_jobs = await fetch(
    `http://localhost:3000/api/jobs/${jobId}/OA_scores`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ candidate_id: applicant_id, score: score }),
    }
  );
};


const HtmlQuiz = (props) => {
  // console.log(props.jobId);

  const [examType, setExamType] = useState('HTML');
  const [selectedExamQuestions, setSelectedExamQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [savedAnswers, setSavedAnswers] = useState([]);
  const [timePassed, setTimePassed] = useState(300);
  const [isOver, setIsOver] = useState(0);
  const state = useGlobalContext();

  // setCodingQuestions(jobInfo.coding_questions)

  // console.log(props.mcqs);


  const router = useRouter();

  const computerScienceQuestions = [
    // OOP (Object-Oriented Programming)
    {
      question: 'Q: What is the purpose of inheritance in OOP?',
      choice1: 'To create multiple instances of a class',
      choice2: 'To reuse code and establish a relationship between classes',
      choice3: 'To provide encapsulation for data',
      correctChoice: 2,
    },
    {
      question: 'Q: What is abstraction in OOP   ?',
      choice1: 'Hiding the implementation details and exposing only the necessary functionalities',
      choice2: 'Creating instances of a class',
      choice3: 'Using abstract data types',
      correctChoice: 1,
    },

    // Operating Systems
    {
      question: 'Q: What is a deadlock in operating systems?',
      choice1: 'A situation where a process is waiting for a resource that is held by another process',
      choice2: 'A process that is running indefinitely and not making progress',
      choice3: 'A state where two or more processes cannot proceed because each is waiting for the other to release a resource',
      correctChoice: 3,
    },
    {
      question: 'Q: What is a kernel in an operating system?',
      choice1: 'The central processing unit (CPU)',
      choice2: 'The core of the operating system that provides essential services',
      choice3: 'A type of file system',
      correctChoice: 2,
    },

    // DBMS (Database Management Systems)
    {
      question: 'Q: What is ACID in the context of database transactions?',
      choice1: 'A database query language',
      choice2: 'A set of properties that guarantee database transactions are processed reliably',
      choice3: 'A data encryption standard',
      correctChoice: 2,
    },
    {
      question: 'Q: What is the purpose of a JOIN operation in SQL?',
      choice1: 'To filter rows based on a condition',
      choice2: 'To combine rows from two or more tables based on a related column',
      choice3: 'To create a new table with specific columns',
      correctChoice: 2,
    },

    // Computer Networks
    {
      question: 'Q: What is the function of the Transport layer in the OSI model?',
      choice1: 'Ensuring error-free transmission of data',
      choice2: 'Establishing, maintaining, and terminating connections',
      choice3: 'Providing routing and forwarding of data packets',
      correctChoice: 2,
    },
    {
      question: 'Q: What is the purpose of DNS (Domain Name System) in networking?',
      choice1: 'Encrypting data during transmission',
      choice2: 'Translating domain names to IP addresses',
      choice3: 'Providing secure communication between network devices',
      correctChoice: 2,
    },

    // Data Structures and Algorithms
    {
      question: 'Q: What is a stack in data structures?',
      choice1: 'A data structure that follows the Last In, First Out (LIFO) principle',
      choice2: 'A data structure that follows the First In, First Out (FIFO) principle',
      choice3: 'A type of sorting algorithm',
      correctChoice: 1,
    },
    {
      question: 'Q: What is the time complexity of the quicksort algorithm in the average case?',
      choice1: 'O(1)',
      choice2: 'O(n log n)',
      choice3: 'O(n^2)',
      correctChoice: 2,
    },

    {
      question: 'Q: Explain the concept of a binary tree in data structures.',
      choice1: 'A tree with only one child node for each parent node',
      choice2: 'A tree with two child nodes for each parent node',
      choice3: 'A tree with no child nodes',
      correctChoice: 2,
    },

    {
      question: 'Q: What is the purpose of the SELECT statement in SQL?',
      choice1: 'To insert data into a table',
      choice2: 'To retrieve data from one or more tables',
      choice3: 'To update existing data in a table',
      correctChoice: 2,
    },

    {
      question: 'Q: How does TCP (Transmission Control Protocol) ensure reliable communication?',
      choice1: 'By using checksums to detect errors in transmitted data',
      choice2: 'By providing flow control and error checking',
      choice3: 'By encrypting the data during transmission',
      correctChoice: 2,
    },

    {
      question: 'Q: What is a binary search tree, and how does it differ from a binary tree?',
      choice1: 'A binary search tree is always balanced, while a binary tree may not be balanced',
      choice2: 'A binary search tree is a specific type of binary tree that follows a particular ordering property',
      choice3: 'A binary tree is always complete, while a binary search tree may not be complete',
      correctChoice: 2,
    },

    {
      question: 'Q: Explain the concept of normalization in database design.',
      choice1: 'Ensuring that all data in a database is stored in a single table',
      choice2: 'Organizing data to minimize redundancy and dependency',
      choice3: 'Adding redundancy to improve query performance',
      correctChoice: 2,
    },

  ];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(computerScienceQuestions)
  const questionSets = {
    HTML: computerScienceQuestions,
  };

  const [timerInterval, setTimerInterval] = useState(0);

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimePassed((time) => time - 1);
    }, 1000);

    setTimerInterval(interval);

    return interval;
  };

  const onTimesUp = () => {
    alert("Time's up! Submitting the quiz.");
    handleSubmit();
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  };

  const setRemainingPathColor = (timeLeft) => {
    const alertThreshold = 30;
    const warningThreshold = 60;

    if (timeLeft <= alertThreshold) {
      // Set color for alert
      return 'red';
    } else if (timeLeft <= warningThreshold) {
      // Set color for warning
      return 'orange';
    } else {
      return 'green';
    }
  };

  const calculateTimeFraction = () => {
    const timeLimit = 300;
    return (timeLimit - timePassed) / timeLimit;
  };

  const setCircleDasharray = () => {
    const fullDashArray = 283;
    const circleDasharray = `${(calculateTimeFraction() * fullDashArray).toFixed(0)} 283`;
    return circleDasharray;
  };


  const prevQuestion = () => {
    console.log(selectedExamQuestions)
    if (questionIndex > 0) {
      setQuestionIndex((prevIndex) => prevIndex - 1);
      const previouslySelectedAnswer = parseInt(savedAnswers[questionIndex - 1], 10);
        const answerElements = document.getElementsByName("radio");
      console.log(savedAnswers)
      console.log(previouslySelectedAnswer)
      if(previouslySelectedAnswer){
        answerElements[previouslySelectedAnswer - 1].checked = true;
      }
      else{
        for(let j = 0; j < answerElements.length; j++ ){
          answerElements[j].checked = false;
        }
      }
    } else {
      console.log("No previous questions");
    }
  };

  const nextQuestion = () => {
    console.log(selectedExamQuestions)
    console.log("saved:",savedAnswers)
    const questionAns = document.getElementsByName('radio');
    const previouslySelectedAnswer = parseInt(savedAnswers[questionIndex], 10);
    if(previouslySelectedAnswer){
      questionAns[previouslySelectedAnswer - 1].checked = true;
    }
    let answerSelected = false;

    for (let j = 0; j < questionAns.length; j++) {
        if (questionAns[j].checked) {
            const selectedAnswer = parseInt(questionAns[j].value, 10);
            setSavedAnswers(prevAnswers => {
                const newAnswers = [...prevAnswers];
                newAnswers[questionIndex] = questionAns[j].value; // Save the selected answer for the current question index
                return newAnswers;
            });
            // if (selectedAnswer === selectedExamQuestions[questionIndex].correctChoice) {
            //     setCorrectAnswersCount(count => count + 1);
            // }
            answerSelected = true;
            questionAns[j].checked = false; // Uncheck the radio button after processing
            break;
        }
    }

    if(savedAnswers[questionIndex+1] && savedAnswers[questionIndex+1] != 0){
      console.log("questionIndex:",questionIndex + 1)
      questionAns[savedAnswers[questionIndex+1] - 1].checked = true;
    }

    if (!answerSelected) {
        setSavedAnswers(prevAnswers => {
            const newAnswers = [...prevAnswers];
            newAnswers[questionIndex] = '0'; // Record '0' as the answer indicating no selection
            return newAnswers;
        });
    }

    setQuestionIndex((prevIndex) => prevIndex + 1);

    if (questionIndex === (props.mcqs - 1) || timerInterval === 0) {
      clearInterval(timerInterval);
      setIsOver(1);
      onTimesUp();
    } else {
      const currentQuestion = selectedExamQuestions[questionIndex];
      setQuestion(currentQuestion);
    }
    console.log(questionIndex)
  };

  const setQuestion = (currentQuestion) => {
    const questionDiv = document.getElementById("questionDiv");
    const questionElem = document.getElementById("question");
    const answer1Elem = document.getElementById("spanAns1");
    const answer2Elem = document.getElementById("spanAns2");
    const answer3Elem = document.getElementById("spanAns3");

    questionElem.innerHTML = currentQuestion.question;
    answer1Elem.innerHTML = currentQuestion.choice1;
    answer2Elem.innerHTML = currentQuestion.choice2;
    answer3Elem.innerHTML = currentQuestion.choice3;

    // const baseTimerPathRemaining = document.getElementById("base-timer-path-remaining");
    // baseTimerPathRemaining.style.stroke = setRemainingPathColor(timePassed);
    // baseTimerPathRemaining.setAttribute("stroke-dasharray", setCircleDasharray());
  };

  const handleSubmit = () => {
    const questionDiv = document.getElementById("questionDiv");
    questionDiv.style.display = 'none';
    let correctAnswersCount = 0;

    savedAnswers.forEach((answer, index) => {
      // Check if the answer is correct
      if (parseInt(answer, 10) === selectedExamQuestions[index].correctChoice) {
        correctAnswersCount++; // Increment the count for each correct answer
      }
    });

    localStorage.setItem("Answers", JSON.stringify(savedAnswers));
    const showResultBtn = document.getElementById('showResult');
    showResultBtn.style.display = 'block';
    // document.getElementById("result").innerText = `Your score is : ${correctAnswersCount}`
    console.log(timerInterval)
    clearInterval(timerInterval);
    // console.log(correctAnswersCount);

    updateOAScoreList(state.state.entity_id, props.jobId, correctAnswersCount)
    router.push(`/OA/${props.jobId}/coding`);

  };

  useEffect(()=>{
    if(isOver) {
      clearInterval(timerInterval);
    }
    console.log("over")
  }, [isOver])

  useEffect(() => {
    const selectedQuestions = questionSets[examType];
    if(selectedExamQuestions.length == 0){
        setSelectedExamQuestions(selectedQuestions);
    } else {
      setQuestion(selectedExamQuestions[questionIndex]);
      if(!isOver){
        console.log("started")
        const timerInterval = startTimer();
      }
      return () => {
        clearInterval(timerInterval);
      };
    }
  }, [examType, questionIndex, selectedExamQuestions]);

  return (
    <>
      <div className="max-w-4xl mx-auto mt-10 p-5 bg-gray-100 rounded-lg shadow-lg" id="questionDiv">
        <div className="text-lg font-semibold mb-4" id="question">{/* Question text here */}</div>
        <form className="space-y-4">
          <label className="flex items-center">
            <input type="radio" name="radio" className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500" value={1} />
            <span className="ml-2 text-gray-700" id="spanAns1">{/* Answer 1 text */}</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="radio" className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500" value={2} />
            <span className="ml-2 text-gray-700" id="spanAns2">{/* Answer 2 text */}</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="radio" className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500" value={3} />
            <span className="ml-2 text-gray-700" id="spanAns3">{/* Answer 3 text */}</span>
          </label>
        </form>
        <div className="flex items-center justify-between mt-6">
          <button className="text-white bg-red-600 hover:bg-red-800 font-semibold py-2 px-4 rounded transition duration-150 ease-in-out" onClick={prevQuestion}>
            Previous
          </button>
          <button className="text-white bg-blue-600 hover:bg-blue-800 font-semibold py-2 px-4 rounded transition duration-150 ease-in-out" onClick={nextQuestion}>
            Next
          </button>
        </div>
      </div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button id="showResult" className="bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded mt-4 mx-auto block transition duration-150 ease-in-out" onClick={handleSubmit}>
              Show Result
            </Disclosure.Button>
            <div className="text-gray-600 text-center mt-5 font-bold" id="result">
            </div>
          </>
        )}
      </Disclosure>
      <div className="relative pt-1 px-10">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-300">
              {formatTime(timePassed)}
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-blue-700">
              {Math.round(timePassed / 300 * 100)}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-300">
          <div style={{ width: `${Math.round(timePassed / 300 * 100)}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
        </div>
      </div>
    </>
  );
};

export default HtmlQuiz;
