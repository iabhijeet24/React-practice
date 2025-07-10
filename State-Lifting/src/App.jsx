import { useState } from 'react'
import './App.css'
import SearchInput from './components/SearchInput'
import SuggestionList from './components/SuggestionList'

function App() {
  const [query , setQuery] = useState('')

  return (
   <div className='container'>
    <SearchInput query = {query} setQuery = {setQuery}/>
    <SuggestionList query={query} />
   </div>
  )
}

export default App
