import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';

import SearchBarIcon from '../search-bar-search-icon/search-bar-search-icon.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { clearAllFromCart } from '../../redux/cart/cart.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/pillar.svg';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
} from './header.styles.jsx';

const Header = ({ currentUser, isCartHidden, clearAllFromCart }) => {

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {currentUser ? (
                    <OptionLink as='div' onClick={() => {
                        clearAllFromCart();
                        auth.signOut()
                    }}>
                        SIGN OUT
                    </OptionLink>
                ) : (
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
                )}
                <SearchBarIcon />
                <CartIcon />
            </OptionsContainer>
            {isCartHidden ? '' : <CartDropdown />}
        </HeaderContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isCartHidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
    clearAllFromCart: () => dispatch(clearAllFromCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
