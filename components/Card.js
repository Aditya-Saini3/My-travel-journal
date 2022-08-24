import React from "react"

export default function Card(props) {
    return (
        <div className = "card">
            <div className = "card--imageDiv">
                <img src = {`${props.image}`} className = "image"/>
            </div>
            <div className = "card--contentDiv">
                <span className = "card--location"><img src = "../images/Location.png" className = "card--locationLogo" />{props.location.toUpperCase()}</span>
                <a href = {`${props.googleMapsUrl}`} className = "googleMapLink">View on Google Maps</a>
                <h2 className = "Location--Heading">{props.title}</h2>
                <div className = "card--dates">
                    <span>{props.startDate}</span>
                    <span> - </span>
                    <span>{props.endDate}</span>
                </div>
                <p className = "card--description">
                {props.description}
                </p>
            </div>
        </div>
    )
}