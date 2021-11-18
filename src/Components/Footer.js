import React from 'react';
import logo from '../assets/image/logo.png'

const Footer = () => {
    return (
        <footer className="bg-white border-t-8 w-full flex p-8 mb-4 items-center justify-center border-solid border-blue">
            <img src={logo} />
        </footer>
    );
}

export default Footer;
