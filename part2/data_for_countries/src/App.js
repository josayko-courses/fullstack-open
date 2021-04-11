import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((res) => setCountries(res.data));
  }, []);

  console.log(countries);
  return (
    <div className="App">
      find countries <input type="text" />
      <div></div>
    </div>
  );
};

export default App;
