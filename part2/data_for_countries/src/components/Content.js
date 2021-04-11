const Content = ({ filteredArray }) => {
  if (filteredArray.length > 10) {
    return <div>Too many matches, specify another filter</div>;
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
