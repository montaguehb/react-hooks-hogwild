import React from 'react'

const HogDetails = ({hog}) => {
  return (
    <ul className='normalText'>        
        <li>greased: {hog.greased?"yes":"no"}</li>
        <li>weight: {hog.weight} lbs</li>
        <li className='achievementText'>highest medal achieved: {hog["highest medal achieved"]}</li>
        <li>specialty: {hog.specialty}</li>
    </ul>
  )
}

export default HogDetails