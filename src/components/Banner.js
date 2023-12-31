import React, { useState, useEffect } from "react";



function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Banner = ({ onFilterChange }) => {
  const [searchText, setSearchText] = useState("");
  const [originalRestaurants, setOriginalRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
 

  useEffect(() => {
    onFilterChange(filteredRestaurants);
  }, [filteredRestaurants, onFilterChange]);

  const handleSearch = () => {
    if (searchText.trim() === "") {

      setFilteredRestaurants(originalRestaurants);
    } else {
      const filteredData = filterData(searchText, originalRestaurants);
      setFilteredRestaurants(filteredData);
    }
  };

  useEffect(() => {
    getRestaurants();
  },[]);

  async function getRestaurants() {

       try{
         const data = await fetch("https://food-villa-server.vercel.app/api/restaurants?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
         const json = await data.json();

            async function checkJsonData(jsonData){

                for(let i=0;i<jsonData?.data?.cards.length;i++){
                    let checkData = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

                    if(checkData!==undefined){return checkData;}
                }
            }

            const resData = await checkJsonData(json);
            const normalised = resData.map((item) => (
            {type:"restaurant",data:item.info}
            ))
              console.log(json);
            setOriginalRestaurants(normalised);
           setFilteredRestaurants(normalised);

       } catch(error){
        console.log(error);
       }
       
   }
  async function checkJsonData(jsonData) {
    for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        let checkData = jsonData?.data?.cards?.gridWidget?.gridElements?.infoWithStyle?.restaurants;

        if (checkData !== undefined) {
            return checkData;
        }
    }
}

  return (
    <>
      <div className="box-border h-56 w-100 border-2 m-2 flex justify-between bg-black">
        <h2 className="font-bold text-4xl my-12 m-5 p-8 text-white">
          Find restaurants near you..
        </h2>

        <div className="m-10 p-10 relative">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
            <input
              type="text"
              className="w-80 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Get Restaurants you want..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />

            <button
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-600 hover:bg-slate-300 px-4 py-2 text-sm rounded-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


export default Banner;
