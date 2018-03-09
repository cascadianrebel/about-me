'use strict';
alert('NOTICE: If you don\'t like fun websites, leave now.');
var counter= 0;
var yorn = ' (Please respond by typing either \'yes\' or \'no\')' ;
var userName = prompt('What is your name?');

while(userName.length < 1){
  var noAnswer = prompt('You didn\'t answer. Please enter a response.');
  userName = prompt('You don\'t have a name? What should we call you?');
}
if (userName.length !== 0) {
  alert('Welcome, ' + userName.toUpperCase() + ', I\'m Anthony. Let\'s get started!' );
}

var UserName = userName.toUpperCase();
console.log('User\'s name is ' + UserName);

function createQuestion (questionName, questionText, answerY, answerN, noAnswer) {
  questionName = prompt(questionText);
  while (questionName.length < 1) {
    noAnswer;
    questionName;
  }
  if (questionName.charAt(0).toLowerCase() === 'y') {
    alert(answerY); 
    counter++;
    } else {
      alert(answerN);
    }
}
createQuestion('userknows', 'do you know me ?', 'correct', 'wrong', noAnswer);


//Q1- Confirmed
var userKnows = prompt('Do you think you could you spot me out of a police line-up? ' + yorn);
while(userKnows.length < 1) {
  noAnswer;
  userKnows;}
if (userKnows.charAt(0).toLowerCase() === 'y') {
  alert('Oh yeah? I guess I tend to make myself known. 1pt');
  console.log(UserName + ' knows Anthony.');
  counter++;
} else {
  alert(
    'Aww, I bet you could! I\'m 5\'10" with two different colored eyes behind a pair of silvery glasses');
  console.log(UserName + 'does not know Anthony. 0pts');
}
console.log(UserName + '\'s score is ' + counter + 'point(s)');

//TODO:possibly add a picture of handsome celebrities to an alert with the text that says "try! Do you see him"
//Q2
var seattleLive = prompt( 'Have I lived in Seattle for less than 3 years? ' + yorn);
while (seattleLive.length < 1){
  noAnswer;
  seattleLive;
}
if (seattleLive.charAt(0).toLowerCase === 'y') {
  alert(
    'Although, I might seem new, I\'ve actually been living in Ballard for 4 years and I\'m no less scared of earthquakes 4 years later. 0pts');
  console.log(UserName + 'guessed incorrectly. 0pts');
} else {
  alert(
    'I guess after living in Seattle long enough, I start acting like a Seattleite! I\'ve actually only been living in Ballard for 4 years and I\'m no less scared of earthquakes 4 years later. Good job +1pt!');
  console.log(UserName + 'guessed correctly. +1pt');
  counter++;
}
console.log(UserName + '\'s score is ' + counter + 'point(s)');

// //Q3 - confirmed
var fearQuakes = prompt('Have I experienced any earthquakes before? ' + yorn);
while (fearQuakes.length < 1) {
  noAnswer;
  fearQuakes;
}
if (fearQuakes.toLowerCase() === 'yes' || fearQuakes.toLowerCase === 'y') {
  alert('NOOOO. Maybe if I did, I wouldn\'t be so scared');
} else {
  alert(
    'No earthquakes yet, but my parents have had two in Madison, Mississippi in the last 4 years. Fracking awesome, right?'
  );
}
console.log(
  userName.toUpperCase +
		' knows I\'ve never experienced the earth quake? ' +
		fearQuakes
);

//respond "nope but my parents have had two in Madison, Mississippi in the last 4 years. Isn't that 'fracking' awesome?"
// //Q4 - confirmed
var likeNFL = prompt('Does Anthony watch the NFL? ' + yorn);
if (likeNFL.toLowerCase() === 'yes' || likeNFL.toLowerCase === 'y') {
  alert(
    'I mean, I guess you\'re right, but I prefer college football. I play fantasy football with my college friends. But it\'s rare that I watch the NFL because, we never get the New Orleans Saints games here!#WhoDat'
  );
} else {
  alert('That\'s right! I prefer my football games to occur on Saturdays!');
}
console.log(
  userName + ' knows I only have a tepid interest in the NFL?' + fearQuakes
);
//respond "not unless the Saints are on! WHO DAT!"
// //Q5
var hottyToddy = prompt(
  'Do I like yell nonsensical gibberish when watching my Alma Mater\'s football team? ' +
		yorn
);
if (hottyToddy.toLowerCase() === 'yes' || hottyToddy.toLowerCase === 'y') {
  alert(
    'Hell Yeah, Damn Right! Hotty Toddy Gosh Amighty, who the hell are we? HEY! Flim Flam Bim Bam Ole Miss by damn!'
  );
} else {
  alert(
    'You\'d be wrong. I love yelling gibberish! Hotty Toddy Gosh Amighty, who the hell are we? HEY! Flim Flam Bim Bam Ole Miss by damn!'
  );
}
console.log(
  userName + ' knows that I yell at college football games?' + hottyToddy
);

//Q6
//TODO: prompt math problem: randomX * randomY = z; make a loop so the prompt continues until the correct answer is made. User will only have 4 tries.
// var x = Math.floor(Math.random()*10 + 1);
// console.log('x=' + x);
// var y = Math.floor(Math.random()*10 + 1);
// console.log('y=' + y);
//   var mathTest = prompt('Ok, genius. What is ' + x + '*' + y + '? You have four chances.');
//   console.log('User guessed ' + mathTest);
//   var z = x*y;
//   console.log('the  correct answer is ' + z);

// while (mathTest !== z) {
//   var mathTest = prompt('Ok, genius. What is ' + x + '*' + y + '? You have four chances.'); maxGuess++}
// if (mathTest === z) { break;}
// else if (maxGuess > 4) {break;}
// else {prompt('WRONG!!!!! Try again. What is ' + x + '*' + y + '? You have ' + 4-maxGuess + ' chances.');
//Q7
//TODO: Create an array of NHL teams; prompt "who are the original six?"; give six possible tries, the first six of the array are the original six
//var nhl = ['Boston' , 'Chicago' , 'Detroit' , 'Montreal', 'New York', 'Toronto','Anaheim', 'Arizona'];