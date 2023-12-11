import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({
    name,
    // cuisines,
    cloudinaryImageId,
    avgRating,
  }) => {
    return (
      <div className="h-60 w-44 rounded-sm m-8">
        <img className="w-44 h-32 rounded-md"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <h2 className="font-bold m-1">{name}</h2>
        {/* <h4 className="m-1 text-sm">{cuisines.join(", ")}</h4> */}
        <h4 className="m-1 text-sm">{avgRating} &#9733;</h4>
      </div>
    );
  };

  export default RestaurantCard;