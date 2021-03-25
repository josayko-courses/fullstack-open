import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];

  const [selected, setSelected] = useState(0);
  const ary = Array(anecdotes.length).fill(0);
  const [votes, setVotes] = useState(ary);
  const [mostVoted, setMostVoted] = useState(0);

  const selection = () => {
    const nb = Math.floor(Math.random() * anecdotes.length);
    setSelected(nb);
  };

  const votesResult = (copy) => {
    const max = Math.max(copy);
    let result = 0;

    console.log(copy);
    copy.forEach((el, index) => {
      if (el === max) result = index;
    });
    if (mostVoted !== result) setMostVoted(result);
  };

  const addVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    votesResult(copy);
    setVotes(copy);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>has {votes[selected]} votes</div>
      <div>
        <button onClick={() => addVote()}>vote</button>
        <button onClick={() => selection()}>next anecdote</button>
      </div>
      <h1>Anecdote with the most votes</h1>
      {anecdotes[mostVoted]}
    </div>
  );
};

export default App;
