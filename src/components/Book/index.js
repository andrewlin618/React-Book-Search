import React from "react";
import {BtnView} from "../Button";
import './style.css';
// import API from "../../utils/API";
// import { Link } from "react-router-dom";

function Book({ title, authors, categories, publisher, publishedDate, image, description, link, isCollapsed, target, Button }) {
    if(isCollapsed){
        return(
            <div className='card shadow-sm'>
                <div className='card-body'>
                    <img src={image} alt={title}/><br />
                    <a className='title-text' href={link} target={target}>{title}</a>
                    <p>Written by: <span>{authors.toString()}</span></p>
                </div>
            </div>
        )
    }
    return(
        <div className='card shadow'>
        <div className='card-body'>
            <div className='row'>
                <div className='col-md-8'>
                    <a className='title-text' href={link} target={target}>{title}</a>
                    <p style={{fontWeight:'bold'}}> Written by: <span>{authors.toString()}</span></p>
                </div>
                <div className='col-md-4 mt-2'>
                    <p className='p-text'>Category: <span>{categories.toString()}</span></p>
                    <p className='p-text'>Publisher: <span>{publisher.toString()}</span></p>
                    <p className='p-text'>PublishedDate: <span>{publishedDate}</span></p>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2 text-center'>
                    <img className='rounded shadow' src={image} alt={title}/>
                </div>
                <div className='col-md-10'>
                    <p>{description}</p>
                    <div style={{textAlign: 'right'}}>
                        <BtnView className='btn btn-dark mr-1 card-btn' link={link} target={target}>VIEW</BtnView>
                        <Button />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Book