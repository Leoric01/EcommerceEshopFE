import { Box, Button,  Modal } from "@mui/material";
import React, { useState } from "react";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";

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
const Checkout = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-55 min-h-screen">
      <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
        <div className="col-span-2 space-y-3">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Select Address</h1>
            <Button onClick={handleOpen}>Add new Address</Button>
          </div>
          <div className="text-xs font-medium space-y-4">
            <p>Saved Addresses</p>
            <div className="">
              {[1, 1, 1].map((item) => (
                <AddressCard key={item} />
              ))}
            </div>
          </div>
          <div className="py-4 px-5 rounded-md border">
            <Button onClick={handleOpen}>Add new Address</Button>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}><AddressForm/></Box>
      </Modal>
    </div>
  );
};

export default Checkout;
