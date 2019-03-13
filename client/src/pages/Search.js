import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import { Input, FormBtn } from '../components/SearchForm/SearchForm';
import axios from 'axios'
import Books from '../pages/'

class Search extends Component {
	state = {
		books: {},
		title: '',
		author: '',
		descrip: '',
		imgURL: '',
		link: '',
		items: []
	};

	constructor() {
		super();
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

  handleFormSubmit = event => {
    event.preventDefault()
    axios.request({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.title
    }).then((response) => {
      this.setState({books: response.data.items}, () => {
        console.log(this.state);
      })
    }).catch((error) => {
      console.log(error);
    });
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
							<FormBtn disabled={!this.state.title} onClick={this.handleFormSubmit}>
								Search Books
							</FormBtn>
						</form>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-12">
						<Books books={this.state.books}/>
					</div>
				</div>
			</div>
		);
	}
}

export default Search;
