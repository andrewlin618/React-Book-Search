import React from "react";
import {BtnView,BtnSaved} from "../Button";
import './style.css';
// import { Link } from "react-router-dom";

class Card extends React.Component{
    state = {
        title: this.props.title,
        authors: this.props.authors,
        category: this.props.category,
        publisher: this.props.publisher,
        publishedDate: this.props.publishedDate,
        description: this.props.description,
        image: this.props.image,
        link: this.props.link,
        target:"_blank",
        isCollapsed:this.props.isCollapsed,
    }

    handleSave = () =>{
        alert('lol');
    }

    render(){
        if(this.state.isCollapsed){
            return(
                <div className='card'>
                    <div className='card-body'>
                        <img src={this.state.image} alt={this.state.title}/><br />
                        <a className='title-text' href={this.state.link} target={this.state.target}>{this.state.title}</a>
                        <p>Written by: <span>{this.state.authors.toString()}</span></p>
                    </div>
                </div>
            )
        }
        return(
            <div className='card'>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-md-4 text-center'>
                        <a className='title-text' href={this.state.link} target={this.state.target}>{this.state.title}</a>
                        <p style={{fontWeight:'bold'}}> Written by: <span>{this.state.authors.toString()}</span></p>
                        <img src={this.state.image} alt={this.state.title}/>
                        <br /><br />
                    </div>
                    <div className='col-md-8 mt-4'>
                        <p className='p-text'>Category: <span>{this.state.category.toString()}</span></p>
                        <div className='row'>
                            <div className='col-md-6'>
                                <p className='p-text'>Publisher: <span>{this.state.publisher.toString()}</span></p>
                            </div>
                            <div className='col-md-6'>
                                <p className='p-text'>PublishedDate: <span>{this.state.publishedDate}</span></p>
                            </div>
                        </div>
                        <br />
                        <p>{this.state.description}</p>
                        <div style={{textAlign: 'right'}}>
                            <BtnView className='btn btn-dark mr-1 card-btn' link={this.state.link} target={this.state.target}>view</BtnView>
                            <BtnSaved className='btn btn-success card-btn' onClick={this.handleSave}>save</BtnSaved>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Card