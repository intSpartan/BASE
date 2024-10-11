import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Editor from '@monaco-editor/react';

import Header from "./(components)/Header";

export default function Home() {
    const [code, setCode] = useState<string>("");
    const [problemId, setProblemId] = useState<string>("");
    const [question, setQuestion] = useState<string>("");
    const [showStartModal, setShowStartModal] = useState<boolean>(true);
    const [newSentence, setNewSentence] = useState<string>("");
    const [waitingForResponse, setWaitingForResponse] = useState<boolean>(false);
    const [conversation, setConversation] = useState<any[]>([
        {
            role: "interviewer",
            message: "Hello! Are you ready to get started with the interview?"
        }
    ]); 
    const { id } = useRouter().query;

    useEffect(() => {
        if (id) {
            setProblemId(id as string);
        }
    }, [id]);

    const getCode = () => {
        // @ts-ignore
        return window.code ?? ""
    }

    const handleEditorChange = (newValue: string) => {
        // @ts-ignore
        window.code = newValue;
    };

    const sayOutLoud = (message: string, recognition: any) => {
        if (message === "SAY_NOTHING") {
            message = "Okay"
        }

        const synth = window.speechSynthesis;
        const utterThis = new SpeechSynthesisUtterance(message);
        // pause recognition while speaking
        if (recognition) {
            recognition.stop();
        }
        synth.speak(utterThis);
        utterThis.onend = () => {
            try {
                if (recognition) {
                    recognition.start();
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    const editorOptions = {
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        cursorStyle: 'line' as 'line',
        automaticLayout: true,
    };

    function wait(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const getQuestionText = async (id: string) => {
        const response = await fetch(`http://localhost:8000/getQuestion/${id}`);
        const data = await response.json();
        await wait(3000); 
        setQuestion(data.question_content);
    }

    

    useEffect(() => {
        let conversation = [
            {
                role: "interviewer",
                message: "Hello! Are you ready to get started with the interview?"
            }
        ]

        const urlPathParams = window.location.pathname.split("/");
        const id = urlPathParams[urlPathParams.length - 1];

        // console.log(id);

        const whenSentenceSpoken = (sentence: string, id: string, code: string, recognition: any) => {
            const stateEntry = {
                role: "interviewee",
                message: sentence,
                codeEdditor: getCode(),
                highlight: ""
            }
            conversation = [...conversation, stateEntry];
            const payload = {
                codeEdditorContents: getCode(),
                speech: sentence,
                state: conversation,
                company: "google",
                problem: id
            }
            console.log(payload);
            setWaitingForResponse(true);
            fetch("http://localhost:8000/getNextStep", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            }).then(res => res.json()).then(data => {
                const stateEntry = {
                    role: "interviewer",
                    message: data.message
                }
                conversation = [...conversation, stateEntry];
                setWaitingForResponse(false);
                sayOutLoud(data.message, recognition);
                console.log(conversation);
            });
        }
        // @ts-ignore
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-US";

        recognition.start();


        recognition.onresult = (event: any) => {
            const sentence = event.results[event.results.length - 1][0].transcript;
            if (event.results[event.results.length - 1].isFinal) {
                whenSentenceSpoken(sentence, id as string, code, recognition);
            }
        }
    }, []);

    useEffect(() => {
        if (id) {
            getQuestionText(id as string);
        }
    }, [id]);


    
    

    // useEffect(() => {
    //     whenSentenceSpoken(newSentence, id as string, code);
    // }, [newSentence]);

    const utterOpeningMessage = () => {
        sayOutLoud("Hello! Are you ready to get started with the interview?", undefined);
    }

    return <>
        {
            showStartModal && (
                <div className="min-h-screen w-screen z-10 flex items-center justify-center bg-neutral-100 opacity-90 absolute top-0 left-0">
                    <button onClick={e => { setShowStartModal(false), utterOpeningMessage() }} className="text-bold text-2xl text-neutral-200 px-6 py-4 bg-green-700 rounded-2xl">
                        Get Started
                    </button>
                </div>
            )
        }
        <div className="min-h-screen flex flex-col bg-neutral-100">
            <Header />
            <div className="flex-grow flex px-12">
                <div className="w-1/2 flex flex-col bg-neutral-100 p-6 rounded-2xl border border-neutral-500 mr-2">
                    <div className="flex items-center">
                        <div className="text-3xl font-bold text-neutral-700 mb-5">Problem: {((id ?? "") as string).split("-").map(word => word.at(0)?.toUpperCase() + word.substring(1, word.length)).join(" ")}</div>
                        <div className="ml-auto">
                            {
                                waitingForResponse && <div className="h-6 w-6 border-b border-b-neutral-800 animate-spin rounded-full mb-4 duration-300"></div>
                            }
                        </div>
                    </div>
                    <Markdown
                        remarkPlugins={[remarkGfm]}
                        className="prose"
                    >{question}</Markdown>
                </div>
                <div className="w-1/2 bg-neutral-900 ml-2 p-6 rounded-2xl">
                    <Editor
                        language="python"
                        theme="vs-dark"
                        value={code}
                        options={editorOptions}
                        onChange={string => handleEditorChange(string as string)}
                    />
                </div>
            </div>
        </div>
    </>
}