import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { toggleSearchBarHidden } from '../../redux/searchbar/searchbar.actions';

import './search-bar-item.styles.scss';

const SearchBarItem = ({ item, history, toggleSearchBarHidden }) => {
    const { id, imageUrl, name, category } = item;

    return (
        <div className='search-bar-item' key={id} onClick={() => {
            history.push(`/shop/${category.toLowerCase()}/${item.id}/details`)
            toggleSearchBarHidden()
        }}>
            <img src={imageUrl} alt='item' />
            <div className='item-details'>
                <span className='name'>{name}</span>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleSearchBarHidden: () => dispatch(toggleSearchBarHidden())
});

export default connect(null, mapDispatchToProps)(withRouter(SearchBarItem));

