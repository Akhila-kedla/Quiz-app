🎯 Ultimate Quiz Showdown – React Quiz App

## 🧠 Project Overview

This project is a dynamic and interactive quiz application built using React. It allows users to test their knowledge across various Indian-themed categories such as Geography, History, Film Industry, Sports, and Politics. The app fetches questions in real time from the [Open Trivia Database API](https://opentdb.com) and provides a smooth user interface with light and dark mode support, timed questions, and instant score feedback.

---

## ✨ Features

### 🧾 User Flow
- Start from a themed **homepage**
- Choose a quiz **category with images**
- Answer **7 multiple-choice questions**
- View **score and correct answers** at the end
- Toggle between **Dark and Light Mode**

### 📥 User Input (Per Question)
- Choose one of 4 answer options
- 15-second countdown timer

### 📤 Output
- Immediate score after quiz
- Summary of correct answers
- Option to return to home

---

## ⚙️ Tech Stack

- **Frontend:** React (JSX, useState, useEffect)
- **Routing:** React Router DOM
- **Styling:** Inline CSS + Google Fonts
- **Data Source:** Open Trivia DB API

---

## 🛠️ Installation Guide

### 📁 Step 1: Clone the Repository
```bash
git clone https://github.com/Aisiriivhegde/Quiz.git
cd Quiz
```
### 📦 Step 2: Install Dependencies
```
npm install
```
### 🚀 Step 3: Start the App
```
npm start
```
Then open your browser and go to:
```
http://localhost:3000
```
### 🧪 Try It Out

- Start → Select “History”
- Answer questions within 15 seconds
- Submit and view score

🟢 Example Output:  
✅ Your Score: 6 / 7

🔴 Example Output:  
❌ Your Score: 3 / 7

---

## 🗂 Project Structure
```
Quiz/
├── public/
│ └── index.html
├── src/
│ ├── assets/ # (Optional) local images
│ ├── pages/
│ │ ├── HomePage.js # Welcome screen
│ │ ├── CategoryPage.js # Category selection
│ │ └── QuizPage.js # Main quiz logic
│ ├── App.js # Routing and layout
│ └── index.js # React entry point
└── README.md
```
---

## 📌 Key Components

| Component     | Description                                |
|---------------|--------------------------------------------|
| HomePage      | Starting point with Start button           |
| CategoryPage  | Category selection with image cards        |
| QuizPage      | Fetches questions, tracks answers & timer  |

---

## 📊 Functional Highlights

🎯 7 MCQs per quiz

🕒 15-second timer

🌗 Light/Dark mode toggle

📈 Score summary with correct answers

⬅️ Navigation back to homepage

##  🌱 Future Scope

Add difficulty filter

Integrate authentication

Store scores in localStorage/backend

Add leaderboard

Responsive PWA support

---

## 👩‍💻 Authors
💡 Aisirii V Hegde and Akhila K

🌐 https://github.com/Aisiriivhegde

## 📄 License
This project is built for learning and demonstration purposes. Feel free to fork and experiment!
