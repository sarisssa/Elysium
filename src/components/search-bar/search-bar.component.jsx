import { useState } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';

import SearchBarDropdown from '../search-bar-dropdown/search-bar-dropdown.component';

const SearchBar = ({ collections }) => {

  const [searchbar, setSearchbar] = useState('');
  const [products, setProducts] = useState([]);

  const allCategories = Object.keys(collections);

  const search = (event) => {
    setSearchbar(event.target.value);
    
    const filteredProducts = [];

    for (let key of allCategories) {
      let curCollection = collections[key].items;
      let matchedItem = match(event.target.value, curCollection);
      matchedItem.map(product => product.category = key);
      filteredProducts.push(...matchedItem);
    }
    setProducts(filteredProducts);
  }

  const match = (s, items) => {
    let values = items;
    // const p = Array.from(s).reduce((a, v, i) => `${a}[^${s.substr(i)}]*?${v}`, '').toLowerCase();
    return values.filter(v => v.name.toLowerCase().indexOf(s) !== -1);
  };

  return (
    <div className='search-bar'>
      <input
        className='search-bar-input'
        type='search'
        placeholder='Search'
        value={searchbar}
        onChange={event => search(event)}
      />
      {searchbar && searchbar.length > 0 ? <SearchBarDropdown products={products} /> : null}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(SearchBar);

