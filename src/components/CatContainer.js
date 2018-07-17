import React, { Component } from 'react';
import PlaceholderContainer from './PlaceholderContainer.js';

class CatContainer extends Component {
  render() {
    return (
      <div className="container cat-container">
        <PlaceholderContainer width={this.props.width} height={this.props.height} placeholderProviderUrl="http://placekitten.com" />
      </div>
    );
  }
}

export default CatContainer;
