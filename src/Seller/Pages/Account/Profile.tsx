import React, { useState } from "react";
import ProfileFieldCard from "../../../Component/ProfileFieldCard";
import { Avatar, Box, Button, Divider, Modal, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import PersonalDetails from "./PersonalDetails";
import BusinessDetails from "./BusinessDetails";
import BankDetails from "./BankDetails";
import PickupAddress from "./PickupAddress";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const Profile = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = (formName: string) => {
    setOpen(true);
    setSelectedForm(formName);
  };
  const [selectedForm, setSelectedForm] = useState("personalDetails");
  const renderSelectedForm = () => {
    switch (selectedForm) {
      case "businessDetails":
        return <BusinessDetails />;
      case "accountDetails":
        return <BankDetails />;
      case "pickupAddress":
        return <PickupAddress />;
      default:
        return <PersonalDetails />;
    }
  };
  return (
    <div className="lg:pr-20 lg:pl-15 space-y-10 pt-3 pb-20 ">
      <div className="w-full lg:w-[70%]">
        <div className="flex align-top pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Personal Details</h1>
          <div className="">
            <Button
              onClick={() => handleOpen("peronalDetails")}
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
          <div className="mt-10">
            <ProfileFieldCard keys="Seller's Name" value={"Nick"} />
            <Divider />
            <ProfileFieldCard keys="Email" value={"a@a"} />
            <Divider />
            <ProfileFieldCard keys="Mobile" value={"123456789"} />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Business Details</h1>
          <div className="">
            <Button
              onClick={() => handleOpen("businessDetails")}
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
          <ProfileFieldCard keys="Business Name/Brand" value={"CoolCompany1"} />
          <Divider />
          <ProfileFieldCard keys="VAT" value={"465465746798"} />
          <Divider />
          <ProfileFieldCard keys="Account Status" value={"PENDING"} />
        </div>
      </div>
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Pickup Address</h1>
          <div className="">
            <Button
              onClick={() => handleOpen("pickupAddress")}
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
          <ProfileFieldCard keys="Name" value={"John Doe"} />
          <Divider />
          <ProfileFieldCard keys="Mobile" value={"+1 234 567 890"} />
          <Divider />
          <ProfileFieldCard keys="Pincode" value={"123456"} />
          <Divider />
          <ProfileFieldCard keys="Address" value={"1234 Elm St"} />
          <Divider />
          <ProfileFieldCard keys="Locality" value={"Downtown"} />
          <Divider />
          <ProfileFieldCard keys="City" value={"New York"} />
          <Divider />
          <ProfileFieldCard keys="State" value={"NY"} />
        </div>
      </div>
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Bank Details</h1>
          <div className="">
            <Button
              onClick={() => handleOpen("accountDetails")}
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
          <ProfileFieldCard keys="Account Holder Name" value={"Name"} />
          <Divider />
          <ProfileFieldCard keys="Account Number" value={"465465746798"} />
          <Divider />
          <ProfileFieldCard keys="IBAN" value={"IBAN48946465165"} />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
          {renderSelectedForm()}
        </Box>
      </Modal>
    </div>
  );
};

export default Profile;
