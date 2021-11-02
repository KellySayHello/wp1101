// import logo from './logo.svg';
import { useState ,useEffect} from 'react';
import './styles.css';

const App=()=> {
  const [content,setContent]=useState([]);
  const [number,setNumber]=useState([0]);
  // console.log(content[0]);

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

  const handleMath=()=>{
    let i=0;
    let prev=content[i];
    let next=content[i+1];

    for(i=0;i<content.length;i=i+1){
      // console.log(content[i]);

      if(!Number.isInteger(parseInt(content[i]))&&!Number.isInteger(parseInt(content[i+1]))){
        setContent(['wrong input type']);
        break;
      }

      else if(!Number.isInteger(parseInt(content[i]))&&content[i]!=="."){
        let same=content.slice();

        // console.log(same[i]);
    
        let tempt=content.splice(0,i);
        let tmp=content.splice(1,content.length);

        let first=tempt.map(tempt=>parseInt(tempt));
        let second=tmp.map(tmp=>parseInt(tmp));

        let num1=+first.join("");
        let num2=+second.join("");
        // console.log(num1);
        // console.log(num2);

        if(same[i]==="+"){
          setContent([]);
          setContent([parseFloat(num1)+parseFloat(num2)]);
        }

        else if(same[i]==="-"){
          setContent([]);
          setContent([parseFloat(num1)-parseFloat(num2)]);
        }

        else if(same[i]==="×"){
          setContent([]);
          setContent([parseFloat(num1)*parseFloat(num2)]);
        }

        else if(same[i]==="÷"){
          setContent([]);
          if(parseFloat(num1)/parseFloat(num2)===Infinity)
          {
            setContent(['infinity,error'])
          }
          else{
            setContent([parseFloat(num1)/parseFloat(num2)]);
          }
        }
        // handleMath();

        break;
      }

    }

  }
  

  return (
    <div className="row-y">
      <h1>{content}</h1>
      <div className="row-x">
        <button style={{color:"red",fontSize:'2.5em'}}  onClick={clear}>C</button>
        <button style={{color:"green",fontSize:'2em'}} onClick={del}>del</button>
        <button style={{color:"green",fontSize:'2.5em'}} onClick={()=>{addContent("%")}}>%</button>
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
        <button style={{color:"black"}}>+/-</button>
        <button style={{color:"black"}} onClick={()=>{addContent("0")}}>0</button>
        <button style={{color:"black"}} onClick={()=>{addContent(".")}}>.</button>
        <button style={{color:"green"}} onClick={handleMath}>=</button>
      </div>

    </div>
  );
}

export default App;
