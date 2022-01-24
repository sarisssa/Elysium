import { withRouter } from "react-router";
import { connect } from "react-redux";

import { selectItem } from "../redux/shop/shop.selectors";

const ItemDetailsPage = ({ item, match }) => {

    console.log(match.params);
    const {id,name } = item;

    return (
        <h1>{name}</h1>
    );
}

const mapStateToProps = (state, ownProps) => ({
    item: selectItem(ownProps.match.params.collectionName, ownProps.match.params.productId)(state)
  });

export default connect(mapStateToProps)(withRouter(ItemDetailsPage));

// export default withRouter(ItemDetailsPage)
