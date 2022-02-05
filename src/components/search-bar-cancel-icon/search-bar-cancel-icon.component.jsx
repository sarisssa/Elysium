import React from 'react';
import { connect } from 'react-redux';

import { toggleSearchBarHidden } from '../../redux/searchbar/searchbar.actions';

import { ReactComponent as CancelIcon } from '../../assets/cancel.svg';

import './search-bar-cancel-icon.styles.scss';

const SearchBarCancelIcon = ({ toggleSearchBarHidden }) => (
    <div className='searchbar-icon' onClick={toggleSearchBarHidden}>
        <CancelIcon className='cancel-icon'/>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleSearchBarHidden: () => dispatch(toggleSearchBarHidden())
});

export default connect(null, mapDispatchToProps)(SearchBarCancelIcon);