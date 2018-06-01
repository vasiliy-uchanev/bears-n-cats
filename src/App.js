import React, { Component } from 'react';
import CatContainer from './CatContainer.js'
import BearContainer from './BearContainer.js'
import BillContainer from './BillContainer.js'

class App extends Component {
    render() {
      return (
        <div className="App">
          <CatContainer width="300" height="200"/>
          <CatContainer width="200" height="200"/>
          <CatContainer width="300" height="100"/>

          <BearContainer width="300" height="200"/>
          <BearContainer width="200" height="200"/>
          <BearContainer width="300" height="100"/>

          <BillContainer width="300" height="200"/>
          <BillContainer width="200" height="200"/>
          <BillContainer width="300" height="100"/>
        </div>
      );
    }
}

export default App;
