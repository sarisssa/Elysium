import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import ItemDetailsPageContainer from './ItemDetailsContainer';

const ShopPage = ({ fetchCollectionsStartAsync, match }) => {
  useEffect(() => {
    fetchCollectionsStartAsync()
  }, []);

  console.log(match)

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        exact
        path={`${match.path}/:collectionName`} 
        component={CollectionPageContainer}
      />
      <Route
        exact
        path={`${match.path}/:collectionName/:productId/details`}
        component={ItemDetailsPageContainer}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

// const mapDispatchToProps = {
//   fetchCollectionsStartAsync: () => (fetchCollectionsStartAsync())
// };

export default connect(null, mapDispatchToProps)(ShopPage);

