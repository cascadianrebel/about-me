'use strict';

alert('NOTICE: If you don\'t like fun websites, leave now.');
var counter = 0;
var yorn = ' (Please respond by typing either \'yes\' or \'no\')';
var userName = prompt('What is your name?');

while (userName.length < 1) {
  alert('You didn\'t answer. Please enter a response.');
  userName = prompt('You don\'t have a name? What should we call you?');
}
if (userName.length !== 0) {
  alert(
    'Welcome, ' + userName.toUpperCase() + ', I\'m Anthony. Let\'s get started!'
  );
}

var UserName = userName.toUpperCase();
console.log('User\'s name is ' + UserName);

function createQuestion(
  questionName,
  questionText,
  answerY,
  answerN)
{
  questionName = prompt(questionText + yorn);
  while (questionName.length < 1) {
    alert('You didn\'t answer! Please enter a response');
    questionName = prompt(questionText);
  }
  if (questionName.charAt(0).toLowerCase() === 'y') {
    alert(answerY);
    counter++;
    console.log(questionText + ' ' + UserName + ' answered ' + questionName);
  } else {
    alert(answerN);
    console.log(questionText + ' ' + UserName + ' answered ' + questionName);
  }
  console.log(UserName + '\'s score is ' + counter + 'point(s)');
}

//Q1
createQuestion(
  'Know Me?',
  'Do you think you could spot me out of a police line-up?',
  'Oh yeah? I guess I tend to make myself known. 1pt',
  'Aww, I bet you could! I\'m 5\'10 with funky colored eyes behind a pair of silvery glasses.'
);

//TODO:possibly add a picture of handsome celebrities to an alert with the text that says "try! Do you see him"
//Q2
createQuestion(
  'Seattle Live',
  'Have I lived in seattle more than 3 years? ',
  'That\'s right! I\'ve been living in Ballard for 4 years. I\'m still terrified of earthquakes,though. 1pt' ,
  'Although, I might seem new, I\'ve actually been living in Ballard for 4 years and I\'m no less scared of earthquakes 4 years later. 0pts'
);

//Q3
createQuestion(
  'fearQuakes',
  'Have I experienced any earthquakes before?',
  'OH HELL NO! Maybe if I had, I\'d be less scared 0pts',
  'Correct! I have not felt the ground shake, but my parents have had two quakes in Madison, MS in the last 4 years. Isn\'t that fracking awesome. 1pt'
);
//Q4
createQuestion(
  'likeNFL',
  'Does Anthony watch the NFL every Sunday in the fall?',
  'Nope! (unless the Saints are on!) I prefer my football games to occur on Saturdays! 0pts',
  'You\'re correct! I prefer my football games to occure on Saturdays! 1pt'
);
//Q5
createQuestion(
  'hottyToddy',
  'Do I like to yell nonsensical gibberish when watching my Alma Mater\'s football team?',
  'Hell Yeah, Damn Right! Hotty Toddy Gosh Amighty, who the hell are we? HEY! Flim Flam Bim Bam Ole Miss by damn! 1pt',
  'You\'d be wrong. I love yelling gibberish! Hotty Toddy Gosh Amighty, who the hell are we? HEY! Flim Flam Bim Bam Ole Miss by damn!'
);
//Q6
//prompt math problem: randomX * randomY = z; make a loop so the prompt continues until the correct answer is made. User will only have 4 tries.
//TODO: fix looping errors below.

function mathQuestion() {
  var x = Math.floor(Math.random() * 10 + 1);
  console.log('x=' + x);
  var y = Math.floor(Math.random()*10 + 1);
  console.log('y=' + y);
  var mathTest = prompt('Ok, genius. What is ' + x + '*' + y + '?');
  var z = x*y;
  console.log('the  correct answer is ' + z);
  var i = 1;
  mathTest = parseInt(mathTest);
  while(i < 4) {
    if (mathTest === z) {alert('You think you are so smart, don\'t you? +1pt');
      break;
    }else if (mathTest !== z && i < 4){
      mathTest = prompt('Let\'s try that again. What is ' + x + '*' + y + '?');
      mathTest = parseInt(mathTest);
      console.log(UserName + ' guessed ' + mathTest);
      i+;
    }else (i >= 4 && mathTest !== z);
    alert('Really? You had four tries. +0pts');
  }
}
mathQuestion();
console.log('It took you ' + i + ' attempts!');

//Q7
//TODO: 
var uStates = ['Alaska', 'Connecticut', 'Delaware', 'Hawaii', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Maine', 'Michigan', 'Nebraska', 'New Hampshire', 'New Jersey', 'New York', 'North Dakota', 'Ohio', 'Oklahoma','Pennsylvania', 'South Dakota', 'Vermont'];
var stateRemain = prompt('Can you guess which states I have NOT yet traveled?');
var remain = 0 
while (remain < 7){
  stateRemain;
}