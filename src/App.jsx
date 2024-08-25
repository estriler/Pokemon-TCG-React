import { useState } from 'react'
import './App.css'
import base1 from "./components/base1.json"

function App() {
 
  let opponentActiveCard = base1[57];
  let pikachuCard = <img src={opponentActiveCard["images"]["small"]} />

  let activeCard = base1[59];
  let ponytaCard = <img src={activeCard["images"]["small"]} />

  return (
    <div id='battleBoard'>
      <div id="opponentActiveCard">
        {pikachuCard}
      </div>
      <div id='activeCard'>
        {ponytaCard}
        <button className='attackButton'>{activeCard["attacks"][0]["name"]}</button>
        <div className='hp'>{activeCard["hp"]} HP</div>
      </div>
    </div>
  )
}

export default App
