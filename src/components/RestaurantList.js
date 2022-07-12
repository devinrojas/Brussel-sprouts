import React from 'react';
import Restaurant from './Restaurant';


const RestaurantList = (props) => {

    const allRestaurantData = props.data.map(restaurant =>{
        return(<Restaurant
            key={restaurant.id}
            id={restaurant.id}
            name={restaurant.name}
            location={restaurant.location}
            description={restaurant.description}
            categories={restaurant.categories}
            image={restaurant.image}
            website={restaurant.website}
        />)
      })
    return ( 
        <div>
        {allRestaurantData}
        </div>
     );
}
 
export default RestaurantList;