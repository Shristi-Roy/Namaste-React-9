import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    console.log()
    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu()
    }, []);

    const fetchMenu = async() => {
        const data = await fetch(MENU_API + resId
        );

        const json = await data.json();

        console.log(json);
        setResInfo(json);
    }

    if(resInfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage, avgRating} = resInfo?.data?.cards[0].card?.card?.info;

    console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card);
     const {carousel} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

     console.log(carousel);


    return(
            <div className="menu">
                <h1>{name}</h1>
                <p>
                    {cuisines.join(" ")} - {costForTwoMessage}
                </p>
                <h2>{avgRating}</h2>
                <h2>Menu</h2>
                <ul>
                    {carousel.map(item =>
                         <li key={item.dish.info.id}>
                            {item.dish.info.name} - {"Rs "}
                            {item.dish.info.price / 100}
                            </li>
                    )};
                </ul>
            </div>
        );  
};

export default RestaurantMenu