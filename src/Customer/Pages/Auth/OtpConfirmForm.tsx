import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../../State/configAxios/authApi";

interface OtpConfirmFormProps {
  onOtpConfirmed: () => void;
}

const OtpConfirmForm: React.FC<OtpConfirmFormProps> = ({ onOtpConfirmed }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      otp: "",
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      otp: Yup.string().min(6).required("Verification code is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(4, "Password must be at least 4 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await authApi.setUpPassword(values);
        console.error("Registration succeeded", values);
        onOtpConfirmed();
        navigate("/login");
      } catch (error) {
        console.error("Registration failed", error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1 className="text-xl font-bold text-center text-primary-custom pb-5">
        Confirm OTP
      </h1>
      <div className="space-y-5">
        <TextField
          fullWidth
          name="otp"
          label="Verification Code"
          value={formik.values.otp}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.otp && Boolean(formik.errors.otp)}
          helperText={formik.touched.otp && formik.errors.otp}
        />
        <TextField
          fullWidth
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          name="password"
          label="Set Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button fullWidth variant="contained" type="submit" sx={{ py: "11px" }}>
          Confirm OTP
        </Button>
        <Button fullWidth variant="contained" type="submit" sx={{ py: "11px" }}>
          Back To Register
        </Button>
      </div>
    </form>
  );
};

export default OtpConfirmForm;