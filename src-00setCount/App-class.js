import React, { Component } from 'react';
import './App.css';

export default class App extends Component{
  state = {
    count: 0 
  }
  modify = (n) => {
    this.setState({
      count:n
    })
  }
  render(){
    const {count} = this.state;
    return(
        <>
          <div>{count}</div>
          <button onClick={() => this.modify(count + 1)}>+</button>
        </>      
    )
  }
}
