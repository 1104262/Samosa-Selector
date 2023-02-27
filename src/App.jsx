import { useState } from 'react'
import './App.css';
import SamosaPic from "./assets/samosa.png";


const App = () => {

  const [ count, setCount] = useState(0)

  const [multipler, setMultipler] = useState(1)

  const updateCount = () => {
    setCount(count + multipler);
  }

  const buyDoubleStuffed = () => {
    if (count >= 10){
      setMultipler(multipler * 2);
      setCount(count - 10);
    }
  }

  const buyPartyPack = () => {
    if (count >= 100){
      setMultipler(multipler * 5);
      setCount(count - 100);
    }
  }

  const buyFullFest = () => {
    if (count >= 1000){
      setMultipler(multipler * 10);
      setCount(count - 1000);
    }
  }
  
  return (
    <div className="App">

      <div className = "header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" src={SamosaPic} onClick={updateCount}/>
      </div>
      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click	</p>
          <button onClick={buyDoubleStuffed}>10 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5x per click	</p>
          <button onClick={buyPartyPack}>100 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10x per click	</p>
          <button onClick={buyFullFest}>1000 samosas</button>
        </div>
      </div>
    </div>
  )

}
export default App