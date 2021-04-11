const Content = ({ filteredArray }) => {
  if (filteredArray.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (filteredArray.length === 1) {
    return (
      <>
        <h2>{filteredArray[0].name}</h2>
        <div>capital {filteredArray[0].capital}</div>
        <div>population {filteredArray[0].population}</div>
        <h3>languages</h3>
        <ul>
          {filteredArray[0].languages.map((lang) => {
            return <li key={lang.iso639_1}>{lang.name}</li>;
          })}
        </ul>
        <img
          style={{ height: '100px', width: '100px' }}
          src={filteredArray[0].flag}
          alt={filteredArray[0].name + ' flag'}
        />
      </>
    );
  } else {
    return (
      <div>
        {filteredArray.map((country) => {
          return <div key={country.numericCode}>{country.name}</div>;
        })}
      </div>
    );
  }
};

export default Content;
