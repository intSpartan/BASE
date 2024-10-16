from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from funcs import fetch_question_content, convert_rich_text_to_markdown, build_prompt, convert_data_to_transcript, generate_text
from fastapi.middleware.cors import CORSMiddleware
from models import InterviewRequest, InterviewResponse, InterviewState

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/getNextStep", response_model=InterviewResponse)
async def get_next_step(request: InterviewRequest):
    state = request.state
    if len(state) == 0:
        return {"message": "Hello! Are you ready to begin the interview?"}
    
    transcript = convert_data_to_transcript(state)
    prompt = build_prompt(transcript, request.problem, request.company)
    generated_message = generate_text(prompt)
    return {"message": generated_message}

@app.get("/getQuestion/{title_slug}")
async def fetch_leetcode_question(title_slug: str):
    print("TITLE",title_slug)
    question_data = fetch_question_content(title_slug)
    if question_data and "data" in question_data and "question" in question_data["data"]:
        content_data = question_data["data"]["question"]
        content = content_data.get("content", "")
        if content:
            markdown_content = convert_rich_text_to_markdown(content)
            return {"question_content": markdown_content}
        else:
            return {"question_content": f"No content found for '{title_slug}'"}
    else:
        raise HTTPException(status_code=404, detail=f"Question '{title_slug}' not found.")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
