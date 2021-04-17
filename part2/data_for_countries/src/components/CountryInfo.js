const CountryInfo = ({ country }) => {
  return (
    <>
      <h2>{country.name}</h2>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>
      <h3>languages</h3>
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
    </>
  );
};

export default CountryInfo;
