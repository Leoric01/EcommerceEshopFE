import React from "react";
import ProfileFieldCard from "../../../Component/ProfileFieldCard";
import Divider from "@mui/material/Divider";

const UserDetails = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">
            Personal Details
          </h1>
        </div>
        <div className="">
          <ProfileFieldCard keys="Mobile" value={"123456789"} />
          <Divider/>
          <ProfileFieldCard keys="Email" value={"a@a"} />
          <Divider/>
          <ProfileFieldCard keys="Name" value={"Nick"} />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
