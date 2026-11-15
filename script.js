let questions = [
    {
        "question": "Welcher Ort ist das ? ",
        "answer_1": "Kreta",
        "answer_2": "Marbella",
        "answer_3": "Dalaman",
        "answer_4": "Rio de Janeiro",
        "right_answer": 3
    },

    {
        "question": "Welcher Ort ist das ? ",
        "answer_1": "Kreta",
        "answer_2": "Marbella",
        "answer_3": "Dalaman",
        "answer_4": "Rio de Janeiro",
        "right_answer": 1
    },

    {
        "question": "Welcher Ort ist das ? ",
        "answer_1": "Kreta",
        "answer_2": "Marbella",
        "answer_3": "Dalaman",
        "answer_4": "Rio de Janeiro",
        "right_answer": 2
    },

    {
        "question": "Welcher Ort ist das ? ",
        "answer_1": "Kreta",
        "answer_2": "Marbella",
        "answer_3": "Dalaman",
        "answer_4": "Rio de Janeiro",
        "right_answer": 4
    },

    {
        "question": "Welcher Ort liegt in Asien ? ",
        "answer_1": "Kreta",
        "answer_2": "Marbella",
        "answer_3": "Dalaman",
        "answer_4": "Rio de Janeiro",
        "right_answer": 3
    },

    {
        "question": "Welcher Ort ist am westlichsten ? ",
        "answer_1": "Kreta",
        "answer_2": "Marbella",
        "answer_3": "Dalaman",
        "answer_4": "Rio de Janeiro",
        "right_answer": 4
    },

    {
        "question": "Welcher Ort ist sehr nobel ? ",
        "answer_1": "Kreta",
        "answer_2": "Marbella",
        "answer_3": "Dalaman",
        "answer_4": "Rio de Janeiro",
        "right_answer": 2
    }
];


let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    console.log('Selected answer is', selection)
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is', selectedQuestionNumber);
    console.log('Current question is', question['right_answer']);

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort');
        document.getElementById(selection).classList.add('bg-success');
    } else {
        console.log('Falsche Antwort!');
        document.getElementById(selection).classList.add('bg-danger');        
    }
}