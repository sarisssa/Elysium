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

const CollectionItem = ({ item, addItem, history, productSlug}) => {
    const { name, price, imageUrl, id} = item;

    return (
        <CollectionItemContainer>
            <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} onClick={() => history.push(productSlug)}/>
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

