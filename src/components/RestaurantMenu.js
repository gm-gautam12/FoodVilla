import { useParams } from "react-router-dom";


const RestaurantMenu = () => {

    const { id } = useParams();
    console.log({id});
    return(
        <div>
            <h1>Restaurant id: {id}</h1>
        </div>
    )
}

export default RestaurantMenu;