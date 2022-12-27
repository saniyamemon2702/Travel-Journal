import React from 'react';
export default function Footer(){
    return(
        <footer className='rounded-xl p-4 my-4  text-white flex items-center'>
            <p className='font-inter text-white text-xl p-1 font-normal justify-self-start  text-center'>
                Created By Saniya Memon
            </p>
            <div className='font-inter text-white text-3xl p-1 font-normal  ml-auto'>
            
            <a href='https://www.linkedin.com/in/saniyamemon/' ><i class="fa fa-linkedin-square"></i></a>
            <a href='https://github.com/saniyamemon2702' className='px-2'><i class="fa fa-github"></i></a>
            </div>  
        </footer>
    );
}