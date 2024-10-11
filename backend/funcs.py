from prompts import MAIN_PROMPT
import google.generativeai as genai
from dotenv import find_dotenv, load_dotenv
import os
import requests
import json

load_dotenv(find_dotenv())

genai.configure(api_key="AIzaSyCRl0UrO2preZWlNWcDJ9pI9KdorCD-1YY")

def convert_data_to_transcript(data):
    transcript = ""
    for item in data:
        if item.role == "interviewer":
            transcript += f"Interviewer: {item.message}\n"
        elif item.role == "interviewee":
            transcript += f"Interviewee: {item.message}\n"
            if item.codeEditor:
                transcript += f" -> Code Editor: {item.codeEditor}\n"
            else:
                transcript += " -> Code Editor: EMPTY. interviewer SAY_NOTHING if expecting code or currently coding. otherwise, converse\n"
            if item.highlight:
                transcript += f" -> Currently Highlighting Text: {item.highlight}\n"
                
    return transcript

def build_prompt(transcript, problem, company):
    prompt = MAIN_PROMPT.format(problem=problem, company=company)
    prompt += "---\nNow predict what the interviewer should do at this stage:\n"
    prompt += transcript
    prompt += "\nInterviewer:"
    return prompt

def generate_text(prompt):
    generation_config = {
        "temperature": 0.9,
        "top_p": 1,
        "top_k": 1,
        "max_output_tokens": 4096,
    }
    model = genai.GenerativeModel(model_name="gemini-1.0-pro", generation_config=generation_config)
    prompt_parts = [prompt]
    response = model.generate_content(prompt_parts)
    generation = response.candidates[0].content.parts[0].text
    return generation


def fetch_question_content(title_slug):
    url = "https://leetcode.com/graphql/"
    headers = {
        "content-type": "application/json",
    }
    data = {
        "query": """
            query questionContent($titleSlug: String!) {
                question(titleSlug: $titleSlug) {
                    content
                    mysqlSchemas
                    dataSchemas
                }
            }
        """,
        "variables": {
            "titleSlug": title_slug
        },
        "operationName": "questionContent"
    }

    response = requests.post(url, headers=headers, json=data)
    print(title_slug, response.json())
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Failed to fetch data for '{title_slug}'. Status code: {response.status_code}")
        return None

def fetch_all_questions(category_slug, limit=4000, skip=0, filters={}):
    url = "https://leetcode.com/graphql/"
    headers = {
        "content-type": "application/json",
    }
    data = {
        "query": """
            query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {
                problemsetQuestionList: questionList(
                    categorySlug: $categorySlug
                    limit: $limit
                    skip: $skip
                    filters: $filters
                ) {
                    total: totalNum
                    questions: data {
                        acRate
                        difficulty
                        freqBar
                        frontendQuestionId: questionFrontendId
                        isFavor
                        paidOnly: isPaidOnly
                        status
                        title
                        titleSlug
                        topicTags {
                            name
                            id
                            slug
                        }
                        hasSolution
                        hasVideoSolution
                    }
                }
            }
        """,
        "variables": {
            "categorySlug": category_slug,
            "skip": skip,
            "limit": limit,
            "filters": filters
        },
        "operationName": "problemsetQuestionList"
    }

    response = requests.post(url, headers=headers, json=data)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Failed to fetch questions for category '{category_slug}'. Status code: {response.status_code}")
        return None

def convert_rich_text_to_markdown(rich_text):
    # Replace <pre><code>...</code></pre> with triple backticks for code blocks
    rich_text = rich_text.replace('<pre><code>', '```')
    rich_text = rich_text.replace('</code></pre>', '```')

    # Replace <code>...</code> with single backticks for inline code
    rich_text = rich_text.replace('<code>', '`')
    rich_text = rich_text.replace('</code>', '`')

    # Replace <ul><li>...</li></ul> with '- ' for unordered lists
    rich_text = rich_text.replace('<ul><li>', '- ')
    rich_text = rich_text.replace('</li></ul>', '\n')

    # Remove <p>, <em>, <strong>, and <br> tags
    rich_text = rich_text.replace('<p>', '')
    rich_text = rich_text.replace('</p>', '\n')
    rich_text = rich_text.replace('<em>', '')
    rich_text = rich_text.replace('</em>', '')
    rich_text = rich_text.replace('<strong>', '**')
    rich_text = rich_text.replace('</strong>', '**')
    rich_text = rich_text.replace('<br>', '\n')

    return rich_text

def save_to_file(data, filename):
    with open(filename, 'w') as json_file:
        json.dump(data, json_file, indent=4)

def read_from_file(filename):
    if os.path.exists(filename):
        with open(filename, 'r') as json_file:
            return json.load(json_file)
    else:
        return None
