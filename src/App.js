import React, { Component } from 'react';
import PlaceholderContainer from './PlaceholderContainer.js';

class App extends Component {
    render() {
      return (
        <div className="App">
          <PlaceholderContainer width="300" height="200"/>
          <PlaceholderContainer width="200" height="200"/>
          <PlaceholderContainer width="300" height="100"/>
          <PlaceholderContainer width="100" height="100"/>
          <PlaceholderContainer width="400" height="200"/>
          <PlaceholderContainer width="300" height="300"/>
          <PlaceholderContainer width="128" height="250"/>
        </div>
      );
    }
}

export default App;
