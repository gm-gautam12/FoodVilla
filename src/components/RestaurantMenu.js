import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const [restaurant,setRestaurant] = useState({});
    
    useEffect(() => {
            getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=175292");
        const json = await data.json();

        console.log(json);
        setRestaurant(json.data);
    }
    


    return (
        <div>
            <h1>Restaurant id: {resId}</h1>
            <h1>{restaurant?.name}</h1>
            {/* <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + restaurant?.cloudinaryImageId}/> */}
            <h3>{restaurant.area}</h3>
        </div>
    );
};

export default RestaurantMenu;