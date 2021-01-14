import React from 'react'
import './Button.css'

function Button(props) {

    const cls = [
        'Button',
        props.type === 'primary' ? 'primary' : props.type === 'error' ? 'errorr' : 'successs',

    ]

    return (
        <button
            onClick={props.onClick}
            className={cls.join(' ')}
            disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default Button
