import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useFetchTopResCardDetails from '../../CustomHooks/useFetchTopResCardDetails';
import { useSelector } from 'react-redux';

const TopRestaurantCardDetails = ({ Navbar, isAuthentication }) => {
    const { userId } = useParams();
    const url = useMemo(() => `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.4714457&lng=88.3844319&restaurantId=${userId}&catalog_qa=undefined&submitAction=ENTER`, [userId]);
    useFetchTopResCardDetails(url);
    const cardDetails = useSelector((store) => store?.restaurant?.resCardDetails);
    cardDetails && console.log(cardDetails);

    console.log("render");

    return (
        <div>
            {isAuthentication && (
                <>
                    <Navbar/>
                    <div>Title</div>
                    <div>
                        <p>Name</p>
                        <p>cuisine</p>
                        <div>
                            <p>areaname</p>
                            <p>distance</p>
                        </div>
                        <div>
                            <p>Distance || delivery fee</p>
                        </div>
                    </div>
                    <div>
                        <p>Ratings</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default React.memo(TopRestaurantCardDetails);






