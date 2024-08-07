import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  const addValue = () => {
    if (counter<20) {
    setCounter(counter + 1)
    }
    else {
      alert("Counter Value Out of Bound")
      setCounter(counter)
    }
  }

  const reduceValue = () => {
    if (counter>0) {
    setCounter(counter - 1)
    }
    else {
      alert("Counter Value Out of Bound")
      setCounter(counter)
    }
  }

  // let counter = 20
  
  return (
    <>
      <h1>Chai aur React Learning</h1>

      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br /><br />
      <button
      onClick={reduceValue}
      >Reduce Value</button>
    </>
  )
}

export default App
