import React, { Component } from 'react';
import Ad from './Ad.js'
import Modal from './Modal.js'

class AdBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { ads: this.props.ads, adAddModalShown: false };
    this.onAdDestroy = this.onAdDestroy.bind(this);
  }

  onAdDestroy(index) {
    this.state.ads.splice(index, 1);
    this.setState({
      ads: this.state.ads
    });
  }

  handleAddAdClick = () => {
    this.state.ads.push({ type: "cat", header: "I AM COMPLETELY NEW!!!", text: "WAS ADDED BY BUTTON CLICK!!!" });
    this.setState({
      ads: this.state.ads
    });
  }
  toggleModal = () => {
    this.setState({
      adAddModalShown: !this.state.adAddModalShown
    });
  }

  render() {
    const ads = this.props.ads.map((ad, index) => {
      return <Ad ad={ad} key={index} internalKey={index} onDestroy={this.onAdDestroy} />
    });
    return (
      <div>
        <header className="ad-board-header">
          <h1>Bears n' Cats! (And sometimes Bill Murray...)</h1>
          <div>
            <span>
              <button type="button" onClick={this.toggleModal}>Add an ad</button>
            </span>
          </div>
        </header>
        <div className="ad-board">
          {ads}
        </div>

        <Modal show={this.state.adAddModalShown} onClose={this.toggleModal}>
          Here's some content for the modal
        </Modal>
      </div>
    );
  }
}

export default AdBoard;
