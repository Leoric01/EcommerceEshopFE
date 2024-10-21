import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import { Colors } from "../../../Data/filter/Color";
import { Price } from "../../../Data/filter/Price";
import { Discount } from "../../../Data/filter/Discount";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSection = () => {
  const [expandColor, setExpandColor] = useState(false);
  const [expandPrice, setExpandPrice] = useState(false);
  const [expandDiscount, setExpandDiscount] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedDiscount, setSelectedDiscount] = useState("");

  const handleColorFilterToggle = () => {
    setExpandColor(!expandColor);
  };

  const handlePriceFilterToggle = () => {
    setExpandPrice(!expandPrice);
  };

  const handleDiscountFilterToggle = () => {
    setExpandDiscount(!expandDiscount);
  };

  const updateFilterParams = (e: any) => {
    const { value, name } = e.target;
    if (name === "color") {
      setSelectedColor(value);
    } else if (name === "price") {
      setSelectedPrice(value);
    } else if (name === "discount") {
      setSelectedDiscount(value);
    }
    if (value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }
    setSearchParams(searchParams);
  };

  const clearAllFilters = () => {
    const newSearchParams = new URLSearchParams();
    setSearchParams(newSearchParams);
    setSelectedColor("");
    setSelectedPrice("");
    setSelectedDiscount("");
  };

  return (
    <div className="-z-50 space-y-5 bg-white">
      <div className="flex items-center justify-between h-[40px] px-9 lg:border-r">
        <p className="text-lg font-semibold">Filters</p>
        <Button
          onClick={clearAllFilters}
          size="small"
          className="text-teal-600 cursor-pointer font-bold"
        >
          clear all
        </Button>
      </div>
      <Divider />
      <div className="px-9 space-y-6 text-left">
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: teal[500],
                pb: "14px",
              }}
              className="text-2xl font-semibold"
              id="color"
            >
              Color
            </FormLabel>
            <RadioGroup
              aria-labelledby="color"
              name="color"
              value={selectedColor}
              onChange={updateFilterParams}
            >
              {Colors.slice(0, expandColor ? Colors.length : 5).map((item) => (
                <FormControlLabel
                  key={item.name}
                  value={item.name}
                  control={<Radio />}
                  label={
                    <div className="flex items-center gap-2">
                      <p>{item.name}</p>
                      <span
                        style={{ backgroundColor: item.hex }}
                        className={`h-5 w-5 rounded-full inline-block ${
                          item.name === "White"
                            ? "border border-gray-400"
                            : "border-none"
                        }`}
                      ></span>
                    </div>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
          <div>
            <button
              className="text-primary-custom cursor-pointer hover:text-teal-900 flex items-center"
              onClick={handleColorFilterToggle}
            >
              {expandColor ? "Hide " : `+${Colors.length - 5} more`}
            </button>
          </div>
        </section>
        <Divider />
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: teal[600],
                pb: "14px",
              }}
              className="text-2xl font-semibold"
              id="price"
            >
              Price
            </FormLabel>
            <RadioGroup
              name="price"
              value={selectedPrice}
              onChange={updateFilterParams}
              aria-labelledby="price"
            >
              {Price.slice(0, expandPrice ? Price.length : 5).map((item) => (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={<Radio size="small" />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <div>
            <button
              className="text-primary-custom cursor-pointer hover:text-teal-900 flex items-center"
              onClick={handlePriceFilterToggle}
            >
              {expandPrice ? "Hide " : `+${Price.length - 5} more`}
            </button>
          </div>
        </section>
        <Divider />
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: teal[600],
                pb: "14px",
              }}
              className="text-2xl font-semibold"
              id="discount"
            >
              Discount
            </FormLabel>
            <RadioGroup
              name="discount"
              value={selectedDiscount}
              onChange={updateFilterParams}
              aria-labelledby="discount"
            >
              {Discount.slice(0, expandDiscount ? Discount.length : 5).map(
                (item) => (
                  <FormControlLabel
                    key={item.value}
                    value={item.value}
                    control={<Radio size="small" />}
                    label={item.name}
                  />
                )
              )}
            </RadioGroup>
          </FormControl>
          <div>
            <button
              className="text-primary-custom cursor-pointer hover:text-teal-900 flex items-center"
              onClick={handleDiscountFilterToggle}
            >
              {expandDiscount ? "Hide " : `+${Discount.length - 5} more`}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
export default FilterSection;
