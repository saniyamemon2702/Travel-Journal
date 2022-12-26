import React from 'react';
import '../index.css';

export default function Card(props){
    return(
    <div className='card flex '>
        <img src={props.imgLink} alt={props.title} />
        <div className='div-text'>
            <p><span className=''><i class="fa fa-map-marker"></i>{props.location}</span> <a href={props.mapLink} target="_blank" rel="noreferrer">View on Google Map</a></p>
            <h2>{props.title}</h2>
            <p><span>{props.startDate}</span><span>-</span> <span>{props.endDate}</span></p>
            <p>{props.description}</p>
        </div>
    </div>);
}