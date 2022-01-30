import React from 'react';
import { connect } from 'react-redux';

import { toggleSearchBarHidden } from '../../redux/searchbar/searchbar.actions';

import { ReactComponent as SearchingIcon } from '../../assets/searching.svg';

import './search-bar-icon.styles.scss';

const SearchBarIcon = ({ toggleSearchBarHidden }) => (
    <div className='searchbar-icon' onClick={toggleSearchBarHidden}>
        <SearchingIcon className='searching-icon'/>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleSearchBarHidden: () => dispatch(toggleSearchBarHidden())
});

export default connect(null, mapDispatchToProps)(SearchBarIcon);