"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Editor from '@monaco-editor/react'
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../../../../../../../components/ui/card"
import { Button } from "../../../../../../..//components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "../../../../../../../components/ui/dialog"
import { Progress } from "../../../../../../../components/ui/progress"
import Header from "../(components)/Header"

export default function Home({ params }) {
    const [code, setCode] = useState<string>("")
    const [problemId, setProblemId] = useState<string>("")
    const [question, setQuestion] = useState<string>("")
    const [showStartModal, setShowStartModal] = useState<boolean>(true)
    const [newSentence, setNewSentence] = useState<string>("")
    const [waitingForResponse, setWaitingForResponse] = useState<boolean>(false)
    const [conversation, setConversation] = useState<any[]>([
        {
            role: "interviewer",
            message: "Hello! Are you ready to get started with the interview?"
        }
    ])
    const [timeLeft, setTimeLeft] = useState<number>(10)
    const [showFeedbackModal, setShowFeedbackModal] = useState<boolean>(false)
    const [feedback, setFeedback] = useState<string>("")
    const [metrics, setMetrics] = useState<{ [key: string]: number }>({})
    const { id } = params

    useEffect(() => {
        if (params.id) {
            setProblemId(params.id as string)
        }   
    }, [params.id])

    const getCode = useCallback(() => {
        // @ts-ignore
        return window.code ?? ""
    }, [])

    const handleEditorChange = (newValue: string) => {
        // @ts-ignore
        window.code = newValue
    }

    const sayOutLoud = useCallback((message: string, recognition: any) => {
        if (message === "SAY_NOTHING") {
            message = "Okay"
        }

        const synth = window.speechSynthesis
        const utterThis = new SpeechSynthesisUtterance(message)
        if (recognition) {
            recognition.stop()
        }
        synth.speak(utterThis)
        utterThis.onend = () => {
            try {
                if (recognition) {
                    recognition.start()
                }
            } catch (error) {
                console.log(error)
            }
        }
    }, [])

    const editorOptions = {
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        cursorStyle: 'line' as 'line',
        automaticLayout: true,
    }

    const getQuestionText = useCallback(async (id: string) => {
        const response = await fetch(`http://localhost:8000/getQuestion/${id}`)
        const data = await response.json()
        setQuestion(data.question_content.replace(/&#39;/g, "'"))
    }, [])

    useEffect(() => {
        if (params.id) {
            getQuestionText(params.id as string)
        }
    }, [params.id, getQuestionText])

    useEffect(() => {
        let conversation = [
            {
                role: "interviewer",
                message: "Hello! Are you ready to get started with the interview?"
            }
        ]

        const urlPathParams = window.location.pathname.split("/")
        const id = urlPathParams[urlPathParams.length - 1]

        const whenSentenceSpoken = (sentence: string, id: string, code: string, recognition: any) => {
            const stateEntry = {
                role: "interviewee",
                message: sentence,
                codeEdditor: getCode(),
                highlight: ""
            }
            conversation = [...conversation, stateEntry]
            const payload = {
                codeEdditorContents: getCode(),
                speech: sentence,
                state: conversation,
                company: "google",
                problem: params.id
            }
            setWaitingForResponse(true)
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
                conversation = [...conversation, stateEntry]
                setWaitingForResponse(false)
                sayOutLoud(data.message, recognition)
            })
        }

        // @ts-ignore
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
        const recognition = new SpeechRecognition()
        recognition.continuous = true
        recognition.interimResults = true
        recognition.lang = "en-US"

        recognition.start()

        recognition.onresult = (event: any) => {
            const sentence = event.results[event.results.length - 1][0].transcript
            if (event.results[event.results.length - 1].isFinal) {
                whenSentenceSpoken(sentence, id as string, code, recognition)
            }
        }

        return () => {
            recognition.stop()
        }
    }, [code, getCode, params.id, sayOutLoud])

    useEffect(() => {
        if (!showStartModal && timeLeft > 0) {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1)
            }, 1000)
            return () => clearTimeout(timer)
        } else if (timeLeft === 0) {
            endInterview()
        }
    }, [showStartModal, timeLeft])

    const endInterview = () => {
        setShowFeedbackModal(true)
        // Here you would typically make an API call to get the feedback and metrics
        // For this example, we'll use mock data
        setFeedback("Great job! You demonstrated good problem-solving skills and communicated your thoughts clearly.")
        setMetrics({
            technicalSkills: 1,
            communicationSkills: 2,
            problemSolving: 0,
            codeQuality: 0,
        })
    }

    const utterOpeningMessage = useCallback(() => {
        sayOutLoud("Hello! Are you ready to get started with the interview?", undefined)
    }, [sayOutLoud])

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            {showStartModal && (
                <Dialog open={showStartModal} onOpenChange={setShowStartModal}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Start Interview</DialogTitle>
                            <DialogDescription>
                                Are you ready to begin the AI interview? You will have 10 seconds to complete the interview.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button onClick={() => { setShowStartModal(false); utterOpeningMessage() }}>
                                Start Interview
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
            <div className="flex-grow flex px-6 py-6">
                <Card className="w-1/2 mr-3">
                    <CardHeader>
                        <CardTitle>Problem: {((params.id ?? "") as string).split("-").map(word => word.at(0)?.toUpperCase() + word.substring(1)).join(" ")}</CardTitle>
                        <CardDescription>Time left: {timeLeft} seconds</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Progress value={(10 - timeLeft) * 10} className="mb-4" />
                        <div className="prose">
                            <h2 className="text-2xl font-bold mb-4">{question.split('\n')[0]}</h2>
                            <div dangerouslySetInnerHTML={{ __html: question.split('\n').slice(1).join('\n') }} />
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-1/2 ml-3">
                    <CardHeader>
                        <CardTitle>Code Editor</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Editor
                            height="60vh"
                            language="python"
                            theme="vs-dark"
                            value={code}
                            options={editorOptions}
                            onChange={string => handleEditorChange(string as string)}
                        />
                    </CardContent>
                </Card>
            </div>
            <Dialog open={showFeedbackModal} onOpenChange={setShowFeedbackModal}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Interview Feedback</DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                        <p className="mb-4">{feedback}</p>
                        <h3 className="font-semibold mb-2">Metrics:</h3>
                        <ul>
                            {Object.entries(metrics).map(([key, value]) => (
                                <li key={key} className="flex justify-between mb-2">
                                    <span>{key}:</span>
                                    <span>{value}/10</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <DialogFooter>
                        <Button onClick={() => setShowFeedbackModal(false)}>Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

