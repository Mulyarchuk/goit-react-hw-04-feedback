import {useState} from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export default function App(){

 const [good, setGood]=useState(0);
 const [neutral, setNeutral] = useState(0);
 const [bad, setBad] = useState(0);
  

  

const countTotalFeedback =() =>{
 return good + neutral + bad
  };

const countPositiveFeedbackPercentage =() =>{
return   Math.round(good/(good + neutral + bad)*100)
  };

const onLeaveFeedback = item => {
  switch (item){
    case `good`:
      setGood(prevState=>prevState+1);
      break;
    case `neutral`:
      setNeutral(prevState=>prevState+1);
      break;
    case `bad`:
      setBad(prevState=>prevState+1);
      break;
    default:
      return;

  }

  };

  
    
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: `column`,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title="Please leave feedback">
    <FeedbackOptions options={[`good`, `neutral`,`bad`]} onLeaveFeedback={onLeaveFeedback}/>
    </Section>
    <Section title="Statistics">
      { countTotalFeedback() ?
      (<Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/>)
      : (<Notification message="There is no feedback"/>)}
    
    </Section>
    </div>
  );
    };



