import axios from 'axios';
import { useEffect, useState } from 'react';

const CountryInfo = ({ country }) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [weather, setWeather] = useState({
    temperature: 0,
    weather_icons: [],
    wind_speed: 0,
    wind_dir: ''
  });

  useEffect(() => {
    axios
      .get(
        'http://api.weatherstack.com/current?access_key=' +
          api_key +
          '&query=' +
          country.capital
      )
      .then((res) => {
        if (res.data.current) {
          setWeather(res.data.current);
        }
      });
  }, [api_key, country]);

  return (
    <>
      <h2>{country.name}</h2>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>
      <h3>spoken languages</h3>
      <ul>
        {country.languages.map((lang) => {
          return <li key={lang.iso639_1}>{lang.name}</li>;
        })}
      </ul>
      <img
        style={{ height: '100px', width: '150' }}
        src={country.flag}
        alt={country.demonym + ' flag'}
      />
      <h3>Weather in {country.capital}</h3>
      <div>
        <strong>temperature: </strong>
        {weather.temperature} Celsius
      </div>
      <img src={weather.weather_icons} alt="" />
      <div>
        <strong>wind: </strong>
        {weather.wind_speed} mph direction {weather.wind_dir}
      </div>
    </>
  );
};

export default CountryInfo;
