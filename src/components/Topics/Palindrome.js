import React, {Component} from 'react';

class Palindrome extends Component{
constructor () {
    super();
    this.state={
        userInput:'',
        palindrome:''
    }
}

changeHandler(val) {
    this.setState({userInput: val});
}

palindromeChecker(userInput){
    let answer;
    let arr=userInput.toLowerCase().split(' ').join('');
    console.log(arr)
    let reverseArr=arr.split('').reverse().join('');
    console.log(reverseArr)
    if(arr === reverseArr){
        answer = true;
    } else {
        answer = false;
    };
    this.setState({palindrome:answer});
};

render() {
    return(
        <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input onChange={(e) => this.changeHandler(e.target.value)}  className="inputLine"></input>
            <button onClick={() => {this.palindromeChecker(this.state.userInput)}} className="confirmationButton">
                Submit
            </button>
            <span className="resultsBox">Palindrome: {JSON.stringify(this.state.palindrome)}</span>
        </div>

    );
};
};

export default Palindrome