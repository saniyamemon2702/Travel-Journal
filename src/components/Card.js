import React from 'react';
import '../index.css';

export default function Card(props){
    return(
    <div className=' card p-12 flex-col sm:flex-row  flex  items-center '>
        
{/* <div className=''> */}
        <img src={props.imgLink} alt={props.title} className="rounded-lg h-96 w-64  sm:h-80" />
        {/* </div> */}
        <div className='div-text ml-4 pl-2  text-left flex flex-col justify-center sm:justify-start'>
            <p className='mt-3 text-center sm:text-left'><i class="fa fa-map-marker text-red-600 text-xl" ></i><span className='text-base tracking-wider px-2'>{props.location.toUpperCase()}</span> <a href={props.mapLink} target="_blank" rel="noreferrer" className='px-2 text-normal text-gray-400 underline'>View on Google Map</a></p>
            <h2 className='text-3xl mb-6 mt-3.5 font-bold text-gray-900 text-center sm:text-left'>{props.title}</h2>
            <p className='text-center sm:text-left font-bold text-sm text-gray-900'><span>{props.startDate}</span><span>-</span> <span>{props.endDate}</span></p>
            <p className='my-4 text-justify'>{props.description}</p>
        </div>
    </div>);
}