// functions
function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    leQuestions.forEach( (currentQuestion, questionNumber) => {
        
        // variable to store the list of answer choices
        const answers = [];

        // for each available answer...
        for(letter in currentQuestion.answers) {
            
            // ...add an HTML radio button
            answers.push(
                `<label>
                    <input type='radio' name='question${questionNumber}' value='${letter}'>
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        // add this question and its answers to the output
        output.push(
            `<div class='question'> ${currentQuestion.question} </div>
            <div class='answers'> ${answers.join('')} </div>`
        );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
};

function showResults(){
    
    // gather answer containers from the quiz
    const answerContainers = quizContainer.querySelectAll('answer');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    leQuestions.forEach( (currentQuestion, questionNumber) => {

        // find select answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++

            // color the answers green
            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else {
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${leQuestions.length}`;
};

// variables
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
    },
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

// display quiz
buildQuiz();

// event listeners
submitBtn.addEventListener('click', showResults);