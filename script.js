const quizContainer = document.querySelector('.quiz-container');
const questionText = document.getElementById('question-text');
const options = document.getElementById('options');
const submitButton = document.getElementById('submit');
const scoreText = document.getElementById('score-text');

let currentQuestion = 0;
let score = 0;
let questions = [
    {
        text: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Rome'],
        answer: 0
    },
    {
        text: 'What is the largest planet in our solar system?',
        options: ['Earth', 'Saturn', 'Jupiter', 'Uranus'],
        answer: 2
    },
    {
        text: 'What is the smallest country in the world?',
        options: ['Vatican City', 'Monaco', 'Nauru', 'Tuvalu'],
        answer: 0
    },
    {
       text: 'Which of the following rivers is the longest in South America?',
       options: [ 'Amazon River', 'Paraná River ', 'São Francisco River', 'Magdalena River'],
       answer: 0
    },
    {
       text:' What is the term for a program or software that is free to use, modify, and distribute?',
       options: ['Open-source', 'Closed-source ','Freeware', 'Shareware'],
       answer:0
    }

];

function renderQuestion() {
    const currentQuestionObject = questions[currentQuestion];
    questionText.textContent = currentQuestionObject.text;
    options.innerHTML = '';
    currentQuestionObject.options.forEach((option, index) => {
        const optionHTML = `
            <li>
                <input type="radio" id="option${index + 1}" name="option">
                <label for="option${index + 1}">${option}</label>
            </li>
        `;
        options.innerHTML += optionHTML;
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answer = questions[currentQuestion].answer;
        if (selectedOption.id === `option${answer + 1}`) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            renderQuestion();
        } else {
            scoreText.textContent = `Score: ${score}/${questions.length}`;
            quizContainer.classList.add('finished');
        }
    }
}

submitButton.addEventListener('click', checkAnswer);

renderQuestion();