import React, { Component } from 'react';
import PlaceholderContainer from './PlaceholderContainer.js';

class BearContainer extends Component {
  render() {
    return (
      <div className="container bear-container">
        <PlaceholderContainer width={this.props.width} height={this.props.height} placeholderProviderUrl="http://placebear.com" />
      </div>
    );
  }
}

export default BearContainer;
