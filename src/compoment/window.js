import React, { Component } from 'react';
import AudioSpectrum from 'react-audio-spectrum'

class window extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return(
        <div className="window" style={{width:this.props.width}}>
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