import React from 'react'

const Filter = ({handleFilter, filter, handleClick}) => {
  return (
    <form>
      <label>Name: </label>
      <input type="text" id="name" name="name" onChange={handleFilter} value={filter.name}></input>
      <></>
      <label>Weight: </label>
      <input type="text" id="weight" name="weight" onChange={handleFilter} value={filter.weight}></input>
      <br></br>
      <input type="button" name="greased" value={filter.greased?"show all":"show greased"} onClick={handleClick}></input>
    </form>
  )
}

export default Filter