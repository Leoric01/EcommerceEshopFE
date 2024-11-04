import { Box, Button, Divider, FormControlLabel, Modal } from "@mui/material";
import { useState } from "react";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import PricingCard from "../Cart/PricingCard";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Address from "../Account/Address";
import SelectableAddress from "./SelectableAddress";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const paymentGateWayList = [
  {
    value: "STRIPE",
    image:
      "https://www.logo.wine/a/logo/Stripe_(company)/Stripe_(company)-Logo.wine.svg",
    label: "",
  },
  {
    value: "PAYPAL",
    image:
      "https://www.urbantool.com/wp-content/uploads/2016/12/paypal-logo-png.png",
    label: "",
  },
];

const Checkout = () => {
  const [open, setOpen] = useState(false);
  const [paymentGateWay, setPaymentGateWay] = useState("STRIPE");
  const [selectedAddressId, setSelectedAddressId] = useState<number | null>(
    null
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePaymentChange = (event: any) => {
    setPaymentGateWay(event.target.value);
  };

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
              <SelectableAddress setSelectedAddressId={setSelectedAddressId} />
            </div>
          </div>
          <div className="py-4 px-5 rounded-md border">
            <Button onClick={handleOpen}>Add new Address</Button>
          </div>
        </div>
        <div className="">
          <div className="border rounded-md pl-4 pt-4 pb-4 pr-0 space-y-3">
            <div>
              <h1 className="text-primary-custom font-medium pb-2 text-center">
                Choose Payment Gateway
              </h1>
              <div className="pr-3">
                <Divider />
              </div>
              <h1 className="text-red font-medium pb-2 text-center">
                ONLY STRIPE ACTUALLY IMPLEMENTED IN BACKEND, ITS HARDCODED TO
                ALLWAYS GO STRIPE
              </h1>
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              className="flex justify-evenly pr-0"
              onChange={handlePaymentChange}
              value={paymentGateWay}
            >
              {paymentGateWayList.map((item) => (
                <FormControlLabel
                  className="border w-[40%] rounded-md flex justify-center"
                  value={item.value}
                  control={<Radio />}
                  label={
                    <img
                      className={`${
                        item.value == "PAYPAL" ? "w-14" : ""
                      } object-cover`}
                      src={item.image}
                      alt={item.label}
                    />
                  }
                />
              ))}
            </RadioGroup>
          </div>
          <div className="border rounded-md mt-5 gap-5">
            <PricingCard selectedAddressId={selectedAddressId ?? -1} />
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <AddressForm />
        </Box>
      </Modal>
    </div>
  );
};

export default Checkout;
