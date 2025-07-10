// SuggestionList.js
import React from 'react';

const allSuggestions = [
  'apple',
  'amazon',
  'airtel',
  'apna college',
  'ap government',
  'banana',
  'bing',
  'bookmyshow',
  'bharat',
];

export default function SuggestionList({ query }) {
  // Don’t render anything if the input is empty
  if (!query.trim()) return null;

  // Filter suggestions that start with the current query (case‑insensitive)
  const filtered = allSuggestions.filter((item) =>
    item.toLowerCase().startsWith(query.toLowerCase())
  );

  // Optional: show a “no match” message
  if (filtered.length === 0) {
    return <p style={{ marginTop: '0.5rem' }}>No suggestions found.</p>;
  }

  return (
    <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '0.5rem' }}>
      {filtered.map((item, idx) => (
        <li
          key={idx}
          style={{
            padding: '0.25rem 0.5rem',
            borderBottom: '1px solid #eee',
            cursor: 'pointer',
          }}
          onMouseDown={() => {
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
