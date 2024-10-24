import DrawerList from "../../../Component/DrawerList";
import { menu, menu2 } from "../../../Data/endpoints/SellerNavbar";

const SellerDrawerList = ({ toggleDrawer }: { toggleDrawer: any }) => {
  return (
    <div>
      <DrawerList menu={menu} toggleDrawer={toggleDrawer} menu2={[]} />

      <div className="my-4 lg:my-8 md:my-6 sm:my-4 xs:my-2"></div>

      <DrawerList menu={menu2} toggleDrawer={toggleDrawer} menu2={[]} />
    </div>
  );
};

export default SellerDrawerList;