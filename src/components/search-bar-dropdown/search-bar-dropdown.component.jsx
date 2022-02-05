import SearchBarItem from "../search-bar-item/search-bar-item";

import './search-bar-dropdown.styles.scss';

const SearchBarDropdown = ({ products }) => {

    return (
        <div className='search-bar-dropdown'>
            <div className='search-bar-items'>
                {products.length ? (
                    products.map(product => (
                        <SearchBarItem key={product.id} item={product} />
                    ))
                ) : (
                    null
                )}
            </div>
        </div>
    )
}

export default SearchBarDropdown;

