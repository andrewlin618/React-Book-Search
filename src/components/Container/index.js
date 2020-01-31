import React from "react";
import './style.css';

function Container(props){
    return(
        <div className="container card">
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default Container;