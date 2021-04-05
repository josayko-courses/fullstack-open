import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');
  const [search, setSearch] = useState('');
  const [numbersList, setNumbersList] = useState(persons);

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

  const handleSearch = (event) => {
    let result = persons;

    setSearch(event.target.value);
    if (event.target.value) {
      result = persons.filter((person) =>
        person.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
    }
    setNumbersList(result);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={search} onChange={handleSearch} />
      </div>
      <h2>Add a new</h2>
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
      {numbersList.map((person) => (
        <div key={person.number}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;
