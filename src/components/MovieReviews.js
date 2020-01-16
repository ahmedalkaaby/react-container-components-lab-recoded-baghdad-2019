// Code MovieReviews Here
import React from ' react'

const MovieReviews = {(reviews)} =>{
  <ul className="review-list">
  {
  reviews.map(movie=>{
    return <li className="review">{reviews.display_title}</li>
  })
  }
  </ul>
}

export default MovieReviews
