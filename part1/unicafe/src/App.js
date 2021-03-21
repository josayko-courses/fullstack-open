import React, { useState } from 'react';

const Statistic = ({ text, value }) => {
  let sign = '';

  if (text === 'positive') {
    sign = '%';
  }
  return (
    <div>
      {text} {value} {sign}
    </div>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  if (good + bad + neutral === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={good + neutral + bad} />
      <Statistic
        text="average"
        value={(good + bad * -1) / (good + neutral + bad)}
      />
      <Statistic
        text="positive"
        value={(good / (good + neutral + bad)) * 100}
      />
    </div>
  );
};

const Button = ({ text, value, clickHandler }) => {
  return <button onClick={() => clickHandler(value + 1)}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={'good'} value={good} clickHandler={setGood} />
      <Button text={'neutral'} value={neutral} clickHandler={setNeutral} />
      <Button text={'bad'} value={bad} clickHandler={setBad} />
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
