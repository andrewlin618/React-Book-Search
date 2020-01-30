import React from "react";
import './style.css';

export function Button1(props){
        return(
            <a className={props.className} href={props.link} onClick={props.onClick}>
                {props.children}
            </a>
        )
    }

export function Button2(props){
        return(
            <button className={props.className} onClick={props.onClick}>
                {props.children}
            </button>
        )
    }