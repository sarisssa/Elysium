import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles.jsx';

const CollectionPage = ({ collection, match }) => {
  const { title, items } = collection
  // console.log('COLLECTION', collection);
  
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items && items.map(item => (
          <CollectionItem key={item.id} item={item} productSlug={`${match.url}/${item.id}/details`}/>
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({ //Note second optional parameter of mapStatetoProps which is the props of the component in question
  collection: selectCollection(ownProps.match.params.collectionName)(state)
});

export default connect(mapStateToProps)(CollectionPage);