import React from 'react';
import '../index.css';

export default function Card(props){
    return(
    <div className='card flex p-12 flex-col sm:flex-row justify-center items-center'>
        <img src={props.imgLink} alt={props.title} className="  rounded-lg max-h-screen w-72 sm:h-48  object-fit md:h-full sm:w-48" />
        <div className='div-text'>
            <p><span className=''><i class="fa fa-map-marker"></i>{props.location}</span> <a href={props.mapLink} target="_blank" rel="noreferrer">View on Google Map</a></p>
            <h2>{props.title}</h2>
            <p><span>{props.startDate}</span><span>-</span> <span>{props.endDate}</span></p>
            <p>{props.description}</p>
        </div>
    </div>);
}