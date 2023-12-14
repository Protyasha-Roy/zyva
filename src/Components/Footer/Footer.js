import React from 'react';
import "./Footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section className='text-center mt-3'>
            <p className='sulphur-15 footer-text'>&copy;{currentYear} Designed and Developed by Protyasha</p>
        </section>
    );
};

export default Footer;