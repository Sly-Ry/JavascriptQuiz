// IIFE (immediately invoked function expression)
(function(){
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
                `<div class='slide'>
                    <div class='question'> ${currentQuestion.question} </div>
                    <div class='answers'> ${answers.join('')} </div>
                </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    };

    function showResults(){
        
        // gather answer containers from the quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

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

    function showSlide(n) {

        // hide all slides except the nth slide
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        
        // if its the first slide, hide the back button
        if (currentSlide === 0){
            previousButton.style.display = 'none';
        }
        else {
            previousButton.style.display = 'inline-block';
        }

        // if its the last slide, hide the next button
        if (currentSlide === slides.length-1){
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        }
        else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    };

    function showNextSlide() {
        showSlide(currentSlide + 1);
    };
    
    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    };

    // variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const leQuestions = [
        {
            question: 'Who invented JavaScript?',
            answers: {
                a: 'Douglas Crockford',
                b: 'Brendan Eich',
                c: 'Flula Borg' 
            },
            correctAnswer: 'b'
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

    // function start() {
    //     startButton.onclick(buildQuiz());
    // }

    // pagination
    const startButton = document.getElementById('start-btn');
    const previousButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // show the first slide
    // showSlide(currentSlide);
    startButton.addEventListener('click', showSlide(currentSlide));
    
    // event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener('click', showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);
   
})();
