import React from 'react'

const GifGridItem = ({title, url}) => {
    
    return (
        <div className='card animate__animated animate__bounce'>
            <img src={url} />
            <p>{ title }</p>
        </div>
    )
}


export default GifGridItem
