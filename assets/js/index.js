const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitBtn = document.getElementById('submit');

const leQuestions = [
    {
        question: 'Who invented JavaScript?',
        answers: {
            a: 'Douglas Crockford',
            b: 'David Westerson',
            c: 'Flula Borg' 
        },
        correctAnswer: 'a'
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            a: 'Node.js',
            b: 'TypeScript',
            c: 'npm'
        },
        correctAnswer: 'c'
    },
    {
        question: 'Which tool should you use to ensure code quality?',
        answers: {
            a: 'Angular',
            b: 'jQuery',
            c: 'ESLint'
        },
        correctAnswer: 'c'
    }
    {
        question: 'What is the correct way to write "Hello World" in an alert box?',
        answers: {
            a: 'msgBox("Hello World");',
            b: 'alert("Hello World");',
            c: 'alertBox("Hello World");'
        },
        correctAnswer: 'b'
    },
    {
        question: 'How do you round the number 7.25, to the nearest integer?',
        answers: {
            a: 'Math.round(7.25)',
            b: 'Math.floor(7.25)',
            c: 'Math.random(7)'
        },
        correctAnswer: 'a'
    },
    {
        question: 'Which method is used to set the value of an element?',
        answers: {
            a: 'setValue',
            b: 'setText',
            c: 'setAttribute'
        },
        correctAnswer: 'c'
    },
    {
        question: 'Which method is used to remove an element from the DOM?',
        answers: {
            a: 'remove',
            b: 'delete',
            c: 'removeChild'
        },
        correctAnswer: 'b'
    }
];

function buildQuiz() {};

function showResults(){};

// display quiz
buildQuiz();

submitBtn.addEventListener('click', showResults);