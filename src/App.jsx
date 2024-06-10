
// import './App.css';

import { useState } from "react"

function App() {

  const [dictionary, setDictionary] = useState(
    [
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
      { word: "Component", meaning: "A reusable building block in React." },
      { word: "State", meaning: "An object that stores data for a component." }
    ])

    const [word, setWord] = useState('')
    const [definition, setDefinition] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
  
      const foundItem = dictionary.find((item) => item.word.toLowerCase() === word.toLowerCase());
  
      if (foundItem) {
        setDefinition(foundItem.meaning);
      } else {
        setDefinition("Word not found in the dictionary.");
      }
  
      setWord('');
    }

  return (
    <div>
      <h1>Dictionary App</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text" 
          placeholder="Search for a word..."
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <h5>Definition:</h5>
      <p>{definition}</p>

    </div>
  )
}

export default App
