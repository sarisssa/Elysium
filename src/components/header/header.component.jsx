import { useState } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';

import SearchBar from '../search-bar/search-bar.component';
import SearchBarIcon from '../search-bar-icon/search-bar-icon.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectSearchBarHidden } from '../../redux/searchbar/searchbar.selectors';
import { clearAllFromCart } from '../../redux/cart/cart.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCollections } from '../../redux/shop/shop.selectors';

import { ReactComponent as Logo } from '../../assets/pillar.svg';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
} from './header.styles.jsx';

const Header = ({ currentUser, isCartHidden, isSearchBarHidden, clearAllFromCart }) => {

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                {isSearchBarHidden ? null : <SearchBar />}
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {currentUser ? (
                    <OptionLink as='div' onClick={() => {
                        clearAllFromCart();
                        auth.signOut()
                    } }>
                        SIGN OUT
                    </OptionLink>
                ) : (
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
                )}
                <SearchBarIcon />
                <CartIcon />
            </OptionsContainer>
            {isCartHidden ? null : <CartDropdown />}
        </HeaderContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isCartHidden: selectCartHidden,
    isSearchBarHidden: selectSearchBarHidden,
    collections: selectCollections
});

const mapDispatchToProps = dispatch => ({
    clearAllFromCart: () => dispatch(clearAllFromCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
