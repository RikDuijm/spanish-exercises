

$(document).ready(function() {

    // get the div element and append a table to it
    $('#TBL').append('<div>');

    // get the children of the table, rows (tr) and columns (td)
    var table = $('#TBL').children();

    // verbs and results
    var verbInfinitives = [ { name : 'hablar', answers : ['hablo', 'hablas', 'habla', 'hablamos', 'habláis', 'hablan']}, 
              { name : 'beber', answers : ['bebo', 'bebes', 'bebe', 'bebemos', 'bebéis', 'beben']},
              { name : 'vivir', answers : ['vivo', 'vives', 'vive', 'vivimos', 'vivís', 'viven']},
              { name : 'ser', answers : ['soy', 'eres', 'es', 'somos', 'sois', 'son']},
              { name : 'estar', answers : ['estoy', 'estás', 'está', 'estamos', 'estáis', 'están']},
              { name : 'tener', answers : ['tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen']},
              { name : 'querer', answers : ['quiero', 'quieres', 'quiere', 'queremos', 'queréis', 'quieren']},
              { name : 'poder', answers : ['puedo', 'puedes', 'puede', 'podemos', 'podéis', 'pueden']},
              { name : 'ir', answers : ['voy', 'vas', 'va', 'vamos', 'vais', 'van']},
];

    // show verbs in table
    $.each(verbInfinitives, function(){
        $(table).append(`<table class="presente"><th class='center'> </th><th class='center werkwoordnaam'>${this.name}</th><th class='center'> </th>
        <tr> <td></td><td> </td> <td><strong>CORRECTE VERVOEGING</strong></td></tr>
        <tr><td class='right'>yo</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[0]}</td></tr>
        <tr><td class='right'>yo</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[1]}</td></tr>
        <tr><td class='right'>yo</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[2]}</td></tr>
        <tr><td class='right'>yo</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[3]}</td></tr>
        <tr><td class='right'>yo</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[4]}</td></tr>
        <tr><td class='right'>yo</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[5]}</td></tr>`
        );
        
});

    // add an unique ID to every table, so that user can select the verb he/she wants to conjugate
    $(".presente").each(function(i) {
    var row = $(this)
    row.attr('id', 'presente' + i);
});

// select a verb and hide the others. 
    $(function() {
        $('#verbselector').change(function(){
            $('.presente').hide();
            $('#' + $(this).val()).show();
        });

});



//------------------------------------------------------------------------------------------------------
var verbAnswers = ['hablo', 'hablas', 'habla', 'hablamos', 'habláis', 'hablan',
                    'bebo', 'bebes', 'bebe', 'bebemos', 'bebéis', 'beben',
                    'vivo', 'vives', 'vive', 'vivimos', 'vivís', 'viven',
                    'soy', 'eres', 'es', 'somos', 'sois', 'son', 
                    'estoy', 'estás', 'está', 'estamos', 'estáis', 'están',
                    'tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen',
                    'quiero', 'quieres', 'quiere', 'queremos', 'queréis', 'quieren',
                    'puedo', 'puedes', 'puede', 'podemos', 'podéis', 'pueden',
                    'voy', 'vas', 'va', 'vamos', 'vais', 'van'];


// Refer to Button "Check" and start Checking the answers. 
var checkButton = document.querySelector('.check');
checkButton.addEventListener('click', checkAnswers);

// the answers of the user
var conjugations = document.querySelectorAll('.conjugate'); 

// the correct answers
var correct = document.querySelectorAll('.correct'); 

function checkAnswers () {
    for (i = 0; i < verbAnswers.length; i++) 
    { if (conjugations[i].value == "")  {
        console.log('niets ingevuld')
    }
    else if (conjugations[i].value.trim().toLowerCase() == verbAnswers[i]) {
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

// // select a verb and hide the others. 
// $(function() {
//     $('#verbselector').change(function(){
//         $('.verbs').hide();
//         $('#' + $(this).val()).show();
//     });
// });


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
        else if (questions[i].value.trim().toLowerCase() == answers[i]) {
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