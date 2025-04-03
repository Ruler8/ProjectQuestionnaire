# ProjectQuestionnaire

### index.html

This file contains the structure of the quiz page. It includes the following sections:
- **Game Section**: Displays the question and possible answers.
- **Result Section**: Shows the score after the quiz is completed.
- **Buttons**: "Submit" to submit answers and "Play Again" to restart the quiz.

### index.css

This file contains the basic styling for the quiz, including:
- Layout of the page with centered content.
- Styling for buttons and the answer options.
- Feedback styles for correct and incorrect answers.

### `db.json`

This file contains the questions, options, and correct answers in a structured format. Here's an example of the structure inside `db.json`:

{
    "data": [
      {
        "id": 1,
        "question": " What is JavaScript?",
        "answers": [
          { "answer": "JavaScript is a scripting language used to make the website interactive", "isCorrect": true },
          { "answer": "JavaScript is an assembly language used to make the website interactive", "isCorrect": false },
          { "answer": "JavaScript is a compiled language used to make the website interactive", "isCorrect": false },
          { "answer": "None of the mentioned", "isCorrect": false }
        ]
      },
      {
        "id": 2,
        "question": "Which of the following is correct about JavaScript?",
        "answers": [
          { "answer": "JavaScript is an Object-Based language", "isCorrect": true },
          { "answer": "JavaScript is Assembly-language", "isCorrect": false },
          { "answer": "JavaScript is an Object-Oriented language", "isCorrect": false },
          { "answer": "JavaScript is a High-level language", "isCorrect": false }
        ]
      },
      {
        "id": 3,
        "question": "Among the given statements, which statement defines closures in JavaScript?",
        "answers": [
          { "answer": "JavaScript is a function that is enclosed with references to its inner function scope", "isCorrect": false },
          { "answer": "JavaScript is a function that is enclosed with references to its lexical environment", "isCorrect": true },
          { "answer": "JavaScript is a function that is enclosed with the object to its inner function scope", "isCorrect": true },
          { "answer": "None of the mentioned", "isCorrect": false }
        ]
      },
      {
        "id": 4,
        "question": "Arrays in JavaScript are defined by which of the following statements?",
        "answers": [
          { "answer": "It is an ordered list of values", "isCorrect": true },
          { "answer": "It is an ordered list of objects", "isCorrect": false },
          { "answer": "It is an ordered list of string", "isCorrect": false },
          { "answer": " It is an ordered list of functions", "isCorrect": false }
        ]
      },
      {
        "id": 5,
        "question": "Which of the following is not javascript data types?",
        "answers": [
          { "answer": "Null type", "isCorrect": false },
          { "answer": "Undefined type", "isCorrect": false },
          { "answer": "Number type", "isCorrect": false },
          { "answer": "All of the mentioned", "isCorrect": true }
        ]
      },
      {
        "id": 6,
        "question": "Where is Client-side JavaScript code is embedded within HTML documents?",
        "answers": [
          { "answer": "A URL that uses the special javascript:code", "isCorrect": false },
          { "answer": "A URL that uses the special javascript:protocol", "isCorrect": true },
          { "answer": "A URL that uses the special javascript:encoding", "isCorrect": false },
          { "answer": "A URL that uses the special javascript:stack", "isCorrect": false }
        ]
      },
      {
        "id": 7,
        "question": "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        "answers": [
          { "answer": "Position", "isCorrect": false },
          { "answer": "Window", "isCorrect": true },
          { "answer": "Standard", "isCorrect": false },
          { "answer": " Location", "isCorrect": false }
        ]
      },
      {
        "id": 8,
        "question": "Which of the following can be used to call a JavaScript Code Snippet?",
        "answers": [
          { "answer": "Function/Method", "isCorrect": true },
          { "answer": "Preprocessor", "isCorrect": false },
          { "answer": "Triggering Event", "isCorrect": false },
          { "answer": "RMI", "isCorrect": false }
        ]
      },
      {
        "id": 9,
        "question": "Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?",
        "answers": [
          { "answer": "will work perfectly well on a Windows Machine", "isCorrect": true },
          { "answer": "will be displayed as JavaScript text on the browser", "isCorrect": false },
          { "answer": "will throw errors and exceptions", "isCorrect": false },
          { "answer": "must be restricted to a Unix Machine only", "isCorrect": false }
        ]
      },
      {
        "id": 10,
        "question": "Which of the following scoping type does JavaScript use?",
        "answers": [
          { "answer": "Sequential", "isCorrect": false },
          { "answer": "Segmental", "isCorrect": false },
          { "answer": "Lexical", "isCorrect": true },
          { "answer": "Literal", "isCorrect": false }
        ]
      }
    ]
  }
  
  ### `index.js`

This file contains the logic for the quiz:
- Loads and displays questions with options from `db.json`.
- Allows users to select an answer.
- Handles submission and displays the results with the score.
- Resets the quiz when the user clicks "Play Again".
