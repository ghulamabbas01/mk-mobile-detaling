import React from "react";
// material
import { Container, Grid, TextField, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ContactCard from "./ContactCards";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import toast from "react-hot-toast";
const TextFieldStyle = styled(TextField)({
  background: "rgba(145, 158, 171, 0.12)",
  borderRadius: "8px 8px 0px 0px",
  "& .MuiInputBase-root": {
    "&:hover": {
      "&:before": {
        borderBottom: `1px solid #fff !important`,
      },
    },
    "&:before": {
      borderBottom: `1px solid #fff`,
    },
  },
  input: {
    color: "#fff",
    padding: "16px !important",
    "::placeholder ": {
      color: "#fff",
      opacity: "1",
    },
  },
  textarea: {
    color: "#fff",

    "::placeholder ": {
      color: "#fff",
      opacity: "1",
    },
  },
});
export default function FormComponent() {
  const [loading, setLoading] = React.useState(false);
  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email a valid email adress.")
      .required("Email is Required."),
    firstName: Yup.string().required("First name is Required."),
    lastName: Yup.string().required("Last name is Required."),
    phone: Yup.number().required("Phone Number is Required."),
    address: Yup.string().required("Address name is Required."),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        await axios
          .post("/api/api", values)
          .then(() => {
            toast.success("Successfully submitted!");
            setLoading(false);
            resetForm();
          })
          .catch(() => {
            toast.error("Something went wrong!");

            setLoading(false);
            resetForm();
          });
      } catch (error) {
        console.error(error);
      }
    },
  });
  const { errors, touched, handleSubmit, getFieldProps } = formik;
  const accountSid = process.env.ACCOUNT_SID;
  const authToken = process.env.SERVICE_SID;
  console.log(accountSid, authToken);
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          sx={{
            backgroundImage: "url(/images/car1.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            mt: 6,
            position: "relative",
            overflow: "hidden",
            zIndex: 0,
            "&:before": {
              content: '""',
              position: "absolute",
              height: "100%",
              width: "100%",
              background: "#000000bd",
              zIndex: 1,
              left: 0,
            },
          }}
        >
          <Container id={"ContactUs"}>
            <Box
              id={"FillForm"}
              py={{ xs: 5, md: 10 }}
              sx={{ position: "relative", zIndex: 5 }}
            >
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Typography variant="h3" fontWeight={700} mb={2}>
                    Contact Us
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextFieldStyle
                        variant="filled"
                        color="warning"
                        type={"text"}
                        fullWidth
                        placeholder="First Name"
                        {...getFieldProps("firstName")}
                        error={Boolean(touched.firstName && errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextFieldStyle
                        variant="filled"
                        color="warning"
                        fullWidth
                        placeholder="Last Name"
                        {...getFieldProps("lastName")}
                        error={Boolean(touched.lastName && errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextFieldStyle
                        variant="filled"
                        color="warning"
                        fullWidth
                        placeholder="Email"
                        {...getFieldProps("email")}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextFieldStyle
                        variant="filled"
                        color="warning"
                        fullWidth
                        type="number"
                        placeholder="Number"
                        {...getFieldProps("phone")}
                        error={Boolean(touched.phone && errors.phone)}
                        helperText={touched.phone && errors.phone}
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextFieldStyle
                        variant="filled"
                        color="warning"
                        fullWidth
                        placeholder="Address"
                        multiline
                        rows={5}
                        {...getFieldProps("address")}
                        error={Boolean(touched.address && errors.address)}
                        helperText={touched.address && errors.address}
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <LoadingButton
                        type="submit"
                        variant="contained"
                        size="large"
                        color="warning"
                        fullWidth
                        loading={loading}
                        sx={{
                          textTransform: "capitalize",
                          fontWeight: "bold",
                          fontSize: "16px",
                          py: 1.5,
                          "&.Mui-disabled": {
                            bgcolor: "#ed6c02",
                          },
                        }}
                      >
                        Submit
                      </LoadingButton>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                  <ContactCard />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Form>
    </FormikProvider>
  );
}
