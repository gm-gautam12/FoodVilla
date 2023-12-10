import { useEffect, useState } from "react";
import Banner from "./Banner";
import restaurantList from "../utils/constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {

    return(
        <>
       <Banner/>
       <div>
       <h2 className="text-center font-bold text-4xl m-2 p-2">Top Restaurants on FoodVilla</h2>
       </div>
      <div className="flex justify-center flex-wrap">
        {
            restaurantList.map((restaurant, index) => {
                return  <RestaurantCard key={index} {...restaurant.data}/>
            })
        }
        {/* <RestaurantCard  {...restaurantList[0].data}/>
        <RestaurantCard  {...restaurantList[1].data}/>
        <RestaurantCard  {...restaurantList[2].data}/>
        <RestaurantCard  {...restaurantList[3].data}/>
        <RestaurantCard  {...restaurantList[4].data}/>
        <RestaurantCard  {...restaurantList[5].data}/> */}
       


      </div>
     
      </>
    );
};

export default Body;