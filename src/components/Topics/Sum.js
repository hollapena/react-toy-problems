import React, {Component} from 'react';

class Sum extends Component {
constructor() {
    super();
    this.state={
        number1: 0,
        number2: 0,
        sum: null
    };
};

sumGenerator (num1, num2){
    let answer = +num1+ +num2;
    this.setState({sum:answer});
};

render() {
    return(
        <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input onChange={(e) => this.setState({number1:(e.target.value)})} className="inputLine"></input>
            <input onChange={(e) => this.setState({number2:(e.target.value)})}className="inputLine"></input>
            <button onClick={() =>{this.sumGenerator(this.state.number1, this.state.number2)}}  className="confirmationButton">
                Calculate
            </button>
            <span className="resultsBox">Sum: {JSON.stringify(this.state.sum)}</span>
        </div>
    );
};
};

export default Sum