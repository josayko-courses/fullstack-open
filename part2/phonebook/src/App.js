import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons.js';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');
  const [search, setSearch] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    personService.getAll().then((initialList) => {
      setPersons(initialList);
    });
  }, []);

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
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName('');
        setNewNum('');
      });
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
      <h3>Add a new</h3>
      <PersonForm
        props={{
          newName,
          handleNameChange,
          newNum,
          handleNumChange,
          addPerson
        }}
      />
      <h3>Numbers</h3>
      <Persons numbersList={numbersList} />
    </div>
  );
};

export default App;
