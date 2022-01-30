const SearchBar = ({ searchfield, inputChange }) => {

  return (
    <div className='search-bar'>
      <input
        className='search-bar-input'
        type='search'
        onChange={inputChange}
      />
    </div>
  );
}

export default SearchBar;