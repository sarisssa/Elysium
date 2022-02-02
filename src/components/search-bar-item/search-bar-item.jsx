import { withRouter } from 'react-router';

import './search-bar-item.styles.scss';

const SearchBarItem = ({ item, history }) => {
    const { id, imageUrl, name, category} = item;

    return (
    <div className='search-bar-item' key={id} onClick={() => history.push(`/shop/${category.toLowerCase()}/${item.id}/details`)}>
        <img src={imageUrl} alt='item'/>
        <div className='item-details'>
            <span className='name'>{name}</span>
        </div>
    </div>
);}

export default withRouter(SearchBarItem);