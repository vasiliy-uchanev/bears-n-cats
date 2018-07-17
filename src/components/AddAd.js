import React, { Component } from 'react';

class AddAd extends Component {
  constructor(props) {
    super(props);
    this.state = { header: '', text: '', type: 'cat' };
  }

  handleHeaderChange = (e) => {
    this.setState({ header: e.target.value });
  }

  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleTypeChange = (e) => {
    this.setState({ type: e.target.value });
  }

  handleSave = (e) => {
    this.props.saveNewAd(this.state);
    this.props.onClose();
  }

  render() {
    return (
      <div>
        <div>
          <label>Header text:</label>
          <input type="text" value={this.state.header} onChange={this.handleHeaderChange} />
        </div>
        <div>
          <label>Ad text:</label>
          <input type="text" value={this.state.text} onChange={this.handleTextChange} />
        </div>

        <div>
          <label>Ad type:</label>
          <div>
            <input type="radio" value="cat" checked={this.state.type === "cat"} onChange={this.handleTypeChange}/>
            <label>Cat</label>
          </div>
          <div>
            <input type="radio" value="bear" checked={this.state.type === "bear"} onChange={this.handleTypeChange}/>
            <label>Bear</label>
          </div>
          <div>
            <input type="radio" value="bill" checked={this.state.type === "bill"} onChange={this.handleTypeChange}/>
            <label>Bill</label>
          </div>
        </div>
        <button type="button" onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default AddAd;
