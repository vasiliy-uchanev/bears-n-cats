import React, { Component } from 'react';
import PlaceholderContainer from './PlaceholderContainer.js';

class BearContainer extends Component {
    constructor(props){
        super(props);
    }

    render() {
      return (
        <div class="container bear-container">
            <PlaceholderContainer width={this.props.width} height={this.props.height} placeholderProviderUrl="http://placebear.com"/>
        </div>
      );
    }
}

export default BearContainer;
