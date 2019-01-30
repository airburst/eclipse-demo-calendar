import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar/Calendar';
import { events } from './events.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar data={events} />
      </div>
    );
  }
}

export default App;
