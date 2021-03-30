const Total = ({ parts }) => {
  let initialValue = 0;
  const total = parts.reduce((s, p) => s + p.exercises, initialValue);

  return (
    <div>
      <strong>total of {total} exercises</strong>
    </div>
  );
};

export default Total;
