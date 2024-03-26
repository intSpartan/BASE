from pydantic import BaseModel
from typing import Optional, List

class InterviewState(BaseModel):
    role: str
    message: str
    codeEditor: Optional[str] = ""
    highlight: Optional[str] = ""

class InterviewRequest(BaseModel):
    codeEdditorContents: str
    speech: Optional[str] = None
    state: List[InterviewState]
    company: str
    problem: str

class InterviewResponse(BaseModel):
    message: str