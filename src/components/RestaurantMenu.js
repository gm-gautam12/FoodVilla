import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        // const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=175292");
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=74453");
        const json = await data.json();

        console.log("RestaurantMenu.js=>json->", json);
        setRestaurants(json?.data?.cards);

    }



    return (
        <div>
            <h1>Restaurant id: {resId}</h1>
            {
                restaurants.map((restaurant) => {
                    if (restaurant?.card?.card?.info != undefined)
                        return (
                            <>
                                <h1>{restaurant?.card?.card?.info?.name}</h1>
                                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + restaurant?.card?.card?.info?.cloudinaryImageId} />
                                <h3>{restaurant?.card?.card?.info?.area}</h3>
                            </>
                        )

                    else return null;
                })
            }
        </div>
    );

};

export default RestaurantMenu;