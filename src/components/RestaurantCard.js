import { IMG_CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    avgRatingString,
    sla,
    costForTwo,
  }) => {
    return (
      <div className="h-72 w-56 m-8 box-border overflow-x-clip cursor-pointer rounded-md p-2 shadow-[-1px_5px_10px_5px_rgba(112,112,112,.2)]">
        <img className="w-96 h-32 box-border rounded-lg overflow-clip"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold m-1">{name}</h3>
        <p className="m-1 text-sm">{cuisines.join(", ")}</p>
        {/* <h4 className="m-1 text-sm">{avgRating} &#9733;</h4> */}
        <span className="text-center flex justify-evenly">
         <h5 className={`${avgRatingString < 4 ? "bg-red-500 rounded p-0.5" : avgRatingString === "--" ? "bg-white text-black"
           : "text-white bg-green-500 rounded p-0.5"
         }`}
           >
          {/* <FontAwesomeIcon icon={faStar} size="sm" />*/} ⭐{avgRatingString}
          </h5>
          <h5 className="text-gray-600 font-bold text-sm py-0.5">•</h5>
          <h5 className="font-bold text-sm py-0.5">{sla?.lastMileTravelString??'2.0 km'}</h5>
          <h5 className="text-gray-600 font-bold text-sm py-0.5">•</h5>
         <h5 className="font-bold text-sm py-0.5">{costForTwo ?? '₹200 for two'}</h5>
        </span>

      </div>
    );
  };

  export default RestaurantCard;