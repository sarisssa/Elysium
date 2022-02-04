import { Route } from 'react-router-dom';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import ItemDetailsPageContainer from './ItemDetailsContainer';

const ShopPage = ({ match }) => {

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

export default ShopPage;

