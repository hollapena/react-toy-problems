import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: ['hamburger', 'spaghetti', 'lasagna', 'fries', 'soda', 'fruit', 'salad', 'vegetables'],
            userInput: '',
            filteredArray: []
        }
    }

    changeHandler(val) {
        this.setState({userInput: val});
    }

    stringFilter (userInput) {
        let filtered=[];
        let arr = this.state.unFilteredArray;
        for(let i = 0; i < arr.length; i++){
            if(arr[i].includes(userInput)){
                
                filtered.push(arr[i]);
            };
            
        };
        this.setState({filteredArray:filtered});

    };

    render() {
    return (
      <div className="puzzleBox filterStringPB">
          <h4>Filter String</h4>
          <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
          <input 
          onChange={(e) => this.changeHandler (e.target.value)} 
          className="inputLine"></input>
          <button 
          onClick={() => {this.stringFilter(this.state.userInput)}} className="confirmationButton">Filter</button>
          <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray)}</span>
      </div>
    );
    };
};

export default FilterString;