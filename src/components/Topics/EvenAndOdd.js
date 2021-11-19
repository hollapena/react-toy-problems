import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor () {
        super();
        this.state={
            evenArray: [],
            oddArray: [],
            userInput: ''
        };
    }

    changeHandler(val) {
        this.setState({userInput: val});
    }

    evenOddSort(userInput){
       let arr = userInput.split(",");
       let evens = [];
       let odds = [];
       for(let i = 0; i<arr.length; i++){
           if(arr[i]%2 === 0){
                evens.push(+arr[i]);
           }else {
               odds.push(+arr[i])
               
           };
    };
    this.setState({evenArray: evens, oddArray: odds});
}

render(){
    return(
       <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input placeholder="Numbers separated by Commas"
            className="inputLine" onChange={(e)=> this.changeHandler(e.target.value)}>
            </input>
            <button 
            onClick={() => {this.evenOddSort(this.state.userInput)}} className="confirmationButton"> Split 
            </button>
            <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
            <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
       </div>
    );
};
};

export default EvenAndOdd;