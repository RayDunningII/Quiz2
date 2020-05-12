import React from 'react';



class Answers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: ['question', 'answers1', 'answers1', 'answers2', 'answers3', 'answers4', 'correct'],
            isAnswered: false,
            classNames: ['', '', '', '']
        }
        
        this.checkAnswer = this.checkAnswer.bind(this);
    }
    
    checkAnswer(e) {
        let { isAnswered } = this.props;
        
        if(!isAnswered) {
            let elem = e.currentTarget;
            let { correct, increaseScore } = this.props;
            let answer = Number(elem.dataset.id);
            let updatedClassNames = this.state.classNames;

            if(answer === correct){
                updatedClassNames[answer-1] = 'right';
                increaseScore();
            }
            else {
                updatedClassNames[answer-1] = 'wrong';
            }
            
            this.setState({
                classNames: updatedClassNames
            })

            this.props.showButton();
        }
    }
    
    shouldComponentUpdate() {
        this.setState({
            classNames: ['', '', '', '']
        });
        return true;
    }
    
    render() {
        let { answers } = this.props;
        let { classNames } = this.state;
        
        // let transition = {
        //     transitionName: "example",
        //     transitionEnterTimeout: 500,
        //     transitionLeaveTimeout: 300
        // }
        
        return (
            <div id="answers">
            <button className={classNames[0]} id='one' data-id="1" onClick={this.checkAnswer}> {this.state.movie[0].answers1} </button>
            <button className={classNames[0]} id='two'data-id="2" onClick={this.checkAnswer}> {this.state.movie[0].answers2} </button>
            <button className={classNames[0]} id='three' data-id="3" onClick={this.checkAnswer}> {this.state.movie[0].answers3} </button>
            <button className={classNames[0]} id='four' data-id="4" onClick={this.checkAnswer}> {this.state.movie[0].answers4} </button>
            </div>
        );
    }
}

export default Answers