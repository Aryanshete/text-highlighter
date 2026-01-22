📘 Text Highlighter

A simple Next.js web app that highlights important parts of your text using Google Gemini AI.
You just paste a paragraph, click a button, and the AI processes it.
The highlighted result is shown on a new page.

This project uses Next.js App Router, React, and a custom API route to connect with Gemini.

📸 How It Works

1.User pastes text on the Home page

2.Clicks Highlight Important Points

3.Text is sent to Gemini AI API

4.Processed result is returned

5.App redirects to a new Result page

6.Highlighted text is displayed



  📁 Project Structure 
  
            highlight-app/
            │
            ├── app/
            │   ├── api/
            │   │   └── gemini/
            │   │       └── route.js      # API route for Gemini AI
            │   │
            │   ├── result/
            │   │   └── page.js           # Result page (shows highlighted text)
            │   │
            │   ├── layout.js             # Global layout
            │   └── page.js               # Home page (text input)
            │
            ├── .env                      # API key
            ├── next.config.js
            ├── package.json
        

🛠 Tech Stack

1.Next.js (App Router)

2.React

3.JavaScript

4.Google Gemini API

5.HTML + CSS

No heavy UI libraries – simple and clean.


📍 How Next.js Is Used

📑 Pages & Routing
Next.js uses file-based routing.

That means:
app/page.js becomes / (Home)
app/result/page.js becomes /result

This lets you easily send data (e.g., user text) from the home page to the result page via query parameters or Next.js passing of props.

When the user submits the form on the home page, Next.js handles the navigation with something like:

router.push(`/result?text=${encodeURIComponent(inputText)}`)

Then in result/page.js, Next.js reads the text from the URL and processes it to display the highlighted version.

Because Next.js pre-renders pages but also allows client navigation, the transition from home → result is seamless.


🚀 Getting Started

1. Install
git clone https://github.com/Aryanshete/text-highlighter.git
cd text-highlighter
npm install

2. Run in Development
npm run dev

Open your browser:
http://localhost:3000

You will see a homepage with a textarea and a button.


📌 Using the App

Type or paste text into the textarea on the home page.

Click ‘Highlight Important Points’.

The app will open a new page (e.g., /result?text=...) showing your text with highlighting based on built-in logic.


🔧 Deployment

To create a production build:

npm run build
npm start


Default production build runs on port 3000.

