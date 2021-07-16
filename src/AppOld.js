import React, { Component } from 'react'
import Container from './components/Container'
import Statistics from './components/Statistics';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

class AppOld extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
  handleIncreament = (name) => {
      this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
      };
  countTotalFeedback = () =>
     this.state.good + this.state.neutral + this.state.bad;

  countpositivePercentage = () =>
    this.state.good
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;

    render(){
        const {bad, good, neutral} = this.state;
        return(
            <Container>
            <Section title="Please leave feedback"></Section>

            <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncreament}
                />
                
            <Section title="Statictics"/>
                {this.countTotalFeedback() ? (
                    <Statistics
                      good={good}
                      neutral={neutral}
                      bad={bad}
                      total={this.countTotalFeedback()}
                      positivePercentage={this.countpositivePercentage()}>
                    </Statistics>
                 
                ) : (
                    <Notification message="No feedback given"></Notification>)}
            </Container>
        )
    }
}

export default AppOld;