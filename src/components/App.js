import React, { Component } from 'react';
import Ad from './Ad.js';

class App extends Component {
    render() {
      return (
        <div className="App">
          <Ad adHeader="Selling Bills!" adText="REALLY CHEAP!" adType="bill"/>
          <Ad adHeader="Selling Bears!" adText="BROWN! AND WHITE!! SOME GRIZZLY BEARS TOO!" adType="bear"/>
          <Ad adHeader="Selling Cats!" adText="FURRY!!" adType="cat"/>
        </div>
      );
    }
}

export default App;
