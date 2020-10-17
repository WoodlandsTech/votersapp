import React from 'react';
import './App.css';
import SearchVoters from './SearchVoters.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Absentee and Early Voter Record Search 2020</h1>
        <h2>Montgomery County, TX</h2>
        <h3>Enter your last name to make sure your vote counted!</h3>
          <SearchVoters></SearchVoters>

      </header>
    </div>
  );
}

export default App;
