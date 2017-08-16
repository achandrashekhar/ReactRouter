import React, {Component} from 'react';
import './App.css'

class SecondPage extends Component {

  callParentProp = (arg)=>{
      this.setState(function() {
        this.props.handleClick(arg);
      });
    }
  render(){
    return(
      <div className="card content2">
          <div className="card-block">
          <h3 className="card-title">Hello again</h3>
          <p className="card-text">We made it to the second page!</p>
          <button onClick={this.callParentProp.bind(this,'firstPage')} type="submit" className="btn btn-primary">To previous page!</button>
          </div>
      </div>
    );
  }
}


export default SecondPage;
