import React, { Component } from 'react';

class list extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.renderList = this.renderList.bind(this)
    }
    renderList() {
        let data = this.props.data
        if(data) {
            return(
                data.map((val,idx) => {
                return <li className={idx === this.props.selected? "selected" : null} key={idx} onMouseEnter={this.props.hover} onClick={()=>{ this.props.onSelect(idx) }}>{val.title}</li>
                })
            )
        }
    }
    render() { 
        return(
            <div className="hex-list">
                {this.renderList()}
            </div>
        );
    }
}
 
export default list;