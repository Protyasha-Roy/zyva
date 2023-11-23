import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <section className='flex justify-center p-2'>
            <div className='flex justify-around w-9/12 items-center flex-wrap'>
            <p className='poiret-50'>zyva</p>
            <nav className='p-1'>
                <ul className='list-none flex justify-around poiret-20 w-100'>
                    <li><a href='#' id='home'>Home</a></li>
                    <li><a href='#' id='About'>About</a></li>
                    <li><a href='#' id='instructions'>Instructions</a></li>
                    <li><a href='#' id='get-access'>Get Access</a></li>
                </ul>
            </nav>
            </div>
        </section>
    );
};

export default Header;