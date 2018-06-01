import React, { Component } from 'react';

class PlaceholderContainer extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="placeholder-container" style={{height: this.props.height + 'px', width: this.props.width + 'px'}}>
                <img src={"http://placebear.com/" + this.props.width + "/" + this.props.height}/>
            </div>
        );
    }
}

export default PlaceholderContainer;