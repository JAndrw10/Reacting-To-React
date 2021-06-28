import React from 'react'

const Greeter = ({name, phrase}) => {
    return (
        <div>
            <h1> Hello, {name}! {phrase} </h1>
        </div>
    )
}

export default Greeter;
