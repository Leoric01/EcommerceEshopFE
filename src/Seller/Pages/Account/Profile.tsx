import React, { useEffect, useState } from "react";
import ProfileFieldCard from "../../../Component/ProfileFieldCard";
import { Avatar, Box, Button, Divider, Modal, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";
import PersonalDetails from "./PersonalDetails";
import BusinessDetails from "./BusinessDetails";
import BankDetails from "./BankDetails";
import PickupAddress from "./PickupAddress";
import { sellerApi } from "../../../State/configAxios/sellerApi";
import { TokenService } from "../../../State/interceptors/TokenService";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [selectedForm, setSelectedForm] = useState("personalDetails");
  const [sellerProfile, setSellerProfile] = useState<any>(null);
  const tokenService = new TokenService();
  const role = tokenService.getUserRoles();
  const sellerId = tokenService.getId();

  const handleOpen = (formName: string) => {
    setOpen(true);
    setSelectedForm(formName);
  };

  const fetchSellerById = async (id: number) => {
    try {
      const sellerResponse = await sellerApi.getSellerById(id);
      const fetchedSellerProfile = sellerResponse.data?.data;
      setSellerProfile(fetchedSellerProfile);
      console.log("Seller fetched successfully:", fetchedSellerProfile);
    } catch (error) {
      console.error("Failed to fetch seller by ID:", error);
    }
  };

  useEffect(() => {
    if (sellerId && sellerId !== undefined) {
      fetchSellerById(sellerId);
    } else {
      navigate("/login");
    }
  }, [sellerId]);

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
            <ProfileFieldCard
              keys={"Seller's Name"}
              value={sellerProfile?.name || "No Data"}
            />
            <Divider />
            <ProfileFieldCard
              keys={"Email"}
              value={sellerProfile?.email || "No Data"}
            />
            <Divider />
            <ProfileFieldCard
              keys={"Mobile"}
              value={sellerProfile?.mobile || "No Data"}
            />
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
          <ProfileFieldCard
            keys={"Business Name/Brand"}
            value={sellerProfile?.businessDetails?.businessName || "No Data"}
          />
          <Divider />
          <ProfileFieldCard
            keys={"VAT"}
            value={sellerProfile?.vat || "No Data"}
          />
          <Divider />
          <ProfileFieldCard
            keys={"Account Status"}
            value={sellerProfile?.accountStatus || "No Data"}
          />
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
          <ProfileFieldCard
            keys={"Name"}
            value={sellerProfile?.pickupAddress?.name || "No Data"}
          />
          <Divider />
          <ProfileFieldCard
            keys={"Mobile"}
            value={sellerProfile?.pickupAddress?.mobile || "No Data"}
          />
          <Divider />
          <ProfileFieldCard
            keys={"Zip Code"}
            value={sellerProfile?.pickupAddress?.zip || "No Data"}
          />
          <Divider />
          <ProfileFieldCard
            keys={"Street"}
            value={sellerProfile?.pickupAddress?.street || "No Data"}
          />
          <Divider />
          <ProfileFieldCard
            keys={"Locality"}
            value={sellerProfile?.pickupAddress?.locality || "No Data"}
          />
          <Divider />
          <ProfileFieldCard
            keys={"City"}
            value={sellerProfile?.pickupAddress?.city || "No Data"}
          />
          <Divider />
          <ProfileFieldCard
            keys={"Country"}
            value={sellerProfile?.pickupAddress?.country || "No Data"}
          />
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
          <ProfileFieldCard
            keys={"Account Holder Name"}
            value={sellerProfile?.bankDetails?.accountHolderName || "No Data"}
          />
          <Divider />
          <ProfileFieldCard
            keys={"Account Number"}
            value={sellerProfile?.bankDetails?.accountNumber || "No Data"}
          />
          <Divider />
          <ProfileFieldCard
            keys={"IBAN"}
            value={sellerProfile?.bankDetails?.iban || "No Data"}
          />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{renderSelectedForm()}</Box>
      </Modal>
    </div>
  );
};

export default Profile;
