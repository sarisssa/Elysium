import { withRouter } from "react-router";
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

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

    return (
        <div className='product-detail-container'>
            <div className='product-detail-inner'>
                <div className="product-image-container">
                    <img className='product-image' src={imageUrl} />
                </div>
            </div>
            <div className='product-detail-inner product-description'>
                <h2 className='item-name'>{name}</h2>
                <h2 className='price'>${price}</h2>
                <select className='contact-reason' type="text" required>
                    {sizes.map(ele => (
                        <option key={uuidv4()} value={ele}>{ele}</option>
                    ))}
                </select>
                <CustomButton onClick={() => {
                    addItem(item)
                } } >
                    ADD TO CART
                </CustomButton>
            </div>
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


