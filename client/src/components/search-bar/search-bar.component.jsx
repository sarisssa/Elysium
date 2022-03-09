import { useState } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';

import { sortProducts } from '../../utils/utils.js';

import SearchBarCancelIcon from '../search-bar-cancel-icon/search-bar-cancel-icon.component';
import SearchBarDropdown from '../search-bar-dropdown/search-bar-dropdown.component';
import { Overlay } from '../header/header.styles.jsx';

import './search-bar.styles.scss';

const SearchBar = ({ collections }) => {

  const [searchbar, setSearchbar] = useState('');
  const [products, setProducts] = useState([]);

  const allCategories = Object.keys(collections); //Arr of product categories

  const search = (event) => {
    setSearchbar(event.target.value);
    let sortedProducts = sortProducts(allCategories, collections, event.target.value);
    setProducts(sortedProducts);
  }

  return (
    <>
      <div className='search-bar-container'>
        <div className='search-bar-inner'>
          <input
            className='search-bar-input'
            type='search'
            placeholder='Search'
            value={searchbar}
            onChange={event => search(event)}
          />
          {searchbar && searchbar.length > 0 ? <SearchBarDropdown products={products} /> : null}
        </div>
        <SearchBarCancelIcon />
      </div>
      <Overlay />
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(SearchBar);


