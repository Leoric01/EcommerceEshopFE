import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";

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
    },
    onSubmit: async (values) => {
      try {
        // Assuming registration API call here
        // After successful registration, call the success handler
        onRegisterSuccess();
      } catch (error) {
        console.error("Registration failed", error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        name="firstName"
        label="First Name"
        value={formik.values.firstName}
        onChange={formik.handleChange}
      />
      <TextField
        fullWidth
        name="lastName"
        label="Last Name"
        value={formik.values.lastName}
        onChange={formik.handleChange}
      />
      <TextField
        fullWidth
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <Button type="submit" variant="contained">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
