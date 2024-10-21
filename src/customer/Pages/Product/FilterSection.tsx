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
import React from "react";
import { Colors } from "../../../Data/filter/Color";

const FilterSection = () => {
  return (
    <div className="-z-50 space-y-5 bg-white">
      <div className="flex items-center justify-between h-[40px] px-9 lg:border-r">
        <p className="text-lg font-semibold">Filters</p>
        <Button size="small" className="text-teal-600 cursor-pointer font-bold">
          clear all
        </Button>
      </div>
      <Divider />
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
          <RadioGroup aria-labelledby="color" defaultValue="" name="color">
            {Colors.map((item) => (
              <FormControlLabel
                value={item.hex}
                control={<Radio />}
                label={
                  <div className="flex items-center gap-2">
                    <p>{item.name}</p>
                    <span
                      style={{ backgroundColor: item.hex }}
                      className={`h-5 w-5 rounded-full inline-block ${
                        item.name === "White" ? "border border-gray-400" : ""
                      }`}
                    ></span>
                  </div>
                }
              />
            ))}
          </RadioGroup>
        </FormControl>
      </section>
    </div>
  );
};

export default FilterSection;
