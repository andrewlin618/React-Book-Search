import React from "react";
import axios from "axios";
import Nav from "../../components/Nav"
import Jumbotron from "../../components/Jumbotron"
import Container from "../../components/Container";
import Card from "../../components/Card";
import {Button2} from "../../components/Button"
import './style.css';

const test = {
    authors: ["Suzanne Collins"],
    description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
    title: "The Hunger Games"
}

class SearchPage extends React.Component {
    state = {
        value: ''
    };

    handleChange = event => {
        this.setState({value: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        //TODO:
        let baseUrl = 'https://www.googleapis.com/books/v1'
        let query = baseUrl + '/volumes?q=' + this.state.value;
        console.log('handleSubmit works!')
        axios({
            method: 'get',
            url: query,
            responseType: 'stream'
        })
        .then(function (response) {
            console.log(response.items[0]);
        });
    };
    
    
    render() {
        return(
            <div>
                <Nav />
                <Jumbotron />
                <Container>
                    <h3>Book Search</h3>
                    <p>Book</p>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Tile of book" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                        <div className="input-group-append">
                            <Button2 className="btn btn-success search" type="button" id="button-addon2" onClick={this.handleSubmit}>Search</Button2>
                        </div>
                    </div>
                </Container>
                <br />
                <Container>
                    <Card title={test.title} authors={test.authors} description={test.description} image={test.image}  link={test.link} />
                    <Card title={test.title} authors={test.authors} description={test.description} image={test.image}  link={test.link} />
                </Container>
            </div>
        )
    }
}

export default SearchPage;
