const Total = ({ parts }) => {
  let total = 0;

  return (
    <div>
      <strong>
        Number of exercises{' '}
        {parts.forEach((part) => {
          total += part.exercises;
        })}
        {total}
      </strong>
    </div>
  );
};

export default Total;
