import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import { fetchCollectionsStartAsync } from './redux/shop/shop.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectSearchBarHidden } from './redux/searchbar/searchbar.selectors';

import Header from './components/header/header.component';
import SearchBar from './components/search-bar/search-bar.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ContactPage from './pages/contact/contact.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Footer from './components/footer/footer.component';

import { GlobalStyle } from './global.styles';

const App = ({ fetchCollectionsStartAsync, setCurrentUser, currentUser, isSearchBarHidden }) => {

  useEffect(() => {
    fetchCollectionsStartAsync()
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => { //Listener for changes in Snapshot will call setCurrentUser action
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }, [])

  return (
    <div>
      <GlobalStyle />
      {isSearchBarHidden ? <Header /> : <SearchBar />}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/contact' component={ContactPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUpPage />
            )
          }
        />
      </Switch>
      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isSearchBarHidden: selectSearchBarHidden
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);