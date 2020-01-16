import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        item: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(URL + '&query=' + this.state.item)
            .then(res => res.json())
            .then(json => this.setState({
                reviews: json.results
            }))
    }

    handleChange = (event) => {
        this.setState({
            item: event.target.value
        })
    }


    render() {
        return (
            <div className="searchable-movie-reviews">
                <form  onSubmit={event => this.handleSubmit(event)}>
                    <input type="text" placeholder="enter Text" onChange={event => this.handleChange(event)} />
                    <button type="submit">Search!</button>
                </form>

                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;
