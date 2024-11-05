import { useEffect, useState } from "react";
import HomeCategoryTable from "./HomeCategoryTable";
import { Home as HomeInterface } from "../../../Api/models";
import { customerApi } from "../../../State/configAxios/customerApi";
import { homeCategories } from "../../../Data/HomeCategories";

const GridTable = () => {
  const [homePage, setHomePage] = useState<HomeInterface>({});
  const handleCreateHomePage = async () => {
    try {
      const response = await customerApi.createHomeCategories(homeCategories);
      setHomePage(response.data);
      console.log("Response data: ", response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleCreateHomePage();
  }, []);
  return (
    <div>
      <HomeCategoryTable categories={homePage.grid || []} />
    </div>
  );
};

export default GridTable;
