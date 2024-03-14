import React, { useEffect, useMemo,} from "react";
import { useLocation, useParams } from "react-router-dom";
import useFetchTopResCardDetails from "../../CustomHooks/useFetchTopResCardDetails";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setCurrentRoute } from "../../Redux Store/restaurantSlice";
import ShimmerEffectForResWithFoodDelivery from "../../Utilities/ShimmerEffectForResWithFoodDelivery";
import LineBar from "../../Utilities/LineBar";
import OffersSection from "./OffersSection";
import FoodAccordian from "./FoodAccordian";
import CartPopUp from "../../Utilities/CartPopUp";

const TopRestaurantCardDetails = ({ sign, Navbar }) => {
  const { userId } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const quantity=useSelector((store)=>store?.cart?.cartQuantity)

  useEffect(() => {
    dispatch(setCurrentRoute(location.pathname));
  }, [dispatch, location.pathname]);
  const url = useMemo(
    () =>
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.4714457&lng=88.3844319&restaurantId=${userId}&catalog_qa=undefined&submitAction=ENTER`,
    [userId]
  );
  useFetchTopResCardDetails(url);
  const cardDetails = useSelector((store) => store?.restaurant?.resCardDetails);
  cardDetails && console.log(cardDetails);
  const FoodAccrodians = useMemo(
    () =>
      cardDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ),
    [cardDetails]
  );

  cardDetails && console.log(FoodAccrodians);
  const infoCard = useMemo(
    () =>
      cardDetails?.data?.cards?.find(
        (item) =>
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      ),
    [cardDetails]
  );
  // console.log(infoCard);
  if (!infoCard) {
    return <ShimmerEffectForResWithFoodDelivery />;
  }
  console.log(infoCard);

  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    avgRating,
    sla,
    totalRatingsString,
    feeDetails,
  } = infoCard?.card?.card?.info;

  return (
    <Container>
      <Navbar />
      <Div>
        <DetailsContainer>
          <SubCon>
            {/* <Title>{name}</Title> */}
            <SubTitle>{name}</SubTitle>
            <Cuisine>{cuisines && cuisines?.slice(0, 1)}</Cuisine>
            <AreaCon>
              <Area>{areaName}</Area>
              <Distance>{sla && sla?.lastMileTravelString}</Distance>
            </AreaCon>
            <DelivaryDetailsCon>
              <DelivaryFee>{feeDetails && feeDetails.message}</DelivaryFee>
            </DelivaryDetailsCon>
          </SubCon>
          <RatingCon>
            <Ratings>{avgRating}</Ratings>
            <Span>{totalRatingsString}</Span>
          </RatingCon>
        </DetailsContainer>
        <LineBar />

        <OfeerSectionCon>
          <OffersSection cost={costForTwoMessage} time={sla} />
        </OfeerSectionCon>
        <LineBar />
        <div>
          {FoodAccrodians &&
            FoodAccrodians.map((item, index) => (
              <div key={index}>
                <FoodAccordian
                  foodItems={item?.card?.card?.itemCards}
                  title={item?.card?.card?.title}
                 
                />
              </div>
            ))}
        </div>
        {
          quantity>=1?(
            <>

<div className=" w-[60%] fixed top-96 mt-28 ">
        <CartPopUp/>
        </div>
            </>
          ):""
        }
        
       
      </Div>
      {/* </> */}
    </Container>
  );
};

const Container = styled.div``;
const DIv = styled.div`
  position: relative;
  overflow-x: hidden;
`;
const Div = styled.div`
  width: 60%;
  margin-top: 8%;
  margin-left: 20%;
`;
const DetailsContainer = styled.div`
  width: 100%;
  margin-bottom: 2%;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.p`
  -webkit-font-smoothing: antialiased;
  font-family: Basis_Grotesque_Pro;
  font-weight: 800;
  font-size: 21px;
  line-height: 28px;
  letter-spacing: -0.4px;
  color: rgba(2, 6, 12, 0.92);
`;
const SubCon = styled.div`
  margin-top: -1%;
`;
const SubTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #282c3f;
  margin-bottom: -2px;
  text-transform: capitalize;
`;
const Cuisine = styled.p`
  font-size: 0.75rem;
  color: #7e808c;
  height: calc(0.93rem + 2px);
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
  white-space: nowrap;
  display: flex;
  gap: 5px;
`;
const AreaCon = styled.div`
  display: flex;
  align-items: center;
  height: 16px;
  gap: 5px;
`;
const Area = styled.p`
  font-size: 0.75rem;
  color: #7e808c;
`;
const Distance = styled.p`
  font-size: 0.75rem;
  color: #7e808c;
`;
const DelivaryDetailsCon = styled.div``;
const DelivaryFee = styled.p`
  font-size: 0.75rem;
  color: #7e808c;
`;
const RatingCon = styled.div`
  margin-top: 5%;
  border: 1px solid #e9e9eb;
  box-shadow: 0 1px 5px #f9f9f9;
  border-radius: 6px;
  text-align: center;
  padding: 6px;
  max-width: 100px;
  max-height: 60px;
  float: right;
`;
const Ratings = styled.p`
  color: #3d9b6d;
  padding-bottom: 6px;
  border-bottom: 1px solid #e9e9eb;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: -1px;
  display: block;
`;
const Span = styled.span`
  font-size: 6px;
  color: #8b8d97;
  font-family: ProximaNovaCondensedRegular, arial, Helvetica Neue, sans-serif;
  font-weight: 600;
`;
const OfeerSectionCon = styled.div`
  /* overflow-x:scroll; */
  margin-top: 10px;
  margin-bottom: 2%;
  /* width: 100%; */
`;
export default React.memo(TopRestaurantCardDetails);
