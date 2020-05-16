const mongoose = require('mongoose');



const movieQuiz = mongoose.Schema({ 
    movie: String,
    answers: [String],
    correct: Number
 });


 const quiz = mongoose.model('quiz', movieQuiz) 

 const question1 = new quiz ({ movie:'What Quentin Tarantino western stars Kurt Russell?', answers: ['Django Unchained', 'Hateful 8', 'Ridiculous 6', 'A Christmas Story'], correct: 2});
 const question2 = new quiz ({ movie:'Who directed Bridge of Spies?', answers: ['Tom Hanks', 'Steven Spielberg', 'Mel Gibson'], correct: 3});
 const question3 = new quiz ({ movie:'How Many Indiana Jones movies are there as of 2020?', answers: ['3', '5', '4', '6'], correct: 4});
 const question4 = new quiz ({ movie:'When did Legally Blonde release', answers: ['2002', '2001', '1999', '2005'], correct: 2});
 const question5 = new quiz ({ movie:'What movie did Arnold Schwarzenegger famously say GET TO THE CHOPPA!', answers: ['True Lies', 'Terminator 2: Judgement Day', 'Predator', 'Commando'], correct: 3});
 const question6 = new quiz ({ movie:'How many Star Wars films are there as of 2020?', answers: ['9', '12', '6', 'Who really knows?'], correct: 1});
 const question7 = new quiz ({ movie:'When did Minority Report release?', answers: ['2001', '2005', '2004', '2002'], correct: 4});
 const question8 = new quiz ({ movie:'What is the highest grossing film as of 2020?', answers: ['Titanic', 'Gone With the Wind', 'Avengers: Endgame', 'Avatar'], correct: 3});

 module.exports = {question1,question2,question3,question4,question5,question6,question7,question8};
 
