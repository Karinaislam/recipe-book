import React, { Component } from 'react';
import Sidebar from './Components/Sidebar/Sidebar'
import Submitbox from './Components/Submitbox/Submitbox'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar></Sidebar>
        <Submitbox></Submitbox>
      </div>
    );
  }
}



export default App;
