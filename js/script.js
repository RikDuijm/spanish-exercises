/* Verbs ------------------------------------------------------------------------------------------------------*/ 

var verbs = [ { name : 'ser', answers : ['soy', 'eres', 'es', 'somos', 'sois', 'son']}, 
              { name : 'estar', answers : ['soy', 'eres', 'es', 'somos', 'sois', 'son']}
];

var ser = ['soy', 'eres', 'es', 'somos', 'sois', 'son', 'estoy', 'estás', 'está', 'estamos', 'estáis', 'están',];

// refer to hidden SER-verb, to display them upon running SER-function
var serVerb = document.querySelector('.ser');

// select verb SER and start SER-function
var serButton = document.querySelector('#ser');                 
serButton.addEventListener('click', serFunction);


// buttons hebben een value met naam werkwoord, zodat geselecteerde ww kan matchen met ww in Array en generale functie geschreven kan worden:
// if name in Array == value van button controleer ingevoerde antwooden met correcte antwoorden.

// console.log(serButton.value); 
// console.log(verbs[0].name);
// console.log(verbs[1].name);
// console.log(verbs.length);

// show the SER-verb
function serFunction() {
    serVerb.style.display = 'block';
}



// Button to check the answers 
var checkSerButton = document.querySelector('.check-ser');
checkSerButton.addEventListener('click', conjugateSer);

var conjugations = document.querySelectorAll('.conjugate'); // the answers of the user
var correct = document.querySelectorAll('.correct'); // the correct answers

// function conjugateSer () {
//     for (i = 0; i < verbs[0].answers.length; i++) 
//     { if (conjugations[i].value == "")  {
//         console.log('niets ingevuld')
//     }
//     else if (conjugations[i].value.toLowerCase() == verbs[0].answers[i]) {
//         console.log('good')
//         conjugations[i].style.color = 'green'
//         correct[i].style.display = 'block';
//         correct[i].style.color = 'green';
//     }
//     else {
//         console.log('bad')        
//         conjugations[i].style.color = 'red'
//         correct[i].style.display = 'block';
//         correct[i].style.color = 'red';        
//     }
// }
// }

console.log(ser.length);

function conjugateSer () {
    for (i = 0; i < ser.length; i++) 
    { if (conjugations[i].value == "")  {
        console.log('niets ingevuld')
    }
    else if (conjugations[i].value.toLowerCase() == ser[i]) {
        console.log('good')
        conjugations[i].style.color = 'green'
        correct[i].style.display = 'block';
        correct[i].style.color = 'green';
    }
    else {
        console.log('bad')        
        conjugations[i].style.color = 'red'
        correct[i].style.display = 'block';
        correct[i].style.color = 'red';        
    }
}
}





var estarVerb = document.querySelector('.estar');
// estarButton.addEventListener('click', estarFunction);


/* Invuloefening ------------------------------------------------------------------------------------------------------*/ 

var submitButton = document.querySelector('#submit');	
var questions = document.querySelectorAll('.question');
var correctAnswer = document.querySelectorAll('.correct-answer');
var good = document.querySelectorAll('.good');
var wrong = document.querySelectorAll('.wrong');
var score = 0;








var answers = [ 'está', 'está', 'es', 'está', 'es', 'están', 
                'está', 'son', 'estamos', 'está', 'es', 'está', 
                'son', 'está', 'son', 'es', 'está', 'es', 'es', 
                'es', 'son', 'están']

submitButton.addEventListener('click', answerObject); 

function answerObject () {
    for (i = 0; i < answers.length; i++)
    {   if (questions[i].value == "") {
        noAnswer()
        }
        else if (questions[i].value.toLowerCase() == answers[i]) {
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


var input_position = 0, last_input = false;
// if the input[type="text"] or input has a keyup or mouseup event then run this
$('input[type="text"], input').on('keyup mouseup', function () {
    last_input = $(this);
    // gets the last input's position
    if('selectionStart' in this) {
        input_position = this.selectionStart;
    } else if('selection' in document) {
        this.focus();
        var Sel = document.selection.createRange();
        var SelLength = document.selection.createRange().text.length;
        Sel.moveStart('character', -this.value.length);
        input_position = Sel.text.length - SelLength;
    }
});

$('button.insert-character').click(function () {
    if(!last_input) return; // if an input wasn't selected don't run
    var last_input_value = last_input.val(); // value of input
    var word_to_insert = this.value; // value of button
    // split the last input's value then insert the word    
    last_input.val([
        last_input_value.slice(0, input_position),
        word_to_insert,
        last_input_value.slice(input_position)
    ].join(''));
});





// function insertE () {
//     console.log('é')
// }
// insertE();


// var weirdE1 = document.querySelector('.weird-e-1');
// weirdE1.addEventListener('click', insertE1);
// var weirdE2 = document.querySelector('.weird-e-2');
// weirdE2.addEventListener('click', insertE2);
// var weirdN1 = document.querySelector('.weird-n-1');
// weirdN1.addEventListener('click', insertN1);
// var weirdN2 = document.querySelector('.weird-n-2');
// weirdN2.addEventListener('click', insertN2);

// function insertE1() {    
//     var text = document.querySelector('#question1');
//     text.value += 'é';
// }

// function insertE2() {    
//     var text = document.querySelector('#question2');
//     text.value += 'é';
// }

// function insertN1() {    
//     var text = document.querySelector('#question1');
//     text.value += 'ñ';
// }

// function insertN2() {    
//     var text = document.querySelector('#question2');
//     text.value += 'ñ';
// }