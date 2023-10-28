import React, { useState, useEffect } from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./shimmer";
import {link} from "react-router-dom"

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!data.ok) {
        throw new Error("Failed to fetch data");
      }

      const json = await data.json();

      const restaurants =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListofRestaurants(restaurants);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const filterTopRatedRestaurants = () => {
    const topRatedList = listofRestaurants.filter(
      (res) => res.info.avgRating > 4.3
    );
    setFilteredRestaurants(topRatedList);
  };

  const handleSearch = () => {
    const filteredList = listofRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredList);
  };

  if (isLoading) {
    return <Shimmer noofData="15" />;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" 
          onClick={handleSearch}>Search</button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button
        className="px-4 py-2 bg-red-400 rounded-lg" 
        onClick={filterTopRatedRestaurants}>
          Top Rated Restaurants
        </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* {filteredRestaurants.map((restaurant) => (
          <link key={restaurant.data.id}
                 to= {"restaurants/" + restaurant.data.id}
                 > */}
                  <RestaurantCard
          resData={filteredRestaurants.length > 0 ? filteredRestaurants : listofRestaurants}
        />
         {/* </link>
        ))};  */}
      </div>
    </div>
  );
};

export default Body;
