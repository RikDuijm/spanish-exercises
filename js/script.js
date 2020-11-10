var submitButton = document.querySelector('#submit');	

var questions = document.querySelectorAll('.question');
var correctAnswer = document.querySelectorAll('.correct-answer');
var good = document.querySelectorAll('.good');
var wrong = document.querySelectorAll('.wrong');
var givenAnswer = document.querySelectorAll('given-answer');
var score = 0;


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