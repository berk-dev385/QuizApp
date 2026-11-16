let questions = [
    {
        "question": "Welcher Ort ist das ? ",
        "answer_1": "Kreta",
        "answer_2": "Marbella",
        "answer_3": "Dalaman",
        "answer_4": "Rio de Janeiro",
        "right_answer": 3
        "image": "./assets/img/dalaman.jpg"
    },

    {
        "question": "Welcher Ort ist das ? ",
        "answer_1": "Kreta",
        "answer_2": "Marbella",
        "answer_3": "Dalaman",
        "answer_4": "Rio de Janeiro",
        "right_answer": 1,
        "image": "./assets/img/frage-02.jpg"
    },

    {
        "question": "Welcher Ort ist das ? ",
        "answer_1": "Kreta",
        "answer_2": "Marbella",
        "answer_3": "Dalaman",
        "answer_4": "Rio de Janeiro",
        "right_answer": 2,
        "image": "./assets/img/frage-03.jpg"
    },

    {
        "question": "Welcher Ort ist das ? ",
        "answer_1": "Kreta",
        "answer_2": "Marbella",
        "answer_3": "Dalaman",
        "answer_4": "Rio de Janeiro",
        "right_answer": 4,
    },  "image": "./assets/img/frage-04.jpg"

    {
        "question": "Welcher Ort liegt in Asien ? ",
        "answer_1": "Kreta",
        "answer_2": "Marbella",
        "answer_3": "Dalaman",
        "answer_4": "Rio de Janeiro",
        "right_answer": 3,
        "image": "./assets/img/frage-05.jpg"
    },

    {
        "question": "Welcher Ort ist am westlichsten ? ",
        "answer_1": "Kreta",
        "answer_2": "Marbella",
        "answer_3": "Dalaman",
        "answer_4": "Rio de Janeiro",
        "right_answer": 4,
        "image": "./assets/img/frage-06.jpg"
    },

    {
        "question": "Welcher Ort ist sehr nobel ? ",
        "answer_1": "Kreta",
        "answer_2": "Marbella",
        "answer_3": "Dalaman",
        "answer_4": "Rio de Janeiro",
        "right_answer": 2,
        "image": "./assets/img/frage-07.jpg"
    }
];

let rightQuestion = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('./assets/audio/positiv.wav');
let AUDIO_FAIL = new Audio('./assets/audio/negative.wav');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if (quizIsOver()) {
        showEndScreen();

    } else {
        updateProgressBar();
        updateToNextQuestion();

    }
}

function quizIsOver() {
    return currentQuestion >= questions.length;
}

function showEndScreen() {

    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';

    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestion;
    document.getElementById('header-image').src = 'assets/img/erfolg.png';
}

function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar-id').innerHTML = `${percent} %`;
    document.getElementById('progress-bar-id').style = `width: ${percent}%;`;
}


function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (rightAnswerSelected(selectedQuestionNumber)) {  //Richtige Frage beantwortet
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestion++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber){
    return selectedQuestionNumber == questions[currentQuestion]['right_answer'];
}

function nextQuestion() {
    currentQuestion++;

    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartQuiz() {
    document.getElementById('header-image').src = './assets/img/dalaman.jpg';
    document.getElementById('questionBody').style = '';
    document.getElementById('endScreen').style = 'display: none';


    rightQuestion = 0;
    currentQuestion = 0;
    init();
}