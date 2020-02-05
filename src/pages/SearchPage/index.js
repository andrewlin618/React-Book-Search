import React from "react";
import axios from "axios";
// import API from "../../utils/API";
import Nav from "../../components/Nav"
import Jumbotron from "../../components/Jumbotron"
import Container from "../../components/Container";
import Card from "../../components/Card";
import {BtnSubmit} from "../../components/Button"
import './style.css';
// import bookNotPictured from "../../images/bookNotPictured.jpg"

// const test = {
//     authors: ["Suzanne Collins"],
//     description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
//     image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//     link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
//     title: "The Hunger Games"
// }

class SearchPage extends React.Component {
    state = {
        value: '',
        toResults:false,
        results:[],
        isCollapsed:false,
        message:'Try to search something else...'
    };

    handleChange = event => {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            toResults: true
        })     
        // const title = this.state.value.trim();
        console.log(this.state.value);
        axios
        .get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.value)
        .then(results => {
            results.data.items.filter(
                result =>
                // result.volumeInfo.title  &&
                // result.volumeInfo.authors  &&
                (result.volumeInfo.publisher!==null)
                // result.volumeInfo.publishedDate &&
                // result.volumeInfo.categories &&
                // result.volumeInfo.description &&
                // result.volumeInfo.imageLinks &&
                // result.volumeInfo.imageLinks.thumbnail &&
                // result.volumeInfo.previewLink
            );
            console.log(results.data.items);
            this.setState({
                results: results.data.items
            })
            console.log(this.state.results);
        })
        .catch(() =>
            this.setState({
                results: [],
                message: "No New Books Found, Try a Different Query"
            })
        );
        }

    render() {
        if (!this.state.toResults) {
            return(
                <div>
                    <Nav />
                    <Jumbotron />
                    <Container>
                        <h4 style={{fontWeight:'bold'}}>BOOK SEARCH</h4>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control title" placeholder="Title of book" aria-label="Book's Keyword" aria-describedby="button-addon2" onChange={this.handleChange}></input>
                            <div className="input-group-append">
                                <BtnSubmit className="btn btn-success search" type="button" id="button-addon2" onClick={this.handleSubmit} >SEARCH</BtnSubmit>
                            </div>
                        </div>
                    </Container>
                    <br />
                </div>
            )
            
        }

        return(
            <div>
                <Nav />
                <Jumbotron />
                <Container>
                    <h4 style={{fontWeight:'bold'}}>BOOK SEARCH</h4>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control title" placeholder="Title of book" aria-label="Book's Keyword" aria-describedby="button-addon2" onChange={this.handleChange}></input>
                        <div className="input-group-append">
                            <BtnSubmit className="btn btn-success search" type="button" id="button-addon2" onClick={this.handleSubmit} >SEARCH</BtnSubmit>
                        </div>
                    </div>
                </Container>
                <br />
                {(this.state.toResults && this.state.results.length !== 0)?(
                <Container>
                    <h4 style={{fontWeight:'bold'}}>SEARCH RESULTS</h4>
                        {this.state.results.map(book => 
                            <Card 
                            key={book.id} 
                            title={book.volumeInfo.title} 
                            authors={book.volumeInfo.authors} 
                            category={book.volumeInfo.categories} 
                            description={book.volumeInfo.description}  
                            publisher={book.volumeInfo.publisher}
                            publishedDate={book.volumeInfo.publishedDate} 
                            image={book.volumeInfo.imageLinks.thumbnail} 
                            link={book.volumeInfo.previewLink} 
                            isCollapsed={this.state.isCollapsed}/>
                        )}
                </Container>
                ):(
                    <h2 className="text-center">{this.state.message}</h2>
                )}
            </div>
        )
    }
};

export default SearchPage;
