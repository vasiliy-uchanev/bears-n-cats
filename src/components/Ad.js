import React, { Component } from 'react';
import CatContainer from './CatContainer.js'
import BearContainer from './BearContainer.js'
import BillContainer from './BillContainer.js'

class Ad extends Component {
  handleClick = () => {
    this.props.onDestroy(this.props.internalKey);
  }

  render() {
    const imageContainer = this.props.ad.type === 'bear' ? (
      <BearContainer width="150" height="150" />
    ) : this.props.ad.type === 'bill' ? (
      <BillContainer width="150" height="150" />
    ) : (
          <CatContainer width="150" height="150" />
        );
    return (
      <div className="ad-container">
        <span>
          {imageContainer}
        </span>
        <span className="ad-text">
          <h2>{this.props.ad.header}</h2>
          <p> {this.props.ad.text} </p>
          <button type="button" onClick={(e) => this.handleClick(e)}> Destroy </button>
        </span>
      </div>
    );
  }
}

export default Ad;
