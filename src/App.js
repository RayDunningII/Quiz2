import "./App.css";
import Axios from "axios";
import React, { useState, useEffect } from 'react';

const App = () => {
    const [movie, setMovie] = useState('');
    const [answers, setAnswers] = useState('');
    const [question, setQuestion] = useState('');
    const [correct, setCorrect] = useState('');
    const [data, setData] = useState( [] )
    const [value, setValue] = useState('')
    const [answers1, setAnswers1] = useState('')
    const [answers2, setAnswers2] = useState('')
    const [answers3, setAnswers3] = useState('')
    const [answers4, setAnswers4] = useState('')
    

    const index = 0 
    const score = 0
    useEffect(() => {
        let answersOne = [ ]
        Axios.get("http://localhost:4000/movie")
        .then(response => setData(response.data))
        setMovie(data.movie) //[{}]
        setCorrect(data.correct)
        setQuestion(data.question)
        for(let i = 0; i < data.length; i++){
            answersOne.push(data.movie[i].answers1.answers2.answers3.answers4)
            setAnswers(answersOne)
            }    
    },[movie,correct,question])

    const checkAnswer = (value,correctAns) => {
        if(value === correctAns){
            window.alert("correct")
            index += 1
            score += 1
            setAnswers(data.answer[index])
            setCorrect(data.correct[index])
            setQuestion(data.question[index])
        } else {
            window.alert('try again')
        }
    }
    return(
        <div className="container">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1">
            <div id="question">
             {question}
            </div>
            <button value={answers[0]} id='one' onClick={() => checkAnswer(value,correct)}>{answersOne[0]}</button>
            <button value={answers[0]} id='two' onClick={() => checkAnswer(value,correct)}>{answers[1]}</button>
            <button value={answers[0]} id='three'onClick={() => checkAnswer(value,correct)}>{answers[2]}</button>
            <button value={answers[0]} id='four' onClick={() => checkAnswer(value,correct)}>{answers[3]}</button>
        </div>
        </div>
        </div>
    )
}
export default App
