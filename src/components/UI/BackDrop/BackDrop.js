import React from 'react'
import './BackDrop.css'

function BackDrop(props) {
    return (
        <div className="BackDrop"
            onClick={props.onClick}>
        </div>
    )
}

export default BackDrop
