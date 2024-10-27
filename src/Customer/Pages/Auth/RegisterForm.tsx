import { useFormik } from "formik";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { authApi } from "../../../State/configAxios/authApi";
import { useNavigate } from "react-router-dom";
const RegisterForm = ({
  onRegisterSuccess,
}: {
  onRegisterSuccess: () => void;
}) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      account: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await authApi.createUserHandler(values);
        onRegisterSuccess();
      } catch (error) {
        console.error("Registration failed", error);
      }
    },
  });
  const navigate = useNavigate();

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1 className="text-xl font-bold text-center text-primary-custom pb-5">
        Register
      </h1>
      <div className="space-y-5">
        <TextField
          fullWidth
          name="firstName"
          label="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          fullWidth
          name="lastName"
          label="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
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

        <FormControl
          fullWidth
          required
          error={formik.touched.account && Boolean(formik.errors.account)}
        >
          <InputLabel id="account-select-label">Account</InputLabel>
          <Select
            labelId="account-select-label"
            name="account"
            value={formik.values.account}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <MenuItem value="seller">Seller</MenuItem>
            <MenuItem value="user">User</MenuItem>
          </Select>
          {formik.touched.account && formik.errors.account ? (
            <FormHelperText>{formik.errors.account}</FormHelperText>
          ) : null}
        </FormControl>

        <Button fullWidth variant="contained" type="submit" sx={{ py: "11px" }}>
          Register
        </Button>
        <Button
          onClick={() => navigate("/login/confirm-otp")}
          fullWidth
          variant="contained"
          type="submit"
          sx={{ py: "11px" }}
        >
          Verification Code
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;