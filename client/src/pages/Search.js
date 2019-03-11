import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import {Input, FormBtn} from "../components/SearchForm/SearchForm";
import API from "../utils/API";

class Search extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    descrip: "",
    imgURL: "",
    link: ""
  };

  constructor() {
    super()
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = event => {
      const {name, value} = event.target;
      this.setState({
          [name]: value
      });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      API.getBooks(this.state.title)
        .then(res => this.setState({ books: res.data}))
        .catch(err = console.log(err));
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Jumbotron>
              <h1>Search for Google Books</h1>
            </Jumbotron>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <form>
                <Input 
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Book Title"
                />
                <FormBtn 
                    disabled={!this.state.title}
                    onClick={this.handleFormSubmit}
                > 
                Search Books
                </FormBtn>

            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <h1>List of Books</h1>
          </div>
        </div>

      </div>
    );
  }
}

export default Search;
