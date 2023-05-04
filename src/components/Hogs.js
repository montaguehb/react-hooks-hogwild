import React from 'react'
import HogCard from './HogCard'
import {v4 as uuid} from "uuid"

const Hogs = ({hogs}) => {
    const hogCards = hogs.map(hog => <HogCard hog={hog} key={uuid()}/>)
  return (
    <div>
        {hogCards}
    </div>
  )
}

export default Hogs