import React from 'react';
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss'


const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <Link className="options" to="/shop">
            SHOP
        </Link>
        <Link className="options" to="/contacts">
            CONTACTS
        </Link>
    </div>
);

export default Header;