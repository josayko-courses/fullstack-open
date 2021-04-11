import { useState, useEffect } from 'react';
import axios from 'axios';

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
      find countries{' '}
      <input type="text" value={search} onChange={handleSearch} />
      <div>
        {filteredArray.map((country) => {
          return <div key={country.numericCode}>{country.name}</div>;
        })}
      </div>
    </div>
  );
};

export default App;
