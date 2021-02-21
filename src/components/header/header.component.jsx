import React from 'react';
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import {auth} from '../../firebase/firebase.utils';

import './header.styles.scss'


const Header = ({ currentUser }) => (
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
        {
            currentUser ?
            <div className='options' 
                onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link className='options' to='/signin'>SIGN IN</Link>
        }
    </div>
);

export default Header;