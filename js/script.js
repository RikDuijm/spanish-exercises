var submitButton = document.querySelector('#submit');	
var question1 = document.querySelector('#question1')
var question2 = document.querySelector('#question2')


submitButton.addEventListener('click', getAnswers);

function getAnswers() {
    var givenAnswer1 = question1.value;
    var givenAnswer2 = question2.value;
    console.log(givenAnswer1);
    console.log(givenAnswer2);    
    if (givenAnswer1 == "soy") {
        console.log('joepie')
    } else {
        console.log('neeeeee')
    }
}
getAnswers();
