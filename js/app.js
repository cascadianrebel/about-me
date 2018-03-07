'use strict';
alert( 'NOTICE: If you don\'t like fun websites, leave now.');

var yorn = ' (Please respond by typing either \'yes\' or   \'no\'';
var userName = prompt ('What is your name?');
console.log(userName);

alert ('Welome, ' + userName + ', I\'m Anthony. Let\'s get started!');

//can i insert a button to press to start these questions?
//Q1- Confirmed
var userKnows = prompt ('Do you think you could you spot me out of a police line-up?' + yorn );
if(userKnows.toLowerCase() === 'yes' || userKnows.toLowerCase === 'y'){
  alert('Oh yeah? I guess I tend to make myself known');
}else{
  alert('Aww, I bet you could! I\'m 5\'10 with two different colored eyes behind a pair of silvery glasses');
}
console.log(userName + 'knows who I am?' + userKnows);
//possibly add a picture of handsome celebrities to an alert with the text that says "try! Do you see him"
//Q2 - Confirmed
var seattleLive = prompt ('Have I lived in Seattle for less than 3 years?' + yorn);
if(seattleLive.toLowerCase() === 'yes' || seattleLive.toLowerCase === 'y'){
  alert('Although, I might seem new, I\'ve actually been living in Ballard for 4 years and I\'m no less scared of earthquakes 4 years later');
}else{
  alert('I guess after living in Seattle long enough, I start acting like a Seattleite! I\'ve actually only been living in Ballard for 4 years and I\'m no less scared of earthquakes 4 years later');
}
console.log(userName + 'knows I\'ve lived here for 4 years?' + seattleLive);

// //respond "yorn, I've lived here for 4 years to the day, and I'm still as scared to death of earthquakes"
// //Q3 - confirmed
var fearQuakes = prompt ('Have I experienced any earthquakes before? ' + yorn);
if(fearQuakes.toLowerCase() === 'yes' || fearQuakes.toLowerCase === 'y'){
  alert('NOOOO. Maybe if I did, I wouldn\'t be so scared');
}else{
  alert('No earthquakes yet, but my parents have had two in Madison, Mississippi in the last 4 years. Fracking awesome, right?');
}
console.log(userName + ' knows I\'ve never experienced the earth quake?' + fearQuakes);

//respond "nope but my parents have had two in Madison, Mississippi in the last 4 years. Isn't that 'fracking' awesome?"
// //Q4 - confirmed
var likeNFL = prompt ('Does Anthony watch the NFL?' + yorn );
if(likeNFL.toLowerCase() === 'yes' || likeNFL.toLowerCase === 'y'){
  alert('I mean, I guess you\'re right, but I prefer college football. I play fantasy football with my college friends. But it\'s rare that I watch the NFL because, we never get the New Orleans Saints games here!#WhoDat');
}else{
  alert('That\'s right! I prefer my football games to occur on Saturdays!');
}
console.log(userName + ' knows I only have a tepid interest in the NFL?' + fearQuakes);
//respond "not unless the Saints are on! WHO DAT!"
// //Q5
var hottyToddy = prompt ('Do I like yell nonsensical gibberish when watching my Alma Mater\'s football team?');
if(hottyToddy.toLowerCase() === 'yes' || hottyToddy.toLowerCase === 'y'){
  alert('Hell Yeah, Damn Right! Hotty Toddy Gosh Amighty, who the hell are we? HEY! Flim Flam Bim Bam Ole Miss by damn!');
}else{
  alert('You\'d be wrong. I love yelling gibberish! Hotty Toddy Gosh Amighty, who the hell are we? HEY! Flim Flam Bim Bam Ole Miss by damn!');
}
console.log(userName + ' knows that I yell at college football games?' + hottyToddy);