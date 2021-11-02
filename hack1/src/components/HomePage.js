/****************************************************************************
  FileName      [ HomePage.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu, Chin-Yi Cheng ]
  Synopsis      [ This file generates the Home page.  ]
  Copyright     [ 2021 10 ]
****************************************************************************/

import React, { useState } from 'react';
import './css/HomePage.css';

{/* -- TODO 2 -- */}
const HomePage = ({startGameOnClick, mineNumOnChange, boardSizeOnChange, mineNum, boardSize /* -- something more... -- */}) => {
    const [showPanel, setShowPanel] = useState(false);      // A boolean variable. If true, the controlPanel will show.
    const [error, setError] = useState(false);              // A boolean variable. If true, means that the numbers of mines and the board size are invalid to build a game.

    {/* Some functions may be added here! */}

    const [slide1,setSlide1] = useState(10);
    const [slide2,setSlide2] = useState(8);
    const handleChange1=e=>{
      setSlide1(e.target.value);
      if((slide1<=1)||(slide1>=50)){
        setError(true);
      }
      else{
        setError(false);
      }
    }
    const handleChange2=e=>{
      setSlide2(e.target.value);
      if((slide2<=1)||(slide2>=20)){
        setError(true);
      }
      else{
        setError(false);
      }
    }
    
    const show=()=>{
      setShowPanel(true);
    }

    return(
      <div className = 'HomeWrapper'>
          <p className = 'title'>MineSweeper</p>
            {/* -- TODO 1-1 -- */}
            <button className = 'btn' onClick={startGameOnClick}>Start Game</button>
            {/* -- TODO 6-2 -- */}
            <div className = 'controlContainer'>
              <button className = 'btn' onClick = {show} >Difficulty Adjustment</button>
              <div className = 'controlWrapper' style = {{opacity:showPanel?1:0}}>
                <div className = 'error' style = {{color:error?'#880000':'transparent'}}>ERROR: Mines number and board size are invalid</div>
                <div className = 'controlPanel' style = {{opacity:showPanel?1:0}}>
                  <div className = 'controlCol' style = {{opacity:showPanel?1:0}}>
                    <p className = 'controlTitle' style = {{color:showPanel?'#0f0f4b':'transparent'}}>Mines Number</p>
                    <input type='range' step='1' value={slide1} min = "..." max ="..."  defaultValue= "10" style = {{opacity:showPanel?1:0}} onChange={handleChange1}></input>
                    <p className = 'controlNum'style={{color:error?'#880000':'#0f0f4b'}}>{slide1}</p>
                  </div>
                  <div className = 'controlCol'>
                    <p className = 'controlTitle'>Board Size (nxn)</p>
                    <input type='range' step='1'  min = "..." max ="..."  defaultValue='8' onChange={handleChange2}></input>
                    <p className = 'controlNum' style={{color:error?'#880000':'#0f0f4b'}}>{slide2}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Useful Hint: <input type = 'range' min = '...' max = '...' defaultValue = '...'> */}
            {/* Useful Hint: Error color: '#880000', default text color: '#0f0f4b', invisible color: 'transparent' */}
            {/* Reminder: The defaultValue of 'mineNum' is 10, and the defaultValue of 'boardSize' is 8. */}
            
        </div>
    );

}
export default HomePage;   