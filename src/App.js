import React from "react";
import "./App.css";
import Axios from "axios";
import "./Answers";
// import Answers from "./Answers";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: ['question', 'answers1', 'answers2', 'answers3', 'answers4', 'correct'],
      answer: '',
      question: '',
      classNames: ['', '', '', ''],
      score: 0
    }
    this.checkAnswer = this.checkAnswer.bind(this)
    // // this.handleShowButton = this.handleShowButton.bind(this);
    this.handleIncreaseScore = this.handleIncreaseScore.bind(this);

  }


  componentDidMount() {
    // window.addEventListener('click', this.renderDescription)
    this.fetchMovie();

    

  }


handleIncreaseScore() {
  this.setState({
      score: this.state.score + 1
  });
}
// here is a better solution, so when your axios request is complete and you set state, change the question from null to the value of the question and when the user selects an answer setState to what they choose and call a function
  
  fetchMovie() {
    Axios.get("http://localhost:4000/movie")
      .then(({ data }) => {
        this.setState({ movie: data });
        console.log(data);
        
      })
      .catch((err) => console.log(err));
      
  }
  checkAnswer(e) {
    let elem = e.currentTarget;
    let answer = Number(elem.dataset.id);
    let { question, value }  = this.state;

   if(answer === 2){
     alert('correct')
   } else {
    alert('wrong')
   }

 this.nextQuestion();


  }
  nextQuestion = () =>{
  const { checkAnswer, score} = this.state
      if(this.checkAnswer()){
          this.setState({
              score: score + 1
          })
          console.log(score)
      }
      this.setState({
          disabledOptions:true,
          disabled: false,
      })
}

  
  

  render() {
    let { checkAnswer, movie, question, classNames, correct1, correct2, correct3, correct4} = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1">
            <div id="question"  value={2}>
              {this.state.movie[0].question}
            </div>
            <div id="question"  value={3}>
              {this.state.movie[1].question}
            </div>
            <button className={classNames[0]} value={correct1} id='one' data-id="1" onClick={this.checkAnswer}> {this.state.movie[0].answers1} </button>
            <button className={classNames[1]} value={correct2} id='two'data-id="2" onClick={this.checkAnswer}> {this.state.movie[0].answers2} </button>
            <button className={classNames[2]} value={correct3} id='three' data-id="3" onClick={this.checkAnswer}> {this.state.movie[0].answers3} </button>
            <button className={classNames[3]} value={correct4} id='four' data-id="4" onClick={this.checkAnswer}> {this.state.movie[0].answers4} </button>
          </div>
        </div>
      </div>
    );  
  }

} 



export default App;
