//import logo from './logo.svg';
import x from './x.png';
import './styles.css';
//port Check from './check';
import React, { Component, useEffect } from 'react';
import {useState} from 'react';
import { Fragment } from 'react';
import Footer from './footer';
//const todos=[];
let last=0;

const Generate=()=>{
  const [todos, setTodo] = useState([]);
  console.log(todos);
  const addItem=(e)=>{
    if (e.key==='Enter')
    {
      setTodo([...todos ,{ id:last,content:e.target.value,checked:false},]);
      last =last+1;
      e.target.value='';
    }
  }

  

  const checkDone=(index)=>{
    let tmp_todoList = todos.slice();
    tmp_todoList[index].checked=!tmp_todoList[index].checked;
    setTodo(tmp_todoList);
    // setTodo()
  }

  return(
    <div id="root" className="todo-app__root">
      <header className="todo-app__header todo-app__title">
            todos
      </header>
      <section className="todo-app__main">
          <input className="todo-app__input" id='todo-input' placeholder="What needs to be done?" onKeyPress={addItem}/>

          <ul className="todo-app__list" id="todo-list">
            <Fragment>
              {todos.map(todo=>
              <li className="todo-app__item" style={{textDecoration:todo.checked?"line-through":"",opacity:todo.checked?0.5:1}}>
                <div className="todo-app__checkbox" id={last} onClick={()=>checkDone(todo.id)}>
                  <input type="checkbox" checked={todo.checked}></input>
                  <label htmlFor="0"></label>
                </div>
                <h1 >
                  {todo.content}
                </h1>
                <img src={x} className="todo-app__item-x" ></img>
              </li>)}
            </Fragment>
          </ul>
      </section>
      <Footer length={todos.length} left={todos.filter((e)=> e.checked === false).length}/>
      
  </div>
  );
}


export default Generate;
