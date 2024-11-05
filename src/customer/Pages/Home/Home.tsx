import React, { useEffect, useState } from "react";
import CategoryGrid from "./CategoryGrid/CategoryGrid";
import Deal from "./Deal/Deal";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import { Backdrop, Button, CircularProgress } from "@mui/material";
import { Storefront } from "@mui/icons-material";
import { customerApi } from "../../../State/configAxios/customerApi";
import { homeCategories } from "../../../Data/HomeCategories";
import { useNavigate } from "react-router-dom";
import TopBrand from "./TopBrands/Grid";
import { Home as HomeInterface } from "../../../Api/models";
import HomeCategory from "./HomeCategory/HomeCategory";
import DealSlider from "./Deal/Deal";
import ElectricCategory from "./ElectricCategory/ElectricCategory";

const Home = () => {
  const [showChatBot, setShowChatBot] = useState(false);
  const [homePage, setHomePage] = useState<HomeInterface>({});
  const navigate = useNavigate();

  const handleCreateHomePage = async () => {
    try {
      const response = await customerApi.createHomeCategories(homeCategories);
      setHomePage(response.data);
      console.log("Response data: ", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFetchHomePage = async () => {
    try {
      const response = await customerApi.getHomePageData();
      setHomePage(response.data);
      console.log("Response data: ", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowChatBot = () => {
    setShowChatBot(!showChatBot);
  };

  const handleCloseChatBot = () => {
    setShowChatBot(false);
  };

  const becomeSellerClick = () => {
    navigate("/become-seller");
  };
  useEffect(() => {
    handleCreateHomePage();
  }, []);
  return (
    <>
      {true ? (
        <div className="space-y-5 lg:space-y-10 relative">
          {homePage.electricCategories && <ElectricCategory homePage={homePage} />}
          {homePage?.grid && (
            <section>
              <TopBrand homePage={homePage} />
            </section>
          )}
          {homePage?.deals && (
            <section className="pt-10">
              <h1 className="text-center text-lg lg:text-4xl font-bold text-[#00927c] pb-5 lg:pb-10">Today's Deals</h1>
              <DealSlider homePage={homePage} />
            </section>
          )}
          {homePage?.shopByCategories && (
            <section className="flex flex-col justify-center items-center py-20 px-5 lg:px-20">
              <h1 className="text-lg lg:text-4xl font-bold text-[#00927c] pb-5 lg:pb-20">SHOP BY CATEGORY</h1>
              <HomeCategory homePage={homePage} />
            </section>
          )}
          <section className="lg:px-20 relative h-[200px] lg:h-[450px] object-cover">
            <img
              className="w-full h-full object-contain mb-5 pb-6"
              src={"https://i0.wp.com/belleabouttown.com/wp-content/uploads/success.jpg?resize=939%2C550"}
              alt="Seller Banner"
            />
            <div className="absolute top-1/2 left-4 lg:left-[15rem] transform -translate-y-1/2 font-semibold lg:text-4xl space-y-3">
              <h1>Sell Your Product</h1>
              <p className="text-lg md:text-2xl">
                With <strong className="logo text-3xl md:text-5xl pl-2">Shop Alley</strong>
              </p>

              <div className="pt-6 flex justify-center">
                <Button onClick={becomeSellerClick} startIcon={<Storefront />} variant="contained">
                  Become Seller
                </Button>
              </div>
            </div>
          </section>

          {/* Chatbot section - uncomment when needed */}
          {/* <section className="fixed bottom-10 right-10">
            {showChatBot ? (
              <ChatBot handleClose={handleCloseChatBot} />
            ) : (
              <Button
                onClick={handleShowChatBot}
                sx={{ borderRadius: "2rem" }}
                variant="contained"
                className="h-16 w-16 flex justify-center items-center rounded-full"
              >
                <ChatBubble sx={{ color: "white", fontSize: "2rem" }} />
              </Button>
            )}
          </section> */}
        </div>
      ) : (
        <Backdrop open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};

export default Home;
