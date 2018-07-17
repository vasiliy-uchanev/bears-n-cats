import React, { Component } from 'react';

class PlaceholderContainer extends Component {
  render() {
    return (
      <div className="placeholder-container" style={{ height: this.props.height + 'px', width: this.props.width + 'px' }}>
        <img src={this.props.placeholderProviderUrl + "/" + this.props.width + "/" + this.props.height} />
      </div>
    );
  }
}

export default PlaceholderContainer;