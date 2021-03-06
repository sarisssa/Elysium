import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import CollectionsOverview from './collections-overview.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;

//Note container pattern above with two levels of wrappers leveraging compose which evaluates from right to left. 

//Layer 1/First Evaluation: WithSpinner(CollectionsOverview)

//Layer 2/Second Evaluation: connect(mapStateToProps)(Layer 1)