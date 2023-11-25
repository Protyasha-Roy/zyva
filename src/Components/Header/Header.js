import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section className='flex justify-center p-2'>
            <div className='flex justify-around w-9/12 items-center flex-wrap'>
            <p className='poiret-50'>zyva</p>
            <nav className='p-1'>
                <ul className='list-none flex justify-around poiret-20 w-100'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/instructions'>Instructions</Link></li>
                    <li><Link to='/get-access'>Get Access</Link></li>
                </ul>
            </nav>
            </div>
        </section>
    );
};

export default Header;