import React from 'react'
import '../styles/Character.css';

export const Character = ({ data }) => {
  return (
    <div className="Card">
        <img src={data?.image || ''} className="Card-Image" alt={'Picture of ' + data?.name} />
        <div className="Card-Content">
            <p className="Card-Title">{data?.name || 'N/A'}</p>
            <p className="Card-Subtitle">{data?.species || 'N/A'}</p>
        </div>
    </div>
  )
}
