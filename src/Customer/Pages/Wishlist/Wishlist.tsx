import { useEffect, useState } from "react";
import { wishApi } from "../../../State/configAxios/wishApi";
import WishlistProductCard from "./WishlistProductCard";
import { Wishlist as WishlistInterface } from "../../../Api/models";
import { TokenService } from "../../../State/interceptors/TokenService";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<WishlistInterface>({
    products: new Set(),
  });
  const tokenService = new TokenService();
  const customerId = tokenService.getId();

  const handleFetchWishlist = async () => {
    try {
      const response = await wishApi.getWishlistByUserId({
        params: { userId: customerId },
      });
      const data = response?.data?.data || {};
      setWishlist({
        ...data,
        products: new Set(data.products || []),
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchWishlist();
  }, [customerId]);

  const productsArray = Array.from(wishlist.products || []);
  return (
    <div className="h-[85vh] p-5 lg:p-20">
      {productsArray.length > 0 ? (
        <section>
          <h1>
            <strong>My Wishlist</strong> {productsArray.length} items
          </h1>
          <div className="pt-10 flex flex-wrap gap-5">
            {productsArray.map((product) => (
              <WishlistProductCard
                key={product.id}
                product={product}
                refreshWishList={handleFetchWishlist}
              />
            ))}
          </div>
        </section>
      ) : (
        <div className="h-full flex justify-center items-center flex-col">
          <div className="text-center py-5">
            <h1 className="text-lg font-medium">hay its feels so light!</h1>
            <p className="text-gray-500 text-sm">
              there is nothing in your wishlist, lets add some items
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
