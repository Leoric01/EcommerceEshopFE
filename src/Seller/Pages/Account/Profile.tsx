import React from "react";
import ProfileFieldCard from "../../../Component/ProfileFieldCard";
import { Avatar, Button, Divider } from "@mui/material";
import { Edit } from "@mui/icons-material";

const Profile = () => {
  return (
    <div className="lg:p-20 space-y-20 pt-3 pb-20 ">
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Personal Details</h1>
          <div className="">
            <Button
              variant="contained"
              size="small"
              sx={{ borderRadius: "2.9rem" }}
              className="w-16 h-16"
            >
              <Edit />
            </Button>
          </div>
        </div>
        <div className="">
          <Avatar
            sx={{ width: "10rem", height: "10rem" }}
            src="https://img.freepik.com/premium-photo/logotype-goat-gaming-channel-marvel-style-goat_643382-1192.jpg?w=826"
          />
          <div className="">
            <ProfileFieldCard keys="Seller's Name" value={"Nick"} />
            <Divider />
            <ProfileFieldCard keys="Email" value={"a@a"} />
            <Divider />
            <ProfileFieldCard keys="Mobile" value={"123456789"} />
          </div>
        </div>
        <div className="">
          <Avatar
            sx={{ width: "10rem", height: "10rem" }}
            src="https://img.freepik.com/premium-photo/logotype-goat-gaming-channel-marvel-style-goat_643382-1192.jpg?w=826"
          />
          <div className="">
            <ProfileFieldCard keys="Business Name/Brand" value={"CoolCompany1"} />
            <Divider />
            <ProfileFieldCard keys="VAT" value={"VAT CODE, GOTTA REFACTOR"} />
            <Divider />
            <ProfileFieldCard keys="Mobile" value={"123456789"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
