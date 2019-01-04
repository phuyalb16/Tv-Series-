import React, { Component } from 'react';
import './App.css';
import Main from '../Main';
import 'whatwg-fetch';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header bg-success">
          TV Series
        </header>
        <Main/>
      </div>
    );
  }
}

export default App;
