import { withRouter } from "react-router";
import { connect } from "react-redux";

import { selectItem } from "../redux/shop/shop.selectors";

const ItemDetailsPage = ({ item }) => {

    const { imageUrl, name, price } = item;

    return (
        <div className='product-detail-container'>
            <h1 className='item-name'>{name}</h1>
            <h2 className='price'>{price}</h2>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    item: selectItem(ownProps.match.params.collectionName, ownProps.match.params.productId)(state)
});

export default connect(mapStateToProps)(withRouter(ItemDetailsPage));



