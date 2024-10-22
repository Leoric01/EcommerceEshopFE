import { Button } from "@mui/material";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import React, { useState } from "react";
import BecomeSellerFormStep1 from "./SellerFormSteps/BecomeSellerFormStep1";
import { useFormik } from "formik";
import BecomeSellerFormStep2 from "./SellerFormSteps/BecomeSellerFormStep2";
import BecomeSellerFormStep3 from "./SellerFormSteps/BecomeSellerFormStep3";
import BecomeSellerFormStep4 from "./SellerFormSteps/BecomeSellerFormStep4";

const steps = [
  "Tax Details & Mobile",
  "Pickup Address",
  "Bank Details",
  "Supplier Details",
];

const SellerAccountForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const formik = useFormik({
    initialValues: {
      mobile: "",
      otp: "",
      vat: "",
      pickupAddress: {
        name: "",
        mobile: "",
        pinCode: "",
        address: "",
        locality: "",
        city: "",
        state: "",
      },
      bankDetails: {
        accountNumber: "",
        isfcCode: "",
        accountHolderName: "",
      },
      sellerName: "",
      email: "",
      businessDetails: {
        businessName: "",
        businessEmail: "",
        businessMobile: "",
        logo: "",
        banner: "",
        businessAddress: "",
      },
      password: "",
    },
    validationSchema: {},
    onSubmit: (values) => {
      console.log(values, "formik submited");
    },
  });

  const handleStep = (value: number) => () => {
    if (activeStep + value >= 0 && activeStep + value < steps.length) {
      setActiveStep(activeStep + value);
    }
  };

  const handleCreateAccount = () => {
    console.log("Create account");
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <section className="mt-20 space-y-10">
        <div>
          {activeStep === 0 ? (
            <BecomeSellerFormStep1 formik={formik} />
          ) : activeStep === 1 ? (
            <BecomeSellerFormStep2 formik={formik} />
          ) : activeStep === 2 ? (
            <BecomeSellerFormStep3 formik={formik} />
          ) : activeStep === 3 ? (
            <BecomeSellerFormStep4 formik={formik} />
          ) : (
            ""
          )}
        </div>
        <div className="flex items-center justify-between">
          <Button
            onClick={handleStep(-1)}
            variant="contained"
            disabled={activeStep === 0}
          >
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button
              onClick={handleCreateAccount}
              variant="contained"
              color="primary"
            >
              Create Account
            </Button>
          ) : (
            <Button onClick={handleStep(1)} variant="contained" color="primary">
              Continue
            </Button>
          )}
        </div>
      </section>
    </div>
  );
};

export default SellerAccountForm;
