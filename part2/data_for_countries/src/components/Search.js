const Search = ({ search, handleSearch }) => {
  return (
    <>
      find countries{' '}
      <input type="text" value={search} onChange={handleSearch} />
    </>
  );
};

export default Search;
