import React, { Component } from 'react';

class window extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return(
        <div className="window" style={{width:this.props.width,height:this.props.height}} onClick={this.props.onClick}>
            <div className="window-header">
                {this.props.title}
            </div>
            <div className="window-body">
               {this.props.content}
            </div>
        </div>);
    }
}
 
export default window;