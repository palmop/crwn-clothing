import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss'

// history ce lo abbiamo grazie a withRouter
// linkUrl arriva dalle props che arriva dal componente Directory
const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className={`${size} menu-item`} onClick={() => {history.push(`${match.url}${linkUrl}`)}}>
        <div className="background-image" 
            style={{
                backgroundImage: `url(${imageUrl})`
            }} 
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);