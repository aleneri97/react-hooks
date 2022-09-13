import React from 'react'
import '../styles/Character.css';


export const Character = ({ data, favToggle }) => {

	const handleFavToggle = (favorite) => {
    if (data.favorite) {
      favToggle({ type: 'REMOVE_FAVORITE', payload: data.character });
    } else {
      favToggle({type: 'ADD_TO_FAVORITE', payload: data.character});
    }
	};

  return (
    <div className="Card">
        <img src={data?.character.image || ''} className="Card-Image" alt={'Picture of ' + data?.character.name} />
        <div className="Card-Action">
          <span className="Card-Action-Fav" onClick={handleFavToggle}>
            <svg id="svgelem" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <polygon points="12.5,1 5,22.5 24,7.5 1,7.5 20,22.5" fill={data.favorite ? 'yellow' : 'white'}/>
            </svg>
          </span>
        </div>
        <div className="Card-Content">
            <p className="Card-Title">{data?.character.name || 'N/A'}</p>
            <p className="Card-Subtitle">{data?.character.species || 'N/A'}</p>
        </div>
    </div>
  )
}
