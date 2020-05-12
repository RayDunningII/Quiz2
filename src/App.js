import React from "react";
import "./App.css";
import Axios from "axios";
import "./Answers";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: ['question', 'answers1', 'answers2', 'answers3', 'answers4', 'correct'],
      classNames: ['', '', '', ''],
      score: 0,
      questionAnswered: false,

    }
    this.checkAnswer = this.checkAnswer.bind(this)
    // this.handleShowButton = this.handleShowButton.bind(this);
    this.handleIncreaseScore = this.handleIncreaseScore.bind(this);

  }


  componentDidMount() {
    // window.addEventListener('click', this.renderDescription)
    this.fetchMovie();
  }

  
  checkAnswer(e) {
    let { isAnswered } = this.props;
    
    if(!isAnswered) {
        let elem = e.currentTarget;
        let { question, answers1, answers2, answers3, answers4, correct } = this.props;
        let answer = Number(elem.dataset.id);
         console.log(e.currentTarget)

        let updatedClassNames = this.state.classNames;
   
        if(answer === this.state.movie[0].correct){
          updatedClassNames[answer-1] = 'right';
      }
      else {
          updatedClassNames[answer-1] = 'wrong';
      }
      
      this.setState({
          classNames: updatedClassNames
      })

      this.nextQuestion();
  }
  }

nextQuestion = () =>{
  const { checkAnswer, classNames, score} = this.state
      if(this.checkAnswer()){
          this.setState({
              score: score + 1
          })
      }
      this.setState({
          disabledOptions:true,
          disabled: false,
      })
}

handleIncreaseScore() {
  this.setState({
      score: this.state.score + 1
  });
}
  
  fetchMovie() {
    Axios.get("http://localhost:4000/movie")
      .then(({ data }) => {
        this.setState({ movie: data });
        console.log(data);
      })
      .catch((err) => console.log(err));
  }
  

  render() {
    let { nr, question, answers, correct, showButton, questionAnswered, classNames } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1">
            <div id="question">
              {this.state.movie[0].question}
              {/* {this.state.movie[1].question} */} 
            </div>
            <button className={classNames[0]} id='one' data-id="1" onClick={this.checkAnswer}> {this.state.movie[0].answers1} </button>
            <button className={classNames[0]} id='two'data-id="2" onClick={this.checkAnswer}> {this.state.movie[0].answers2} </button>
            <button className={classNames[0]} id='three' data-id="3" onClick={this.checkAnswer}> {this.state.movie[0].answers3} </button>
            <button className={classNames[0]} id='four' data-id="4" onClick={this.checkAnswer}> {this.state.movie[0].answers4} </button>
          </div>
        </div>
      </div>
    );  
  }

} 



export default App;
