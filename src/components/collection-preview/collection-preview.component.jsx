import React from 'react';
import { withRouter } from "react-router";

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, history, match }) => { 
    
    return (
    <div className='collection-preview'>
        <h1 className='title' onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}>
            {title.toUpperCase()}
        </h1>
        <div className='preview'>
            {items
                .filter((item, index) => index < 4)
                .map(item => ( //Limit displayed items to 4 under each category
                    <CollectionItem key={item.id} item={item} productSlug={`${match.url}/${title.toLowerCase()}/${item.id}/details`} />
                ))}
        </div>
    </div>
);}

export default withRouter(CollectionPreview);