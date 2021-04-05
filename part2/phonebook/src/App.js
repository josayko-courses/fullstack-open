import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('Enter a new name...');

  const isDuplicateName = (persons) => {
    let result = false;

    persons.forEach((person) => {
      if (person.name === newName) {
        return (result = true);
      }
    });
    return result;
  };

  const addPerson = (event) => {
    event.preventDefault();
    if (!isDuplicateName(persons)) {
      const personObject = {
        id: newName,
        name: newName
      };
      setPersons(persons.concat(personObject));
      setNewName('');
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.id}>{person.name}</div>
      ))}
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
