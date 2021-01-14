import React from 'react'
import './Loader.css'

function Loader() {
    return (
        <div className="center">
            <div className="lds-ripple">
                <div /><div />
            </div>
        </div>
    )
}

export default Loader
