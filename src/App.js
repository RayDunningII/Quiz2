import "./App.css";
import Axios from "axios";
import React, { useState, useEffect } from 'react';

const App = () => {
    const [movie, setMovie] = useState('');
    const [answers, setAnswers] = useState('');
    const [question, setQuestion] = useState('');
    const [correct, setCorrect] = useState('');
    const [data, setData] = useState([ ])
    const [value, setValue] = useState('')
    const index = 0 
    const score = 0
  
    
    useEffect(() => {
        // let questions = data.movie 
       Axios.get('http://localhost:4000/')
       .then(response => setData(response.data))
       setMovie(data.movie) //[{}]
       setCorrect(data.correct)
      
    },[data.movie,data.correct])

    const checkAnswer = (value,correctAns) => {
        if(value === correctAns){
            window.alert("correct")
            index += 1
            score += 1
            setAnswers(data.answer[index])
            setCorrect(data.correct[index])
            setMovie(data.movie[index])
        } else {
            window.alert('try again')
        }
    }
    return(
        <div className="container">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1">
            <div id="question"> 
            <p key={index}>{movie[0]}</p>
            </div>
             <button   value={answers[0]} id='one' onClick={() => checkAnswer(value,correct)}>{data.answers}</button>
            <button value={answers[0]} id='two' onClick={() => checkAnswer(value,correct)}>{answers[1]}</button>
            <button value={answers[0]} id='three'onClick={() => checkAnswer(value,correct)}>{answers[2]}</button>
            <button value={answers[0]} id='four' onClick={() => checkAnswer(value,correct)}>{answers[3]}</button>
        </div>
        </div>
        </div>
    )
}
export default App
