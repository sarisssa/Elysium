import { useState } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';

import SearchBar from '../search-bar/search-bar.component';
import SearchBarIcon from '../search-bar-icon/search-bar-icon.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectSearchBarHidden } from '../../redux/searchbar/searchbar.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/pillar.svg';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
} from './header.styles.jsx';

const Header = ({ currentUser, isCartHidden, isSearchBarHidden }) => {

    const [searchbar, setSearchbar] = useState('');

    const onInputChange = event => {
        setSearchbar(event.target.value)
    }

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                {isSearchBarHidden ? null : <SearchBar inputChange={onInputChange} />}
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {currentUser ? (
                    <OptionLink as='div' onClick={() => auth.signOut()}>
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
    isSearchBarHidden: selectSearchBarHidden
});

export default connect(mapStateToProps)(Header);