const Persons = ({ numbersList, deletePerson }) => {
  return (
    <>
      {numbersList.map((person) => (
        <div key={person.number}>
          {person.name} {person.number}{' '}
          <button
            onClick={() => {
              deletePerson(person.id, person.name);
            }}>
            delete
          </button>
        </div>
      ))}
    </>
  );
};

export default Persons;
