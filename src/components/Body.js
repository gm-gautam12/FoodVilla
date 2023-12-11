import { useEffect, useState } from "react";
import Banner from "./Banner";
import restaurantList from "../utils/constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const handleFilterChange = (filteredData) => {
    setFilteredRestaurants(filteredData);
  };
  // console.log(filteredRestaurants);

  
  return (
    <>
      <Banner onFilterChange={handleFilterChange} />
      <div>
        <h2 className="text-center font-bold text-4xl m-2 p-2">
          Top Restaurants on FoodVilla
        </h2>
      </div>
      <div className="flex justify-center flex-wrap">
        
        {filteredRestaurants.length > 0
          ? filteredRestaurants.map((restaurant, index) => (
              <RestaurantCard key={index} {...restaurant.data} />
            ))
          : restaurantList.map((restaurant, index) => (
              <RestaurantCard key={index} {...restaurant.data} />
            ))}
      </div>
    </>
  );
};

export default Body;