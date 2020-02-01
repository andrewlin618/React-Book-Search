import React from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav"
import Jumbotron from "../../components/Jumbotron"
import Container from "../../components/Container";
import Card from "../../components/Card";
import {Button2} from "../../components/Button"
import './style.css';
import bookNotPictured from "../../images/bookNotPictured.jpg"

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
        results:[]
    };

    handleChange = event => {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }

    handleSubmit = event => {
        // event.preventDefault();
        this.setState({
            toResults: true
        })     
        if (this.state.value) {
            const title = this.state.value.trim();
        //     alert("hahahahha!"+title);
            API.getNewBooks(title)
                .then(res => {
                    // console.log(res.data.items);
                    if (res.data.items){
                        this.setState({
                            value:'',
                            results: res.data.items
                        })                        
                    }           
                    console.log(this.state.results);
                })
            .catch(err => console.log(err));
        }              
    };

    render() {
        if (!this.state.toResults) {
            return(
                <div>
                    <Nav />
                    <Jumbotron />
                    <Container>
                        <h3>Book Search</h3>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Tile of book" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={this.handleChange}></input>
                            <div className="input-group-append">
                                <Button2 className="btn btn-success search" type="button" id="button-addon2" onClick={this.handleSubmit} >Search</Button2>
                            </div>
                        </div>
                    </Container>
                    <br />
                </div>
            )
            
        }
        if(this.state.toResults && this.state.results.length !== 0){
            return(
                <div>
                    <Nav />
                    <Jumbotron />
                    <Container>
                        <h3>Book Search</h3>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Tile of book" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={this.handleChange}></input>
                            <div className="input-group-append">
                                <Button2 className="btn btn-success search" type="button" id="button-addon2" onClick={this.handleSubmit} >Search</Button2>
                            </div>
                        </div>
                    </Container>
                    <br />
                    <Container>
                        {this.state.results.map(book => 
                            <Card key={book.id || '???'} title={book.volumeInfo.title || '???'} authors={book.volumeInfo.authors || '???'} description={book.volumeInfo.description || '???'} image={book.volumeInfo.imageLinks.thumbnail || bookNotPictured} link={book.volumeInfo.previewLink || '/'}/>
                        )}
                    </Container>
                </div>
            )
        }

        return(
            <div>
                <Nav />
                <Jumbotron />
                <Container>
                    <h3>Book Search</h3>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Tile of book" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={this.handleChange}></input>
                        <div className="input-group-append">
                            <Button2 className="btn btn-success search" type="button" id="button-addon2" onClick={this.handleSubmit} >Search</Button2>
                        </div>
                    </div>
                </Container>
                <br />
                <Container>
                    <h1>No results</h1>
                </Container>
            </div>
        )
    }
};

export default SearchPage;
