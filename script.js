let questions = [
    {
        "question": "Welcher Ort ist das",
        "answer_1": "Kreta",
        "answer_2": "Marbella",
        "answer_3": "Dalaman",
        "answer_4": "Rio de Janeiro",
        "right_answer": 3
    },

    {
        "question": "Welcher Ort ist das",
        "answer_1": "Kreta",
        "answer_2": "Marbella",
        "answer_3": "Dalaman",
        "answer_4": "Rio de Janeiro",
        "right_answer": 1
    },

    {
        "question": "Welcher Ort ist das",
        "answer_1": "Kreta",
        "answer_2": "Marbella",
        "answer_3": "Dalaman",
        "answer_4": "Rio de Janeiro",
        "right_answer": 2
    },

    {
        "question": "Welcher Ort ist das",
        "answer_1": "Kreta",
        "answer_2": "Marbella",
        "answer_3": "Dalaman",
        "answer_4": "Rio de Janeiro",
        "right_answer": 4
    },

    {
        "question": "Welcher Ort liegt in Asien",
        "answer_1": "Kreta",
        "answer_2": "Marbella",
        "answer_3": "Dalaman",
        "answer_4": "Rio de Janeiro",
        "right_answer": 3
    },

    {
        "question": "Welcher Ort ist am westlichsten",
        "answer_1": "Kreta",
        "answer_2": "Marbella",
        "answer_3": "Dalaman",
        "answer_4": "Rio de Janeiro",
        "right_answer": 4
    },
    
    {
        "question": "Welcher Ort ist sehr nobel",
        "answer_1": "Kreta",
        "answer_2": "Marbella",
        "answer_3": "Dalaman",
        "answer_4": "Rio de Janeiro",
        "right_answer": 2
    }
];


let currentQuestion = 0; 

function init(){
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion(){
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question ['question'];
}