import React, {Component} from 'react';
import './App.css'

class FirstPage extends Component {

  callParentProp = (arg)=>{
      this.setState(function() {
        this.props.handleClick(arg);
      });
    }
  render(){
    return(
      <div className="card content">
          <div className="card-block">
          <h3 className="card-title">Hello,</h3>
          <p className="card-text">RealWorld React!</p>
          <button onClick={this.callParentProp.bind(this,'secondPage')}type="submit" className="btn btn-primary">To Next Page!</button>
          </div>
      </div>
    );
  }
}


export default FirstPage;
