import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    const isUserSignedin = localStorage.getItem('isUserSignedin');

    return (
        <section className='flex justify-center p-2'>
            <div className='flex justify-around w-11/12 items-center flex-wrap'>
            <p className='poiret-50'>zyva</p>
            <nav className='p-1'>
                <ul className='list-none flex justify-around sulphur-15 w-100 text-blue-300'>
                    <li className='hover:text-white rounded'><Link to='/'>Home</Link></li>
                    <li className='hover:text-white rounded'><Link to='/about'>About</Link></li>
                    <li className='hover:text-white rounded'><Link to='/instructions'>Instructions</Link></li>
                    <li className='hover:text-white rounded'><Link to={isUserSignedin === 'true' ? '/playground' : '/get-access'}>Get-Access</Link></li>
                </ul>
            </nav>
            </div>
        </section>
    );
};

export default Header;