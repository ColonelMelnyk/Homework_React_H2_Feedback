import React, { Component } from 'react';
import { Notification } from './Notification';
import { FeedbackButtons } from './FeedbackButtons';
import { FeedbackSection } from './Section';
import { FeedbackStats } from './Stats';
 export class Feedback extends Component{
state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  handleTotalFeedbackCount = () =>{
    const {good, bad, neutral} = this.state;
    const total = good + neutral + bad;
    return total;
  }
  handlePositiveFeedbackPercentage = () => {
    const { good, bad, neutral} = this.state;
    const total = good + neutral + bad;
    let percentage = (good / total)*100;
    return Math.round(percentage) ; 
  }
   handleFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };
render(){
  const { good, bad, neutral} = this.state;
  const total = this.handleTotalFeedbackCount();
  const percentage = this.handlePositiveFeedbackPercentage();
  const AppOptions = Object.keys(this.state);
  return (
    <div>
    <FeedbackSection title = {"Please leave your feedback"}>
    <FeedbackButtons
      options = {AppOptions} handleFeedback ={this.handleFeedback}
    />
    </FeedbackSection>
    <FeedbackSection title = {"Statistics"}>
    {total > 0 ? (
       <FeedbackStats
       good={good} 
       bad={bad} 
       neutral={neutral} 
       total={total} 
       percentage= {percentage}
       />
    ):(
      <Notification
      message = {"There is no feedback"}
      />
    )};
    </FeedbackSection>
    </div>
  );
}
}
// <div>
    //   <h2>Please leave your feedback</h2>
    //   <div>
    //     <button onClick = {this.handlePositiveFeedback}>Good</button>
    //     <button onClick = {this.handleNeutralFeedback}>Neutral</button>
    //     <button onClick = {this.handleNegativeFeedback}>Bad</button>
    //   </div>
    //   <div>
      //     <h2>Statistics</h2>
      //     <span>Good: {this.state.good}</span><br />
      //     <span>Neutral: {this.state.neutral}</span><br />
      //     <span>Bad: {this.state.bad}</span><br />
      //     <span>Total: {total}</span><br/>
      //     {
      //       percentage > 0 ? ( <span>Positive Feedback: {percentage}%</span>):(<span>Positive Feedback: 0%</span>)
      //     }
    //    </div>
    // </div>

     // handlePositiveFeedback = () =>{
  //   this.setState(prevState =>({
  //     good: prevState.good +1 
  //   }));
  // };
  // handleNegativeFeedback = () =>{
  //   this.setState(prevState =>({
  //     bad: prevState.bad +1 
  //   }));
  // };
  // handleNeutralFeedback =()=>{
  //   this.setState(prevState =>({
  //     neutral: prevState.neutral +1 
  //   }));
  // };