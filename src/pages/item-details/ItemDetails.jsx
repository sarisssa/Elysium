import { withRouter } from "react-router";
import { connect } from "react-redux";

import CustomButton from "../../components/custom-button/custom-button.component";

import { selectItem } from "../../redux/shop/shop.selectors";
import { addItem } from '../../redux/cart/cart.actions';

import './item-details.styles.scss';

const sizes = [
    'Small',
    'Medium',
    'Large',
    'X-Large',
    'XX-Large'
]

const ItemDetailsPage = ({ item, addItem }) => {

    const { name, price, imageUrl } = item;
    console.log('TEST', item);

    return (
        <div className='product-detail-container'>
            <h2 className='item-name'>{name}</h2>
            <h2 className='price'>${price}</h2>
            <img className='product-image' src={imageUrl} />
            <select className='contact-reason' type="text" required>
                        {sizes.map(ele => (
                            <option value={ele}>{ele}</option>
                        ))}
                    </select>
            <CustomButton onClick={() => {
                addItem(item)
            } } >
                ADD TO CART
            </CustomButton>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    item: selectItem(ownProps.match.params.collectionName, ownProps.match.params.productId)(state)
});

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ItemDetailsPage));


