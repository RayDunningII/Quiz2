const mongoose = require('mongoose');
const {question1,question2,question3,question4,question5,question6,question7,question8} = require('./schema.js');


const db = mongoose.connection 
mongoose.connect('mongodb://localhost:27017/quiz3', {useNewUrlParser: true});
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('WHOOP connected')
});

question1.save((error, question1) => {
    if(error){
        console.error('error!!!!!!');
    } console.log('question1.saved')
})
question2.save((error, question2) => {
    if(error){
        console.error('error!!!!!!');
    } console.log('question2.saved')
})
question3.save((error, question3) => {
    if(error){
        console.error('error!!!!!!');
    } console.log('question3.saved')
})
question4.save((error, question4) => {
    if(error){
        console.error('error!!!!!!');
    } console.log('question4.saved')
})
question5.save((error, question5) => {
    if(error){
        console.error('error!!!!!!');
    } console.log('question5.saved')
})
question6.save((error, question6) => {
    if(error){
        console.error('error!!!!!!');
    } console.log('question6.saved')
})
question7.save((error, question7) => {
    if(error){
        console.error('error!!!!!!');
    } console.log('question7.saved')
})
question8.save((error, question8) => {
    if(error){
        console.error('error!!!!!!');
    } console.log('question8.saved')
})

