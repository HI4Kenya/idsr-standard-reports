import React, { Component } from 'react';
import './App.css';

class Iframe extends Component {
    render(){
        return(
            <div>
              <iframe src={this.props.src} height={this.props.height} width={this.props.width}/>
            </div>
          ) 
    }

}   
class Rates extends Component {
render() {

  return (
    <div className="row">
      <div className="col-10">
      <Iframe src="../sb.html?period=2018W34" height="500" width="1000"/>,
      </div>
    </div>
  )
}
}

export default Rates;