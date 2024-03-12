// components/HtmlQuiz.js
'use client'
import React, { useState, useEffect } from 'react';

import "./style.css"

import { useRouter } from 'next/navigation';
import { useGlobalContext } from '@/app/GlobalContext';

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
    const [yourAnswers, setYourAnswers] = useState([]);
    const [timePassed, setTimePassed] = useState(300);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
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
        clearInterval(timerInterval);
        // Handle times up, e.g., show result
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

    const nextQuestion = () => {

        const SpecifiedQuestions = selectedExamQuestions;
        const questionAns = document.getElementsByName('radio');

        for (let j = 0; j < questionAns.length; j++) {
            if (questionAns[j].checked) {
                const selectedAnswer = parseInt(questionAns[j].value, 10);
                setSavedAnswers((prevAnswers) => [...prevAnswers, questionAns[j].value]);
                if (selectedAnswer === selectedExamQuestions[questionIndex].correctChoice) {
                    setCorrectAnswersCount((count) => count + 1);
                }

                questionAns[j].checked = false;
            }
        }

        setQuestionIndex((prevIndex) => prevIndex + 1);

        if (questionIndex === (props.mcqs - 1) || timerInterval === 0) {
            onTimesUp();
        } else {
            const currentQuestion = SpecifiedQuestions[questionIndex];
            setQuestion(currentQuestion);
        }
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

        const baseTimerPathRemaining = document.getElementById("base-timer-path-remaining");
        baseTimerPathRemaining.style.stroke = setRemainingPathColor(timePassed);
        baseTimerPathRemaining.setAttribute("stroke-dasharray", setCircleDasharray());
    };

    const handleSubmit = () => {
        const questionDiv = document.getElementById("questionDiv");
        questionDiv.style.display = 'none';

        for (let i = 0; i < 10; i++) {
            let a = Object.values(selectedExamQuestions[i]);
            yourAnswers.push(a[savedAnswers[i]]);
        }
        console.log(yourAnswers);
        localStorage.setItem("Answers", JSON.stringify(savedAnswers));
        localStorage.setItem("yourAnswers", JSON.stringify(yourAnswers));
        // Show result button
        const showResultBtn = document.getElementById('showResult');
        showResultBtn.style.display = 'block';
        // console.log(correctAnswersCount);

        updateOAScoreList(state.state.entity_id, props.jobId, correctAnswersCount)
        router.push(`/OA/${props.jobId}/coding`);

    };

    useEffect(() => {
        const selectedQuestions = questionSets[examType];
        setSelectedExamQuestions(selectedQuestions);
        setQuestion(selectedQuestions[questionIndex]);

        const timerInterval = startTimer();

        return () => {
            clearInterval(timerInterval);
        };
    }, [examType, questionIndex]);

    return (
        <>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html: "\n    /* Paste your CSS code here */\n    /* ... */\n  "
                }}
            />
            <title>questions</title>
            <div id="app" />
            <div className="container mt-sm-5 my-1">
                <div className="question ml-sm-5 pl-sm-5 pt-2" id="questionDiv">
                    <div className="py-2 h5">
                        <b id="question" />
                    </div>
                    <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                        <label className="options" id="answer1">
                            <input type="radio" name="radio" defaultValue={1} />{" "}
                            <span className="checkmark" />
                            <span id="spanAns1" />
                        </label>
                        <label className="options" id="answer2">
                            <input type="radio" name="radio" defaultValue={2} />{" "}
                            <span className="checkmark" />
                            <span id="spanAns2" />
                        </label>
                        <label className="options" id="answer3">
                            <input type="radio" name="radio" defaultValue={3} />{" "}
                            <span className="checkmark" />
                            <span id="spanAns3" />
                        </label>
                    </div>
                    <div className="d-flex align-items-center pt-3">
                        <div className="ml-auto mr-sm-5">
                            {" "}
                            <button
                                className="btn btn-success"
                                onClick={nextQuestion}
                                id="btnNext"
                            >
                                Next
                            </button>{" "}
                        </div>
                    </div>
                </div>
                <div className="ml-auto mr-sm-5" id="showResult" style={{ display: 'none' }}>
                    {" "}
                    <button className="btn btn-success" onClick={handleSubmit}>
                        Show Result
                    </button>{" "}
                </div>
            </div>
            <div className="base-timer">
                <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <g className="base-timer__circle">
                        <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
                        <path
                            id="base-timer-path-remaining"
                            strokeDasharray="283"
                            className="base-timer__path-remaining"
                            style={{ stroke: setRemainingPathColor(timePassed) }}
                            d="
                        M 50, 50
                        m -45, 0
                        a 45,45 0 1,0 90,0
                        a 45,45 0 1,0 -90,0
                    "
                        ></path>
                    </g>
                </svg>
                <span id="base-timer-label" className="base-timer__label">
                    {formatTime(timePassed)}
                </span>
            </div>
        </>
    );
};

export default HtmlQuiz;
