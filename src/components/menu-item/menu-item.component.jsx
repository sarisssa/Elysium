import React from 'react';
import { withRouter } from "react-router";

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className='content'>
            <div className='title'>{title.toUpperCase()}</div>
        </div>
    </div>
);

export default withRouter(MenuItem); //Higher level component to pass match as props to Menu Item

