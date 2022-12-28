import React from 'react';
import '../index.css';

export default function Card(props){
    return(
    <div className='card flex p-12 flex-col sm:flex-row justify-center items-center'>
        <img src={props.imgLink} alt={props.title} className="  rounded-lg max-h-screen w-72 sm:h-64  object-fit sm:w-48" />
        <div className='div-text ml-4 pl-2 text-left flex flex-col justify-start'>
            <p><i class="fa fa-map-marker text-red-600 text-xl" ></i><span className='text-base tracking-wider px-2'>{props.location.toUpperCase()}</span> <a href={props.mapLink} target="_blank" rel="noreferrer" className='px-2 text-normal text-gray-400 underline'>View on Google Map</a></p>
            <h2 className='text-3xl mb-6 mt-3.5 font-bold text-gray-900'>{props.title}</h2>
            <p className='font-bold text-sm text-gray-900'><span>{props.startDate}</span><span>-</span> <span>{props.endDate}</span></p>
            <p className='my-4'>{props.description}</p>
        </div>
    </div>);
}