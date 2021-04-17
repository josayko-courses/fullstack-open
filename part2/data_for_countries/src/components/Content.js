import CountryInfo from './CountryInfo';

const Content = ({ filteredArray, setSearch }) => {
  const handleClick = (name) => {
    setSearch(name);
  };

  if (filteredArray.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (filteredArray.length === 1) {
    return <CountryInfo country={filteredArray[0]} />;
  } else {
    return (
      <div>
        {filteredArray.map((country) => {
          return (
            <div key={country.numericCode}>
              {country.name}
              <button
                onClick={() => {
                  handleClick(country.name);
                }}>
                show
              </button>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Content;
