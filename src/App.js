import { useReducer } from 'react'
import Container from './components/Container'
import Statistics from './components/Statistics';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

function countReducer(prevState, nextState) {
  return prevState + nextState
}

function App() {
  
  const [good, setGood] = useReducer(countReducer, 0)
  const [neutral, setNeutral] = useReducer(countReducer, 0)
  const [bad, setBad] = useReducer(countReducer, 0)

  const handleIncreament = (type) => {
    switch (type) {

      case 'good':
        setGood(1)
        break

      case 'neutral':
        setNeutral(1)
        break

      case 'bad':
        setBad(1)
        break

      default:
        return
    }
  }

    const countTotalFeedback = () => {
      return good + neutral + bad;
    }

    const countPositivePercentage = () => {
      return Math.round((good / countTotalFeedback()) * 100)
    }
  

  return (
    <Container>
      <Section title="Please leave feedback"/>

      <FeedbackOptions
        options={{good, neutral, bad }}
            onLeaveFeedback={handleIncreament}
      />
       <Section title="Statictics"/>
      {countTotalFeedback() ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositivePercentage()} />
      ) : (
        <Notification message="No feedback given" />
      )}
    </Container>
  )
}

export default App