import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {guess,startGame,restart} from './axios';


function App() {

  const [hasStart,setHasStart]=useState(false);
  const [hasWon,setHasWon]=useState(false);
  const [number,setNumber]=useState('');
  const [status,setStatus]=useState('');

  const handleRestart=async() => {
    setHasWon(false);
    setNumber('');
    restart();
  }

  const handleGuess=async() => {
    console.log(number);
    const response=await guess(number);
    if (response==='Equal'){
      setHasWon(true); 
    }
    else{
      setStatus(response);
      setNumber('');
    }
  }

  const handlestart=()=>{
    setHasStart(true);
    startGame();
    // console.log(hasStart);
  }
  const startMenu=
    <div>
      <button onClick={()=>{
        handlestart();
        }}>start game</button>
    </div>

  const gameMode=
    <>
      <p>Guess a number between 1 to 100</p>
      <input onChange={(e)=>{setNumber(e.target.value)}} ></input>
      <button onClick={()=>{handleGuess(number);}} disabled={!number}>guess!</button>
      <p>{status}</p>
    </>

  const winningMode=
    <>
      <p>you won! The number is {number}.</p>
      <button onClick={()=>{handleRestart();}}>restart</button>
    </>

  const game=
  <div>
    {hasWon?winningMode:gameMode}
  </div>


  //  const WinningMode=

  return <div className="App">
    {hasStart?game:startMenu} </div>
}

export default App;
