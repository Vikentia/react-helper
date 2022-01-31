import React from 'react';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';
import './Header-style.css';
import { HomeOutlined } from '@ant-design/icons';

function Header() {
    return (
        <div className='header'>
            <NavLink className='header__icon' to='/react-helper'><HomeOutlined /></NavLink>
            <div>Основная теория по библиотеке React</div>
            <div><img src={logo} className="App-logo" alt="logo" /></div>
        </div>
    );
}

export default Header;