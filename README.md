# Quiz App by Adarsh Tiwari

A simple **interactive Quiz App** built using **HTML, CSS, and JavaScript**.

The application supports multiple quizzes, MCQ and NAT (Numerical Answer Type) questions, per-question timers, automatic scoring, and a detailed result review.

## ✨ Features

- 🏠 Home page with quiz instructions
- 📚 Multiple quiz categories
- 🔘 MCQ questions with 4 options
- 🔢 NAT questions with numerical answers
- ⏱️ Individual timer for every question
- ✅ Correct answer: **+4 points**
- ❌ Incorrect answer: **-1 point**
- ⏭️ Unanswered/time-out question: **+0 points**
- 📊 Final score and accuracy
- 📝 Detailed question-wise review
- 🎨 Custom responsive-style interface using CSS
- ⌨️ Typewriter effect for the website heading

## 📚 Available Quizzes

The current version contains 5 quizzes:

| # | Quiz | Topic | Questions |
|---|---|---|---:|
| 1 | General Knowledge Challenge | General Knowledge | 15 |
| 2 | Science & Technology Challenge | Science & Technology | 15 |
| 3 | World History Challenge | History | 15 |
| 4 | Mathematics Challenge | Mathematics | 15 |
| 5 | Geography Challenge | Geography | 15 |

Each quiz contains:

- **10 MCQs**
- **5 NATs**
- **15 questions in total**
- **20 seconds** per MCQ
- **30 seconds** per NAT

## 📝 Quiz Rules

### MCQs

- Each MCQ has 4 options.
- Select an option and click **Lock Answer**.
- The selected answer is checked immediately.
- The correct option is highlighted after submission.

### NATs

- Enter a numerical answer in the input box.
- Click **Lock Answer** to submit.
- The entered answer is compared with the correct answer.

### Scoring

| Result | Points |
|---|---:|
| Correct | +4 |
| Incorrect | -1 |
| Unanswered / Time Up | +0 |

## 📊 Results

After completing a quiz, the result page displays:

- Total score
- Accuracy percentage
- Number of correct answers
- Number of incorrect answers
- Number of unanswered questions
- Question-wise answer review

The review table shows:

| Q. No. | Q. Type | Your Answer | Correct Answer | Points |
|---|---|---|---|---|
| 1 | MCQ | B | B | +4 |
| 2 | NAT | 10 | 12 | -1 |

## 🛠️ Technologies Used

- **HTML5** — Page structure
- **CSS3** — Styling and layout
- **JavaScript (ES6)** — Quiz logic, navigation, timer, scoring, and result generation

## 📁 Project Structure

```text
Quiz-App/
│
├── index.html
│
├── CSS-Files/
│   ├── OverallDesign.css
│   └── PageWiseDesign.css
│
└── JS-Files/
    ├── MainScript.js
    ├── QuestionScript.js
    └── QuizScript.js
```

## ⚙️ How to Run

1. Clone or download this repository.
2. Keep the folder structure unchanged.
3. Open `index.html` in a web browser.
4. Navigate to **Quizzes**.
5. Select a quiz and start answering.

No server or external dependencies are required.

## 🧩 JavaScript Overview

The project separates responsibilities across three JavaScript files:

### `QuestionScript.js`

Contains the quiz data and quiz objects, including:

- Quiz title
- Topic
- Number of questions
- MCQ/NAT count
- Timers
- Questions
- Options
- Correct answers

### `MainScript.js`

Handles:

- Website heading typewriter effect
- Page navigation
- Quiz selection
- Quiz details display
- Starting a selected quiz

### `QuizScript.js`

Handles:

- Question display
- MCQ/NAT interaction
- Countdown timer
- Answer checking
- Score calculation
- Answer tracking
- Result page
- Question review

## 🎯 Future Improvements

Possible improvements for future versions:

- Add more quiz categories
- Randomize questions and options
- Add difficulty levels
- Add a restart quiz button
- Store high scores using `localStorage`
- Add a progress bar
- Improve mobile responsiveness
- Add sound effects and animations
- Add a question navigation panel

## 👨‍💻 Author

**Adarsh Tiwari**

---

⭐ If you like this project, consider giving the repository a star!
