import { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors';

const SearchBar = ({ collections }) => {

  const [searchbar, setSearchbar] = useState('');
  const [products, setProducts] = useState([]);

  //New searchBarDropdown component : pass products as prop
  //If the length of products is > 0, then dynamically renders a div and map through products
  //Else nothing and empty div

  const search = (event) => {
    setSearchbar(event.target.value);
    const filteredProducts = match(event.target.value);
    console.log('TEST TEST TEST', filteredProducts);
    setProducts(filteredProducts);
  }

  const match = (s) => {
    let values = collections.accessories.items;
    const p = Array.from(s).reduce((a, v, i) => `${a}[^${s.substr(i)}]*?${v}`, '').toLowerCase();
    const re = RegExp(p);
    return values.filter(v => v.name.toLowerCase().match(re));
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
      {/* <NEW COMPONENT HERE></NEW> */}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(SearchBar);

