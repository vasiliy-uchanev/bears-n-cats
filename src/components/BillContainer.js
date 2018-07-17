import React, { Component } from 'react';
import PlaceholderContainer from './PlaceholderContainer.js';

class BillContainer extends Component {
  render() {
    return (
      <div className="container bill-container">
        <PlaceholderContainer width={this.props.width} height={this.props.height} placeholderProviderUrl="http://fillmurray.com" />
      </div>
    );
  }
}

export default BillContainer;
