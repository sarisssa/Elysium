import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import { addItem } from '../../redux/cart/cart.actions';

import { 
    CollectionItemContainer, 
    CollectionFooterContainer, 
    AddButton, 
    BackgroundImage, 
    NameContainer, 
    PriceContainer 
} from './collection-item.styles.jsx';

const CollectionItem = ({ item, addItem, history, match, baseURL}) => {
    const { name, price, imageUrl, id} = item;
    
    //Two pages that navigate to the same collection item detail page. 

    //1: Shop Page
    //2: Actual Collections Page
    //Remove baseURL

    return (
        <CollectionItemContainer>
            <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} onClick={() => history.push(`${match.url}/${id}/details`)}/>
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>${price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} > 
                Add to cart 
            </AddButton>
        </CollectionItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));

