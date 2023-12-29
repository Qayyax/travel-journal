import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
            <img className="card-image" src={props.item.imageUrl} />
            <div className="card-details">
                <div className="card-location">
                    <i className="fa-solid fa-location-pin"></i>
                    <p className="country">{props.item.location}</p>
                    <a className="google-link" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="description">{props.item.description}</p>
            </div>
        </div>
    )
}