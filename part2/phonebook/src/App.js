import React, { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';

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
  const [showAll, setShowAll] = useState(true);

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
    setSearch(event.target.value);
    setShowAll(false);
  };

  const numbersList = showAll
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <h2>Add a new</h2>
      <PersonForm
        props={{
          newName,
          handleNameChange,
          newNum,
          handleNumChange,
          addPerson
        }}
      />
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
