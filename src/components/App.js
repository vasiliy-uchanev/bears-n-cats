import React, { Component } from 'react';
import AdBoard from './AdBoard.js';

class App extends Component {
  render() {
    const initialAds = [
      { type: "bill", header: "Selling Bills!", text: "REALLY CHEAP!" },
      { type: "bear", header: "Selling Bears!", text: "BROWN! AND WHITE!! SOME GRIZZLY BEARS TOO!" },
      { type: "cat", header: "Selling Cats!", text: "FURRY!!" },
    ]
    return (
      <div className="App">
        <AdBoard ads={initialAds} />
      </div>
    );
  }
}

export default App;
