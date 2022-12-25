import React from 'react';
import '../index.css';

export default function Navbar(){
    return (
        <nav className='navbar flex justify-center rounded-xl '>
            <img src="/images/nav-logo.png"  alt="globe" className='px-6 h-fit'/>
            <h1 className='text-white font-inter text-xl p-1 font-normal'>Travel Journal</h1>
        </nav>
    );
}