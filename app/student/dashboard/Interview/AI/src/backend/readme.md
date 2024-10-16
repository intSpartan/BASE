endpoint: http://localhost:5000/getNextStep
method: POST
request body:
{
    "question": "question name string",
    "codeEdditorContents": "string, contents of code edditor currently",
    "speech": "string | null, whatever if the user has said anything, null otherwise"
    "state": state of the interview. example structure of state given below,
    "company": string
    "problem": string
}
response body:
{
    message: string | "SAY_NOTHING" (string if interviewer is meant to say something, when "SAY_NOTHING" (type: string) is returned, interviewer text to speech doesnt have to do anything)
}

state sample:
[
    {
        "role": "interviewer",
        "message": "Hello, are you ready to get started with your interview?"
    },
    {
        "role": "interviewee",
        "message": "Yes, I am ready.",
        "codeEditor": "",
        "highlight": ""
    },
]