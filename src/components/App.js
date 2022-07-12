import React, { useState } from "react"

import RestaurantForm from "./RestaurantForm"
import restaurants from "../constants/restaurants"

import reviewData from "../constants/reviews"
import ReviewList from "./ReviewList"
import ReviewFrom from "./ReviewForm"
import RestaurantList from "./RestaurantList"

const App = props => {
  const [reviews, setReviews] = useState(reviewData)
  const [inputs, setInputs] = useState({
    name: "",
    rating: "",
    content: "",
    id: ""
  })

  const [rests,setRests] = useState(restaurants)
  const [resInputs,setResInputs] = useState({
    id: '',
    name: '',
    location: '',
    description: '',
    categories: [],
    image: '',
    website: ''
  })


  const infoSubmitHandler = information => {
    setReviews(reviews.concat(information))
  }

  const handleSubmit = event =>{
    event.preventDefault()
    infoSubmitHandler(inputs)
    setInputs({
      name: "",
      rating: "",
      content: "",
      id: ""
  })
  }

  const resSubmitHandler  = information => {
    setRests(rests.concat(information))
  }

  const resHandleSubmit = event =>{
    event.preventDefault()
    resSubmitHandler(resInputs)
    setResInputs({
      id: '',
      name: '',
      location: '',
      description: '',
      categories: [],
      image: '',
      website: ''
  })
  }






  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="restaurants cell small-3">
          <h3>Restaurants</h3>
          <RestaurantForm 
            resInputs={resInputs}
            setResInputs={setResInputs}
          />

          <RestaurantList
            data={restaurants}
          />
        </div>

        <div className="reviews cell auto grid-x">
          <div className="cell">
            <h3>Reviews</h3>

            <ReviewList 
              reviewData={reviews}
            /> 

          <div className="cell">
            <h3>Review Form</h3>

          <ReviewFrom 
            inputs={inputs}
            setInputs={setInputs}
            handleSubmit={handleSubmit}
          />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
