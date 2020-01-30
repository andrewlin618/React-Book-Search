import React from "react";
import {Button1,Button2} from "../Button";
import './style.css';

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
                    <div className='col-8'>
                        <a href={this.state.link}>{this.state.title}</a>
                        <p>Written by: <span>{this.state.authors.toString()}</span></p>
                    </div>
                    <div className='col-4 d-flex justify-content-end align-items-center'>
                        <Button1 className='btn btn-primary mr-1' link={this.state.link}>view</Button1>
                        <Button2 className='btn btn-success' onClick={this.handleSave}>save</Button2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <img src={this.state.image} alt={this.state.title}/>
                    </div>
                    <div className='col-md-9'>
                        <p>{this.state.description}</p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Card