import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { withRouter } from 'react-router';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import ItemDetailsPage from './item-details.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const ItemDetailsPageContainer = compose(
    connect(mapStateToProps), 
    WithSpinner
)(withRouter(ItemDetailsPage));

export default ItemDetailsPageContainer;