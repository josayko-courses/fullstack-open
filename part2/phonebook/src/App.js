import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons.js';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');
  const [search, setSearch] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialList) => {
      setPersons(initialList);
    });
  }, [persons]);

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
    const personObject = {
      name: newName,
      number: newNum,
      id: newName.toLowerCase()
    };
    if (newName && newNum && isDuplicateName(persons)) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one ?`
        )
      ) {
        personService.update(newName.toLowerCase(), personObject);
        setNotification(`Updated ${newName}'s number`);
        setTimeout(() => {
          setNotification(null);
        }, 3000);
      }
    } else if (newName && newNum) {
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName('');
        setNewNum('');
      });
      setNotification(`Added ${newName}`);
      setTimeout(() => {
        setNotification(null);
      }, 3000);
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

  const deletePerson = (id, name) => {
    if (window.confirm(`Do you really want to delete ${name}?`)) {
      personService.deleteId(id);
    }
  };

  const numbersList = showAll
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
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
      <Persons numbersList={numbersList} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
