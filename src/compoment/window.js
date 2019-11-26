import React, { Component } from 'react';

class window extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return(
        <div className="window" style={{width:this.props.width}}>
            <div className="window-header">
            ログイン
            </div>
            <div className="window-body">
               {this.props.content}
            </div>
        </div>);
    }
}
 
export default window;