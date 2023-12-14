import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const [restaurant,setRestaurant] = useState([]);
    console.log(restaurant);

    
    useEffect(() => {
            getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        // const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=175292");
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=74453");
        const json = await data.json();

        console.log(json);
        // setRestaurant(json?.data?.cards);

        async function checkJsonData(jsonData){

            for(let i=0;i<jsonData?.data?.cards.length;i++){
                let checkData = json?.data?.cards;

                if(checkData!==undefined){return checkData;}
            }
        }

        const resData = await checkJsonData(json);
        const normalised = resData.map((item) => (
        {type:"restaurant",data:item.info}
        ))
          console.log(json);
        //  setOriginalRestaurants(normalised);
        // setFilteredRestaurants(normalised);
       setRestaurant(normalised);

    }

    

    return (
        <div>
            <h1>Restaurant id: {resId}</h1>
            <h1>{restaurant?.name}</h1>
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/257508279a8ed217b14b01bee97ba9a1" +restaurant?.cloudinaryImageId}/>
            <h3>{restaurant?.area}</h3>
        </div>
    );

};

export default RestaurantMenu;