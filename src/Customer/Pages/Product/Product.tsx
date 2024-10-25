import { useState, useRef, useEffect } from "react";
import FilterSection from "./FilterSection";
import ProductCard from "./ProductCard";
import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FilterAlt } from "@mui/icons-material";
import { productApi } from "../../../State/confaxios/productApi";
import { useParams, useSearchParams } from "react-router-dom";
interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

const Product = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const [productsListAll, setProductsListAll] = useState<any>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  // const { categoryId } = useParams();

  const fetchAllProducts = async () => {
    try {
      const response = await productApi.getAllProducts();
      const actualProducts = response?.data?.data?.content || [];
      console.log("Actual products", actualProducts);

      setProductsListAll(actualProducts);
    } catch (err) {
      console.error("Failed to fetch user profile:", err);
    }
  };

  const handleSortChange = (event: any) => {
    setSort(event.target.value);
  };

  const handlePageChange = (value: number) => {
    setPage(value);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilter(false);
      }
    };

    if (showFilter) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilter]);

  useEffect(() => {
    const priceParam = searchParams.get("price");

    let minPrice: number | null = null;
    let maxPrice: number | null = null;

    if (priceParam) {
      const priceParts = priceParam.split("-");

      if (priceParts.length === 2) {
        minPrice = parseInt(priceParts[0], 10);
        maxPrice = parseInt(priceParts[1], 10);
      } else if (priceParts.length === 1) {
        const priceValue = parseInt(priceParts[0], 10);
        if (priceValue <= 500) {
          maxPrice = priceValue;
        } else if (priceValue >= 10001) {
          minPrice = priceValue;
          maxPrice = null;
        }
      }
    }
    console.log({ minPrice, maxPrice });
  }, [searchParams]);

  return (
    <div className="-z-10 mt-10">
      <div className="">
        <h1 className="text-3xl text-center font-bold text-gray-700 pb-5 px-9 uppercase space-x-2">
          {productsListAll && productsListAll.length > 0
            ? productsListAll[0].category?.categoryId
            : "Uncategorized"}
        </h1>
      </div>
      <div className="lg:flex text-primary-custom">
        {isLarge && (
          <section className="filter_section hidden lg:block w-[20%]">
            <FilterSection isSmallScreen={!isLarge} />
          </section>
        )}

        <div className="w-full lg:w-[80%] space-y-5">
          <div className="flex justify-between items-center px-9 h-[40px]">
            {!isLarge && (
              <IconButton onClick={toggleFilter}>
                <FilterAlt />
              </IconButton>
            )}

            {!isLarge && showFilter && (
              <Box
                ref={filterRef}
                className="absolute top-12 left-0 w-full bg-white z-50 p-4 flex flex-row flex-wrap justify-start space-x-4"
              >
                <div className="justify-between">
                  <FilterSection isSmallScreen={!isLarge} />
                </div>
              </Box>
            )}

            <FormControl
              size="small"
              sx={{ width: "200px" }}
              className="text-primary-custom"
            >
              <InputLabel id="sort-select-input">Sort</InputLabel>
              <Select
                labelId="sort-select-input"
                id="sort-select-input"
                value={sort}
                label="Sort"
                onChange={handleSortChange}
              >
                <MenuItem value="price_low">Price: Low - High</MenuItem>
                <MenuItem value="price_high">Price: High - Low</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Divider />

          <section className="product_section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center">
            {[1, 1, 1, 1, 1, 1, 1].map((item, index) => (
              <ProductCard key={index} />
            ))}
          </section>

          <div className="flex ml-8 justify-start py-5">
            <Pagination
              onChange={(e, value) => handlePageChange(value)}
              count={10}
              variant="outlined"
              color="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
