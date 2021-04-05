const Persons = ({ numbersList }) => {
  return (
    <>
      {numbersList.map((person) => (
        <div key={person.number}>
          {person.name} {person.number}
        </div>
      ))}
    </>
  );
};

export default Persons;
