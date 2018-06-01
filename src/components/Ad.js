import React, { Component } from 'react';
import CatContainer from './CatContainer.js'
import BearContainer from './BearContainer.js'
import BillContainer from './BillContainer.js'

class Ad extends Component {
    constructor(props){
        super(props);
    }

    render() {
    var imageContainer = this.props.adType === 'bear'? (
        <BearContainer width="150" height="150"/>
    ):this.props.adType === 'bill'?(
        <BillContainer width="150" height="150"/>
    ):(
        <CatContainer width="150" height="150"/>
    );
        return (
            <div className="ad-container">
                <span>
                    {imageContainer}
                </span>
                <span className="ad-text">
                    <h2>{this.props.adHeader}</h2>
                    <p> {this.props.adText} </p>
                </span>
            </div>
        );
    }
}

export default Ad;
