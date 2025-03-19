import { useState } from 'react'
import './App.css'

function App() {

  const dictionary = 
  [
  
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
  
      { word: "Component", meaning: "A reusable building block in React." },
  
      { word: "State", meaning: "An object that stores data for a component." }
  
  ]
  

  const[input,setInput] = useState("");
  const[defination,setDefination] = useState("");

  const searchElement = () => {

    const foundWord = dictionary.find(item => item.word.toLowerCase() === input.toLowerCase());
            if(foundWord){
              setDefination(foundWord.meaning);
            }else{
              setDefination("Word not found in the dictionary.");
            }
  };


  return (
    <>
    <div>
      <h1>Dictionary App</h1>
      <input type='text' onChange={(e)=>{setInput(e.target.value)}} placeholder='Search for a word...' />
      <button onClick={searchElement}>search</button>
      <h3>Defination:</h3><p>{defination}</p>
      </div>
    </>
  )
}

export default App
