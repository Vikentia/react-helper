import React from 'react';
import mainmenu from '../images/main-menu.jpeg';
import './main-style.css';

function Main() {
    return (
        <div className='main'>
            <img src={mainmenu} alt='photo' />
        </div>
    );
}

export default Main;