import React, { Component } from 'react';
import './App.css';
import FirstPage from './FirstPage.js';
import SecondPage from './SecondPage.js';

class App extends Component {

  componentWillMount(){
    this.setState(
      {currentScreen:'firstPage'}
    );
  }

  handleClick = (screenName)=>{
    this.setState({currentScreen:screenName});
  };

  render() {
    if(this.state.currentScreen==='firstPage'){
      return (
          <div className="App">
            <FirstPage handleClick={this.handleClick.bind(this)}/>
          </div>
      );
    } else {
      return(
        <div className="App">
          <SecondPage handleClick={this.handleClick.bind(this)}/>
        </div>
      )
    }
  }
}

export default App;
