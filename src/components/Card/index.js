import React from "react";
import {Button1,Button2} from "../Button";
// import {Link} from "react-router-dom";
import './style.css';
// import { Link } from "react-router-dom";

class Card extends React.Component{
    state = {
        title: this.props.title,
        authors: this.props.authors,
        description: this.props.description,
        image: this.props.image,
        link: this.props.link
    }

    handleSave = () =>{
        alert('lol');
    }

    render(){
        return(
            <div className='card'>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-md-4'>
                        <a className='title-text' href={this.state.link}>{this.state.title}</a>
                        <p>Written by: <span>{this.state.authors.toString()}</span></p>
                        <img src={this.state.image} alt={this.state.title}/>
                        <br /><br />
                    </div>
                    <div className='col-md-8'>
                        <Button1 className='btn btn-primary mr-1' link={this.state.link}>view</Button1>
                        <Button2 className='btn btn-success' onClick={this.handleSave}>save</Button2>
                        <br /><br />
                        <p>{this.state.description}</p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Card