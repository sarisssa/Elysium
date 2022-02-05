import { useState } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';

import { sortProducts } from '../../utils/utils.js';

import SearchBarCancelIcon from '../search-bar-cancel-icon/search-bar-cancel-icon.component';
import SearchBarDropdown from '../search-bar-dropdown/search-bar-dropdown.component';
import { Overlay } from '../header/header.styles.jsx';

const SearchBar = ({ collections }) => {

  const [searchbar, setSearchbar] = useState('');
  const [products, setProducts] = useState([]);

  const allCategories = Object.keys(collections);

  const search = (event) => {
    setSearchbar(event.target.value);
    let sortedProducts = sortProducts(allCategories, collections, event.target.value);
    setProducts(sortedProducts);
  }

  const styles = {
    position: 'fixed',
    background: 'white',
    top: '0',
    left: '0',
    display: 'flex',
    padding: '2rem',
    zIndex: 5,
    width: '100%',
    justifyContent: 'center'
  };

  const searchBarStyles = {
    background: 'white',
    borderRadius: '30px',
    padding: '1rem 2rem',
    maxWidth: '500px',
    width: '100%',
  };

  return (
    <>
      <div className='search-bar' style={styles}>
        <input
          className='search-bar-input'
          type='search'
          placeholder='Search'
          value={searchbar}
          onChange={event => search(event)}
          style={searchBarStyles}
        />
        <SearchBarCancelIcon />
        {searchbar && searchbar.length > 0 ? <SearchBarDropdown products={products} /> : null}
      </div>
      <Overlay />
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(SearchBar);

