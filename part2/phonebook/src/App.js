import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');

  const isDuplicateName = (persons) => {
    let result = false;

    persons.forEach((person) => {
      if (person.name.toLowerCase() === newName.toLowerCase()) {
        return (result = true);
      }
    });
    return result;
  };

  const addPerson = (event) => {
    event.preventDefault();
    if (newName && isDuplicateName(persons)) {
      alert(`${newName} is already added to phonebook`);
    } else if (newName && newNum) {
      const personObject = {
        id: newName,
        name: newName,
        number: newNum
      };
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewNum('');
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumChange = (event) => {
    setNewNum(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNum} onChange={handleNumChange} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;
