import { useEffect, useState } from "react";
import Banner from "./Banner";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";



const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // console.log(filteredRestaurants);

  const handleFilterChange = (filteredData) => {
    setFilteredRestaurants(filteredData);
  };
  // console.log(filteredRestaurants);

  
  return  (
    <>
    <div>
      <Banner onFilterChange={handleFilterChange} />
      <div>
        <h2 className="text-center font-bold text-4xl m-2 p-2">
          Top Restaurants on FoodVilla
        </h2>
      </div>
      {filteredRestaurants?.length === 0?(
      <Shimmer/>
      ):(
      <div className="flex justify-center flex-wrap">
        {filteredRestaurants.length > 0
          ? filteredRestaurants.map((restaurant, index) => (
              <RestaurantCard key={index} {...restaurant.data} />
            ))
          : originalRestaurants.map((restaurant, index) => (
              <RestaurantCard key={index} {...restaurant.data} />
            ))}
      </div> 
      )
      }
      </div>
    </>
  );
};

export default Body;