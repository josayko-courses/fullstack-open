import { useState, useEffect } from 'react';
import axios from 'axios';
import Content from './components/Content';
import Search from './components/Search';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((res) => setCountries(res.data));
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredArray = search
    ? countries.filter((country) => {
        return country.name.toLowerCase().includes(search.toLowerCase());
      })
    : [];

  return (
    <div className="App">
      <Search search={search} handleSearch={handleSearch} />
      <Content filteredArray={filteredArray} setSearch={setSearch} />
    </div>
  );
};

export default App;
