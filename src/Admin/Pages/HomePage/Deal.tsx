import { Button } from "@mui/material";
import { useState } from "react";
import DealTable from "./DealTable";
import DealCategoryTable from "./DealCategoryTable";
import CreateDealForm from "./CreateDealForm";

const tabs = ["Deals", "Category", "Create Deal"];

const Deal = () => {
  const [activeDeal, setActiveDeal] = useState("Deals");
  return (
    <div>
      <div className="flex gap-4">
        {tabs.map((item) => (
          <Button
            onClick={() => setActiveDeal(item)}
            variant={activeDeal == item ? "contained" : "outlined"}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="">
        {activeDeal == "Deals" ? (
          <DealTable />
        ) : activeDeal == "Category" ? (
          <DealCategoryTable />
        ) : (
          <div className="flex flex-col justify-start items-start h-[70vh]">
            <CreateDealForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Deal;
