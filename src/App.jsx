import { useState } from 'react'
import './App.css'
import base1 from "./components/base1.json"
import HpBackgroundColor from './components/HpBackgroundColor';
import Attack from './components/Attack';

function App() {

  // const [ activePokemonHP , setActivePokemonHP ] = useState({activeCard["hp"]});
  // console.log({activeCard["hp"]});

  const attackClick = () => {
    setActivePokemonHP(Attack);
  }
 
  let opponentActiveCard = base1[57];
  let pikachuCard = <img src={opponentActiveCard["images"]["small"]} />

  let activeCard = base1[59];
  // firstActiveCardHP = activeCard["hp"];
  let ponytaCard = <img src={activeCard["images"]["small"]} />

  // const [ activePokemonHP , setActivePokemonHP ] = useState({firstActiveCardHP});

  return (
    <div id='battleBoard'>
      <div id="opponentActiveCard">
        {pikachuCard}
        <div className='hp' style={{backgroundColor:HpBackgroundColor(opponentActiveCard)}}>{opponentActiveCard["hp"]} HP</div>
      </div>
      <div id='activeCard'>
        {ponytaCard}
        <button 
          className='attackButton' onClick={attackClick}>{activeCard["attacks"][0]["name"]}</button>
        <div className='hp' style={{backgroundColor:HpBackgroundColor(activeCard)}}>{activeCard["hp"]} HP</div>
        // {/* <div className='hp' style={{backgroundColor:HpBackgroundColor(activeCard)}}>{activePokemonHP} HP</div> */}
      </div>
    </div>
  )
}

export default App
