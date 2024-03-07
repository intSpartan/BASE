// components/HtmlQuiz.js
'use client'
import React, { useState, useEffect } from 'react';

import "./style.css"

import { useRouter } from 'next/navigation';

const HtmlQuiz = () => {
    const [examType, setExamType] = useState('HTML');
    const [selectedExamQuestions, setSelectedExamQuestions] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [savedAnswers, setSavedAnswers] = useState([]);
    const [yourAnswers, setYourAnswers] = useState([]);
    const [timePassed, setTimePassed] = useState(300);

    const router = useRouter();

    const htmlQuestions = [
        {
            question: 'Q1: the tag &lt;p&gt; is',
            choice1: 'block element',//
            choice2: 'inline element',
            choice3: 'inline-block element',
        },
        {
            question: 'Q2: what is the  compenents of the HTML structure ? :',
            choice1: '&lt;section&gt; and &lt;div&gt;',
            choice2: '&lt;head&gt; and &lt;body&gt;',//
            choice3: '&lt;form&gt; and &lt;table&gt;',
        },
        {
            question: 'Q3: what are the three types of lists ?',
            choice1: '&lt;ol&gt; &lt;ul&gt; &lt;dl&gt;',//
            choice2: '&lt;li&gt; &lt;tr&gt; &lt;td&gt;',
            choice3: '&lt;b&gt; &lt;i&gt; &lt;p&gt;',
        },
        {
            question: 'Q4: which is the right way to write the anchor tag?',
            choice1: '&lt; a href="url"  new&gt;',
            choice2: '&lt; a href="url" target="new"&gt;',
            choice3: '&lt;a href="url" target="_blank"&gt;',//
        },
        {
            question: 'Q5: which of these element are all &lt;table&gt; element?',
            choice1: '&lt;table&gt; &lt;tr&gt; &lt;tt&gt;',
            choice2: '&lt;table&gt; &lt;tr&gt; &lt;td&gt;',//
            choice3: '&lt;table&gt; &lt;head&gt; &lt;tfoot&gt;',
        },
        {
            question: 'Q6: How many types of heading does an HTML contain?',
            choice1: '8',
            choice2: '6',//
            choice3: '5',
        },
        {
            question: 'Q7: tags can be used to separate a section of texts',
            choice1: '&lt;br&gt; &lt;hr&gt;',//
            choice2: '&lt;br&gt; &lt;gt&gt;',
            choice3: '&lt;bd&gt; &lt;bl&gt;',
        },
        {
            question: 'Q8: What is the use of a span tag??',
            choice1: 'For adding color on specific text',
            choice2: 'For adding background on specific text',
            choice3: 'both',//
        },
        {
            question: 'Q9: a &lt;!DOCTYPE html&gt; tag is a HTML tag?',
            choice1: 'True',
            choice2: 'False',//
            choice3: 'depends on the situation',
        },
        {
            question: 'Q10: Which type of video formats are supported by HTML5?',
            choice1: 'mp4 WebM Ogg',//
            choice2: 'mp4 avi 3gp',
            choice3: 'mp4 3gp WebM',
        }
    ];

    const questionSets = {
        HTML: htmlQuestions,
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
                setSavedAnswers((prevAnswers) => [...prevAnswers, questionAns[j].value]);
                questionAns[j].checked = false;
            }
        }

        setQuestionIndex((prevIndex) => prevIndex + 1);

        if (questionIndex === 8 || timerInterval === 0) {
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

        router.push("/OA/editor");

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
