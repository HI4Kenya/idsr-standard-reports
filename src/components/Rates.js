import React, { Component } from 'react';
import './App.css';

class Iframe extends Component {
    render(){
        return(
            <div className="row">
            <div className="col-12">
            <iframe src={this.props.src} height={this.props.height} width={this.props.width}/>
            </div>
            </div>
          ) 
    }

}   
class Rates extends Component {
render() {

  return (
    <div className="row">
      <div className="col-12">
      <Iframe src={this.props.src} height="1400" width="1000"/>,
      </div>
    </div>
  )
}
}

export default Rates;