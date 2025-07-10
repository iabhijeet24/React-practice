import React from 'react'
import './SearchInput.css'

const SearchInput = ({query , setQuery}) => {
  return (
    <>
     <input
     type="text"
     placeholder='Search here...'
     id='inputBox'
     value={query} 
     onChange={(e) => setQuery(e.target.value)}
     />
    </>
  )
}

export default SearchInput