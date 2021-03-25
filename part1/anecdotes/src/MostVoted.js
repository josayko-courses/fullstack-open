const MostVoted = ({ anecdotes, votes, mostVoted }) => {
  let hasVote = false;

  votes.forEach((vote) => {
    if (vote !== 0) hasVote = true;
  });

  if (hasVote === false) {
    return (
      <div>
        <h1>Anecdote with the most votes</h1>
        No votes for the moment
      </div>
    );
  }

  return (
    <>
      <h1>Anecdote with the most votes</h1>
      {anecdotes[mostVoted]}
      <div>has {votes[mostVoted]} votes</div>
    </>
  );
};

export default MostVoted;
