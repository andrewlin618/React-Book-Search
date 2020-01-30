import React from "react";
import Nav from "../../components/Nav"
import Jumbotron from "../../components/Jumbotron"
import Container from "../../components/Container";

function SearchPage(){
    return(
        <div>
            <Nav />
            <Jumbotron />
            <Container>
                <h3>Saved Books</h3>
                <p>Book</p>
            </Container>
        </div>
    )
}

export default SearchPage;
