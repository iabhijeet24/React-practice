// App.jsx
import { useState } from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import SuggestionList from './components/SuggestionList';

export default function App() {
  const [query, setQuery] = useState('');

  return (
    <div className="container" style={{ position: 'relative' }}>

      <SearchInput query={query} setQuery={setQuery} />

     <SuggestionList query={query} onSelect={setQuery} />
     
    </div>
  );
}
