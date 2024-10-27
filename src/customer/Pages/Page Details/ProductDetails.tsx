import { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import { teal } from "@mui/material/colors";
import { Button, Divider } from "@mui/material";
import {
  AddShoppingCart,
  FavoriteBorder,
  LocalShipping,
  Remove,
  Shield,
  Wallet,
  WorkspacePremium,
} from "@mui/icons-material";
import SimilarProduct from "./SimilarProduct";
import ReviewCard from "../Review/ReviewCard";
import { useParams } from "react-router-dom";
import { productApi } from "../../../State/configAxios/productApi";
import { Product } from "../../../Api";
import { cartApi } from "../../../State/configAxios/cartApi";
import { wishApi } from "../../../State/configAxios/wishApi";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | undefined>();
  const [activeImage, setActiveImage] = useState(0);

  const fetchProductById = async () => {
    try {
      const fetchedProduct = await productApi.getProduct(Number(productId));
      const shavedDataProduct = fetchedProduct?.data?.data;

      if (
        fetchedProduct &&
        fetchedProduct.data &&
        fetchedProduct.data.data &&
        typeof shavedDataProduct === "object"
      ) {
        setProduct(shavedDataProduct);
        console.log("Product details fetched:", shavedDataProduct);
      } else {
        console.warn("Product data is unavailable or malformed");
      }
    } catch (err) {
      console.error("Failed to fetch product data by ID:", err);
    }
  };

  const handleAddingProductToWishlist = async (productId: number) => {
    try {
      const response = await wishApi.addProductToWishList(productId);
      console.log("Product added to wishlist:", response);
    } catch (err) {
      console.error("Failed to add product to wishlist:", err);
    }
  };

  const handleAddingProductToCart = async (product: Product) => {
    try {
      const response = await cartApi.addItemToCart({
        quantity,
        productId: product?.id,
      });
      console.log("Product added to cart:", response);
    } catch (err) {
      console.error("Failed to add product to cart:", err);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProductById();
    }
  }, [productId]);

  const handleActiveImage = (value: number) => () => {
    setActiveImage(value);
  };

  return (
    <div className="px-5 lg:px-12 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {product && product?.image && product?.image?.length > 0 ? (
              product.image.map((item, index) => (
                <img
                  onClick={handleActiveImage(index)}
                  key={index}
                  className="lg:w-full w-[50px] cursor-pointer rounded-md"
                  src={item}
                  alt={`Product Image ${index + 1}`}
                />
              ))
            ) : (
              <p>No images available</p>
            )}
          </div>
          <div className="w-full lg:w-[85%] lg:max-w-[500px] ">
            <img
              className="w-full rounded-md"
              src={product?.image?.[activeImage]}
              alt=""
            />
          </div>
        </section>
        <section className="justify-items-start w-full">
          <h1 className="font-bold text-lg text-primary-custom">
            {product?.seller?.businessDetails?.businessName || "Business name"}
          </h1>
          <p className="text-gray-500 font-semibold">{product?.title}</p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center">
              <span>{"rating"}</span>
              <StarIcon sx={{ color: "#008080", fontSize: "23px" }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <span>{"ratingCount"} Ratings</span>
          </div>
          <div className="price flex items-center gap-3 mt-5 text-2xl">
            <span className="font-semibold text-gray-800">
              {product?.sellingPrice} €
            </span>
            <span className="line-through text-gray-400">
              {product?.mrpPrice} €
            </span>
            <span className="text-primary-custom font-semibold">
              {product?.discountPercentage}%
            </span>
          </div>
          <p>Inclusive of all taxes. Free Shipping above 200</p>
          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-4">
              <Shield sx={{ color: "#008080" }} />
              <p>Authentic Quality Assured</p>
            </div>
            <div className="flex items-center gap-4">
              <WorkspacePremium sx={{ color: "#008080" }} />
              <p>100% money back guarantee</p>
            </div>
            <div className="flex items-center gap-4">
              <LocalShipping sx={{ color: "#008080" }} />
              <p>Free Shipping & Returns</p>
            </div>
            <div className="flex items-center gap-4">
              <Wallet sx={{ color: "#008080" }} />
              <p>Pay on delivery might be available</p>
            </div>
          </div>
          <div className="mt-7 space-y-2">
            <h1>QUANTITY</h1>
            <div className="flex items-center gap-2 w-[140px] justify-between">
              <Button
                disabled={quantity <= 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <Remove />
              </Button>
              <span>{quantity}</span>
              <Button onClick={() => setQuantity(quantity + 1)}>
                <AddIcon />
              </Button>
            </div>
          </div>
          <div className="mt-12 flex items-center w-full gap-5">
            <Button
              fullWidth
              sx={{ py: "1rem" }}
              startIcon={<AddShoppingCart />}
              variant="contained"
              onClick={() => product && handleAddingProductToCart(product)}
            >
              Add To Bag
            </Button>
            <Button
              fullWidth
              sx={{ py: "1rem" }}
              startIcon={<FavoriteBorder />}
              variant="outlined"
              onClick={() =>
                product?.id && handleAddingProductToWishlist(product.id)
              }
            >
              Wishlist
            </Button>
          </div>
          <div className="mt-5">
            <p className="text-sm text-left">{product?.description}</p>
          </div>
          <div className="mt-6 w-full">
            <ReviewCard />
            <Divider />
          </div>
        </section>
      </div>
      <div className="mt-20">
        <h1 className="text-lg font-bold">Similar Products</h1>
        <div className="pt-5">
          <SimilarProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;