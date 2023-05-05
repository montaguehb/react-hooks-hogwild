import React from 'react'
import HogCard from './HogCard'
import {v4 as uuid} from "uuid"

const Hogs = ({hogs, filter}) => {
    const hogCards = hogs.filter(hog => filter.greased?hog.greased:true)
    .filter(hog => !filter.name?true:hog.name.toLowerCase().includes(filter.name.toLowerCase()))
    .filter(hog => !filter.weight?true:hog.weight >= filter.weight)
    .map(hog => <HogCard hog={hog} key={uuid()}/>)
  return (
    <div>
        {hogCards}
    </div>
  )
}

export default Hogs