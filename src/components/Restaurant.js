import React from 'react'

const Restaurant = (props) => {

  

  return(
    <div className="grid-x grid-margin-x grid-padding-y">
      <h3></h3>
      <div className="cell">
        <img src={props.image} alt={props.name} />
      </div>

      <div className="cell">
        <p>
          <a href="#">
            <strong>{props.name}</strong>
          </a>
        </p>

        <p>{props.location}</p>
      </div>

    </div>
  )
}

export default Restaurant
