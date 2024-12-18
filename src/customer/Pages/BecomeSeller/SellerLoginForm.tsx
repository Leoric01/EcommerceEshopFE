import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthControllerApi, SignInRequest } from "../../../Api";
import { TokenService } from "../../../State/interceptors/TokenService";

const SellerLoginForm = () => {
  const authApi = new AuthControllerApi();
  const tokenService = new TokenService();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(4, "Password must be at least 4 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const signInRequest: SignInRequest = {
          email: values.email,
          password: values.password,
        };
        const response = await authApi.login(signInRequest);

        if (response && response.data.data?.token) {
          console.log("Logged in successfully:", response);
          tokenService.setToken(response.data.data?.token);
        } else {
          console.error("Login failed: No token found");
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1 className="text-xl font-bold text-center text-primary-custom pb-5">
        Login as Seller
      </h1>
      <div className="space-y-5">
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
        <div className="space-y-2">
          <p className="font-medium text-sm opacity-45">Enter password</p>
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </div>
        <Button fullWidth variant="contained" type="submit" sx={{ py: "11px" }}>
          Login
        </Button>
      </div>
    </form>
  );
};
export default SellerLoginForm;
