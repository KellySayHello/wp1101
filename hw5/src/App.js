// import logo from './logo.svg';
import { useState ,useEffect} from 'react';
import './styles.css';
import { calculate ,hasPrecedence,applyOp} from './Calculator.js';

const App=()=> {
  const [content,setContent]=useState([]);
  const [times,setTimes]=useState(0);
  
  const equal=(s)=>{
    setContent([calculate(s)]);
  }
  // console.log(content[0]);

  const reverse=(T)=>{
    let tempt=parseFloat(T,10);
    tempt=-tempt;
    let str=tempt.toString();
    content.pop();
    setContent([str]);

  }

  const clear =()=>{
    setContent([]);
  } 

  const del=()=>{
    let tempt=content.slice();
    tempt.pop();
    setContent(tempt);
  }

  const addContent=(T)=>{
    setContent([...content,T]);
  }

  const bracelet=()=>{
    if(times% 2 === 0){
      setTimes(1);
      addContent("(");
      
    }
    if(times% 2 ===1){
      setTimes(0);
      addContent(")");
    }
    // console.log(times);
  }

  return (
    <div className="row-y">
      <h1>{content}</h1>
      <div className="row-x">
        <button style={{color:"red",fontSize:'2.5em'}}  onClick={clear}>C</button>
        <button style={{color:"green",fontSize:'2em'}} onClick={del}>del</button>
        <button style={{color:"green",fontSize:'2.5em'}} onClick={bracelet}>()</button>
        <button style={{color:"green"}} onClick={()=>{addContent("÷")}}>÷</button>
      </div>
      <div className="row-x">
        <button style={{color:"black"}} onClick={()=>{addContent("7")}}>7</button>
        <button style={{color:"black"}} onClick={()=>{addContent("8")}}>8</button>
        <button style={{color:"black"}} onClick={()=>{addContent("9")}}>9</button>
        <button style={{color:"green"}} onClick={()=>{addContent("×")}}>×</button>
      </div>
      <div className="row-x">
        <button style={{color:"black"}} onClick={()=>{addContent("4")}}>4</button>
        <button style={{color:"black"}} onClick={()=>{addContent("5")}}>5</button>
        <button style={{color:"black"}} onClick={()=>{addContent("6")}}>6</button>
        <button style={{color:"green"}} onClick={()=>{addContent("-")}}>-</button>
      </div>
      <div className="row-x">
        <button style={{color:"black"}} onClick={()=>{addContent("1")}}>1</button>
        <button style={{color:"black"}} onClick={()=>{addContent("2")}}>2</button>
        <button style={{color:"black"}} onClick={()=>{addContent("3")}}>3</button>
        <button style={{color:"green"}} onClick={()=>{addContent("+")}}>+</button>
      </div>
      <div className="row-x">
        <button style={{color:"black"}} onClick={()=>{reverse(content)}}>+/-</button>
        <button style={{color:"black"}} onClick={()=>{addContent("0")}}>0</button>
        <button style={{color:"black"}} onClick={()=>{addContent(".")}}>.</button>
        <button style={{color:"green"}} onClick={()=>equal(content)}>=</button>
      </div>

    </div>
  );
}

export default App;
