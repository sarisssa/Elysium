import { withRouter } from "react-router";
import { connect } from "react-redux";

const ItemDetailsPage = ({match}) => {
    console.log('Item Details Props:', match)
    return (
        <h1>Hello</h1>
    );

}



//   export default connect(mapStateToProps)(ItemDetailsPage);

export default withRouter(ItemDetailsPage);
// export default ItemDetailsPage;

// const mapStateToProps = (state, ownProps) => ({
//     collection: selectCollection(ownProps.match.params.productId)(state)
//   });