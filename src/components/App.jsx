import React, { Component } from 'react';

 export class Feedback extends Component{

state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
 
  handlePositiveFeedback = () =>{
    this.setState(prevState =>({
      good: prevState.good +1 
    }));
  };
  handleNegativeFeedback = () =>{
    this.setState(prevState =>({
      bad: prevState.bad +1 
    }));
  };
  handleNeutralFeedback =()=>{
    this.setState(prevState =>({
      neutral: prevState.neutral +1 
    }));
  };
render(){
  return (
    <div>
      <h2>Please leave your feedback</h2>
      <div>
        <button onClick = {this.handlePositiveFeedback}>Good</button>
        <button onClick = {this.handleNeutralFeedback}>Neutral</button>
        <button onClick = {this.handleNegativeFeedback}>Bad</button>
      </div>
      <div>
        <h2>Statistics</h2>
        <span>Good: {this.state.good}</span><br />
        <span>Neutral: {this.state.neutral}</span><br />
        <span>Bad: {this.state.bad}</span><br />
      </div>
    </div>
  );
}
}