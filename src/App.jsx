import { useState } from 'react'
import './App.css'
import base1 from "./components/base1.json"
import HpBackgroundColor from './components/HpBackgroundColor';
import Attack from './components/Attack';

function App() {

  let opponentActiveCard = base1[57];
  let pikachuCard = <img src={opponentActiveCard["images"]["small"]} />

  let activeCard = base1[59];
  let ponytaCard = <img src={activeCard["images"]["small"]} />

  const [ activePokemonHP , setActivePokemonHP ] = useState(Number(activeCard["hp"]));
  const [ opponentPokemonHP , setOpponentPokemonHP ] = useState(Number(opponentActiveCard["hp"]));

  const [ activePokemonKO , setActivePokemonKO ] = useState(false);
  const [ opponentPokemonKO , setOpponentPokemonKO ] = useState(false);

  const attackClick = () => {
    setOpponentPokemonHP(opponentPokemonHP - activeCard["attacks"][0]["damage"]);
    if (opponentPokemonHP <= 0){
      knockOut();
    }
  }

  const knockOut = () => {
    setOpponentPokemonKO(() => true);
    console.log(opponentActiveCard["name"] + "has been knocked out!!!")
  }

  console.log(opponentActiveCard["name"] + " has " + opponentPokemonHP + " hp left!");
  console.log(opponentPokemonKO);


  return (
    <div id='battleBoard'>
      <div id="opponentActiveCard">
        {/* <div>{opponentPokemonKO ? {ponytaCard} : {pikachuCard}}</div> */}
        <div className='hp' style={{backgroundColor:HpBackgroundColor(opponentActiveCard)}}>{opponentPokemonHP} HP</div>
      </div>
      <div id='activeCard'>
        {ponytaCard}
        <button className='attackButton' onClick={attackClick}>{activeCard["attacks"][0]["name"]}</button>
        <div className='hp' style={{backgroundColor:HpBackgroundColor(activeCard)}}>{activePokemonHP} HP</div>
      </div>
    </div>
  )
}

export default App
