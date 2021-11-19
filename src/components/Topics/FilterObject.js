import React, {Component} from 'react';

class FilterObject extends Component{
    constructor () {
        super();
        this.state={
            unFilteredArray:[{name:'Callen', age:36}, {name:'Matt', age:36},{name:'Diane', age: 62}, {name:'Ronald', age:61}, {name:'Cortney', age: 34}, {name:'Kristen', age: 32}, {name:'Emerson', age: 5}, {name:'Kyle', age:33}],
            userInput:'',
            filteredArray:[]
    }}

    changeHandler(val) {
        this.setState({userInput: val});
    }

    objectFilter(userInput){
        
        let arr = this.state.unFilteredArray;
        let filtered = [];
        for(let i = 0; i<arr.length; i++){
            if(Object.values(arr[i]).includes(userInput) || Object.values(arr[i]).includes(+userInput)){
                filtered.push(arr[i])
            }
        }
        this.setState({filteredArray: filtered});
    }

    render() {
    return(
        <div 
        className="puzzleBox filterObjectPB">
            <h4>
                    Filter Object
            </h4>
            <span 
                className="puzzleText">
                    {JSON.stringify(this.state.unFilteredArray)}
            </span>
            <input
                className="inputLine"
                onChange={(e) => this.changeHandler(e.target.value)}
                >
            </input>
            <button
                className="confirmationButton"
                onClick={() => {this.objectFilter(this.state.userInput)}}>
                    Filter
            </button>
            <span 
                className="resultsBox filterObjectRB">
                    {JSON.stringify(this.state.filteredArray)}
            </span>
        </div>
    );
};
};

export default FilterObject;