import React, { useState, useRef, useEffect } from "react";
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

const Product = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [sort, setSort] = useState();
  const [page, setPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null); // Ref to the filter container

  const handleSortChange = (event: any) => {
    setSort(event.target.value);
  };

  const handlePageChange = (value: number) => {
    setPage(value);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  // Function to detect clicks outside the filter section
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

  return (
    <div className="-z-10 mt-10">
      <div className="">
        <h1 className="text-3xl text-center font-bold text-gray-700 pb-5 px-9 uppercase space-x-2">
          CATEGORY lvl3 name
        </h1>
      </div>
      <div className="lg:flex text-primary-custom">
        {/* Filter section for larger screens only */}
        {isLarge && (
          <section className="filter_section hidden lg:block w-[20%]">
            <FilterSection isSmallScreen={!isLarge} />
          </section>
        )}

        <div className="w-full lg:w-[80%] space-y-5">
          <div className="flex justify-between items-center px-9 h-[40px]">
            {/* Toggle filter button for small screens */}
            {!isLarge && (
              <IconButton onClick={toggleFilter}>
                <FilterAlt />
              </IconButton>
            )}

            {/* Conditionally render FilterSection for small screens */}
            {!isLarge && showFilter && (
              <Box
                ref={filterRef} // Reference to the filter section
                className="absolute top-12 left-0 w-full bg-white z-50 p-4 flex flex-row flex-wrap justify-start space-x-4"
                // Added flexbox and spacing to make it inline
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
                <MenuItem value={"price_low"}>Price: Low - High</MenuItem>
                <MenuItem value={"price_high"}>Price: High - Low</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Divider />

          <section className="product_section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center">
            {[1, 1, 1, 1, 1, 1, 1].map((item) => (
              <ProductCard key={item} />
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
