import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    // It receives a prop called resData, which is an array of restaurant data.
    return (
        resData.map((data) => {
            const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } = data.info;
            const uniqueKey = data.restaurantId;

// not using key (is not acceptable) >>>>>> index as a key >>>>> unique key/id (best practices)

            return (
                <div className='m-4 p-4 w-[260px] rounded-lg bg-gray-100 hover:bg-gray-200' key={uniqueKey}>
                    <img
                        className='rounded-lg'
                        alt='res-logo'
                        src={CDN_URL+ cloudinaryImageId}
                        key={uniqueKey}
                    />
                    <h3 className="font-bold py-4 text-lg">{name}</h3>
                    <h4>{cuisines.join(" , ")}</h4>
                    <h4>{avgRating}</h4>
                    <h4>{costForTwo}</h4>
                    <h4>{sla.deliveryTime} minutes</h4>
                </div>
            );
        })
    );
};

//Create Higher Order Components 
//which will take retaurant card are as input & it will return a new component which is an enhanced retaurant card
// enchance rest... card means - restaurant card with promoted label

export const withPromotedLabel = (RestaurantCard) => {
    return() => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard/>
            </div>
        )
    }
}

export default RestaurantCard;

