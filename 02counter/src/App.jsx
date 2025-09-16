import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)
  //let counter = 15;

  const addValue = () => {
    console.log("clicked", counter);
    //counter = counter+1;
    if(counter < 20) {
    setCounter(counter +1)
    }else {
      console.log(" Max limit reached");
    }
  }

  const removeValue = () => {
    if(counter > 0){
    setCounter(counter - 1);
    } else{
        console.log("Min limit reached")
    }
    
  }
  return (
    <>
      
      <h1>chai aur code</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
