import CountryInfo from './CountryInfo';

const Content = ({ filteredArray }) => {
  if (filteredArray.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (filteredArray.length === 1) {
    console.log(filteredArray[0]);
    return <CountryInfo country={filteredArray[0]} />;
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
