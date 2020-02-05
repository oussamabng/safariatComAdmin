import React from 'react';
import { Link } from 'react-router-dom';

import logo from './images/logoForWeb.png'

const Header = () => {
    return (
        <div className="fixed z-10 w-full flex justify-between items-center lg:px-20 px-4 bg-white lg:py-4 py-2 border-b border-gray-400">
        <div className="w-full lg:w-auto flex justify-between items-center">
            <Link to="/">
                <img src={logo} alt=""/>
            </Link>
            <label for="menu-toggle" className="lg:hidden block point-cursor">
                <i className="fas fa-align-justify fa-2x"></i>
            </label>
            <input type="checkbox" id="menu-toggle" className="hidden" />
        </div>
                   
        <div id="menu" className="hidden lg:flex lg:items-center ">
            <nav>
                <ul className="lg:flex items-center justify-between text-base font-bold text-gray-700 pt-4 lg:pt-0">
                    <li>
                        <Link to="/" className="lg:p-4 py-3 px-0 block">Home</Link>
                    </li>
                    <li>
                        <Link to="/services" className="lg:p-4 py-3 px-0 block">Service</Link>
                    </li>
                    <li>
                        <Link to="/blog" className="lg:p-4 py-3 px-0 block">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="lg:p-4 py-3 px-0 block">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about" className="lg:p-4 py-3 px-0 block">About us</Link>
                    </li>
                </ul>
            </nav>
            
        </div>
        <div className="hidden lg:flex justify-between items-center px-2 py-2 rounded-full bg-blue-100">
                <i className="fas fa-search border-r-2 px-2 text-gray-600"></i>
                <input className="appearance-none bg-transparent h-1 py-2 px-3 text-gray-700 leading-tight" id="search" type="text" placeholder="Search"/>
        </div>
        <div className="hidden lg:flex items-center">
            <button className="bg-yellow text-white font-bold py-1 px-5 rounded-full button-shadow">login</button>
        </div>
    </div>
    );
}



export default Header;
