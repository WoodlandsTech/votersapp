import React  from 'react';
import './App.css';

export var inputval;

function handler(e) {
    
    e.preventDefault();

    inputval = e.target.value;
    console.log(inputval);
    fetch("https://voterapi.woodlandstech.org/getVoters?LastNAme=" + inputval,
    {mode: 'no-cors'}).finally(function(test){
        console.log(test)
    });
    console.log('The link was clicked.');

    return inputval;
}
function SearchWorker(inputval) {
    var thistring = '';
    if (typeof inputval == 'string') {
        thistring = inputval;
        console.log(thistring)
    }
    return (
            <p>
            <input className="Search-input" type="text" value={inputval.value} name="LastName"  onChange={handler} />

            </p>
    );  
}

export default SearchWorker;
