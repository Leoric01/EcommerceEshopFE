import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OtpConfirmForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      otp: "",
      password: "",
      email: "",
    },
    onSubmit: (values) => {
      // Handle OTP confirmation
      console.log("OTP Confirmed:", values);
      navigate("/login/confirm-otp");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        name="otp"
        label="Verification Code"
        value={formik.values.otp}
        onChange={formik.handleChange}
      />
      <TextField
        fullWidth
        name="Email"
        label="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <TextField
        fullWidth
        name="password"
        label="Set Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <Button type="submit" variant="contained">
        Confirm OTP
      </Button>
    </form>
  );
};

export default OtpConfirmForm;
