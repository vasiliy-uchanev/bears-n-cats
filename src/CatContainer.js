import React, { Component } from 'react';
import PlaceholderContainer from './PlaceholderContainer.js';

class CatContainer extends Component {
    constructor(props){
        super(props);
    }

    render() {
      return (
        <div class="container cat-container">
          <PlaceholderContainer width={this.props.width} height={this.props.height} placeholderProviderUrl="http://placekitten.com"/>
        </div>
      );
    }
}

export default CatContainer;
