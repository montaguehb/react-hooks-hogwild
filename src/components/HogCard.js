import React, {useState} from 'react'
import HogDetails from './HogDetails'
const HogCard = ({hog}) => {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(click => !click)
    }
  return (
    <div className="pigTile" onClick={handleClick}>
        <img src={hog.image} alt={hog.name}></img>
        <h3 className='hoggyText, headerText'>{hog.name}</h3>
        {clicked?<HogDetails hog={hog} handleClick={handleClick}/>:<></>}
    </div>
  )
}

export default HogCard