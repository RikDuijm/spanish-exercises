var submitButton = document.querySelector('#submit');	

// var question1 = document.querySelector('#question1');
// var question2 = document.querySelector('#question2');
// var givenAnswer1 =  document.querySelector('.given-answer1');
// var correctAnswer1 = document.querySelector('.correct-answer1');
// var givenAnswer2 =  document.querySelector('.given-answer2');
// var correctAnswer2 = document.querySelector('.correct-answer2');

var questions = document.querySelectorAll('.question');
var correctAnswer = document.querySelectorAll('.correct-answer');
var good = document.querySelectorAll('.good');
var wrong = document.querySelectorAll('.wrong');
var givenAnswer = document.querySelectorAll('given-answer');
var score = 0;


var answers = [{
        answer : 'soy'
    } , {
        answer : 'está'
    }
]


function answerObject () {
    for (i = 0; i < answers.length; i++)
    {   if (questions[i].value == "") {
        noAnswer()
        }
        else if (questions[i].value == answers[i].answer) {
            // givenAnswer[i].textContent = (questions[i].value);
            // givenAnswer[i].style.color = 'green';
            good[i].style.display = 'block';
            correctAnswer[i].style.display = 'block';
            correctAnswer[i].style.color = 'green';

            showScore();
        }
        else {
        wrong[i].style.display = 'block';
        correctAnswer[i].style.display = 'block';
        correctAnswer[i].style.color = 'red';
        }
    }
}

answerObject();

function noAnswer() {
    good[i].style.display = 'none';
    wrong[i].style.display = 'none';    
    correctAnswer[i].style.display = 'none';
}


function showScore() {
    score ++;
    document.getElementById('show-score').value = score
}


submitButton.addEventListener('click', answerObject); // getAnswers


// function getAnswers() {

//     if (question1.value == "") {
//         noAnswer()
//     }
//     else if (question1.value == "soy") {
//         console.log('goed1')
//         givenAnswer1.style.color = 'green';
//         givenAnswer1.textContent = (question1.value);
//         showScore();
                
//     } else {
//         console.log('fout1')
//         givenAnswer1.style.color = 'red';
//         givenAnswer1.textContent = (question1.value);
//         correctAnswer1.style.display = 'block';
//     }

//     if (question2.value == "") {
//         noAnswer()
//     }
//     else if (question2.value == "está") {
//         console.log('goed2')
//         givenAnswer2.style.color = 'green';
//         givenAnswer2.textContent = (question2.value);
//         showScore();
                
//     } else {
//         console.log('fout2')
//         givenAnswer2.style.color = 'red';
//         givenAnswer2.textContent = (question2.value);
//         correctAnswer2.style.display = 'block';
//     }
// }

// getAnswers();

