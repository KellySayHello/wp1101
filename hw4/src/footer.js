import './styles.css';
import React, { Component, useEffect } from 'react';
import {useState} from 'react';
import { Fragment } from 'react';
import { render } from '@testing-library/react';

const Footer=(props)=>{
    let {length,left,list}=props;

    if(length===0){
        return<></>;
    }
    else if(length!==0){
        return(
            <footer id="todo-footer" class="todo-app__footer">
                <div class="todo-app__total">
                    <span id="left_count">{left}</span>left
                </div>

                <ul class="todo-app__view-buttons">
                    <li>
                        <button type="button" id="view_0">All</button>
                    </li>
                    <li>
                        <button type="button" id="view_1">Active</button>
                    </li>
                    <li>
                        <button type="button" id="view_2">Completed</button>
                    </li>
                </ul>

                <div class="todo-app__clean">
                    <button type="button" id="clear_completed">Clear completed</button>
                </div>
            </footer>
        )
    }
}

export default Footer;
