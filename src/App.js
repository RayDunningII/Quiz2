import "./App.css";
import Axios from "axios";
import React, { useState, useEffect } from 'react';
import Ray from './Ray'
const App = () => {
    const [movie, setMovie] = useState('');
    const [answers, setAnswers] = useState('');
    const [question, setQuestion] = useState('');
    const [correct, setCorrect] = useState('');
    const [data, setData] = useState([]);
    const [value, setValue] = useState('')
    const index = 0 
    const score = 0
  
    
    useEffect(() => {
        // let questions = data.movie 
       Axios.get('http://localhost:4000/')
       .then(response => {
        setData(response.data);
        // setCorrect(response.data.correct)
 
        // setMovie(response.data.movie);
    }) 

},[])
  console.log(data)
  

    const checkAnswer = (e) => {
        let userResponse = Number(e.target.id)
        console.log(userResponse, data[0].correct)
        if(userResponse === data[0].correct){
            window.alert("correct")
            // index += 1
            // score += 1
            // setAnswers(data.answer[index])
            // setCorrect(data.correct[index])
            // setMovie(data.movie[index])
        } else {
            window.alert('try again')
        }
    }
    if(data.length === 0){
        return null;
    }
    return(
        <div className="container">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1">
            <div id="question"> 
            {data[0].movie} 
            <Ray quiz={data}/> 
            <p key={index}>{data.movie}</p>
            </div>
            <div>
        
                 <div>
                 <button  className='one' id={1} onClick={(e) => checkAnswer(e,correct)} >{data[0].answers[0]}</button>
                 <button  className='two' id={2} onClick={(e) => checkAnswer(e,correct)}>{data[0].answers[1]}</button>
                 <button  className='three'id={3}onClick={(e) => checkAnswer(e,correct)}>{data[0].answers[2]}</button>
                 <button  className='four' id={4} onClick={(e) => checkAnswer(e,correct)}>{data[0].answers[3]}</button>
                 </div>
            </div>
        </div>
        </div>
        </div>
    )
}
export default App
