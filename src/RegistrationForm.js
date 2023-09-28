import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Card,
  Typography,
} from "@mui/material";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    email: "",
    country: "",
    phoneNumber: "",
    profession: "",
    mediaHandle: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const errors = {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const runValidation = () => {
    if (formData.firstName.trim().length === 0) {
      errors.firstName = "first name can not be blank";
    }
    if (formData.lastName.trim().length === 0) {
      errors.lastName = "last name can not be blank";
    }
    if (formData.city.trim().length === 0) {
      errors.city = "city name can not be blank";
    }
    if (formData.profession.trim().length === 0) {
      errors.profession = "profession can not be blank";
    }
    if (formData.country.trim().length === 0) {
      errors.country = "country name can not be blank";
    }
    if (formData.mediaHandle.trim().length === 0) {
      errors.mediaHandle = "media handle name can not be blank";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    runValidation();

    if (Object.keys(errors).length == 0) {
      setFormErrors({});
      const data = {
        id: Number(new Date()),
        firstName: formData.firstName,
        lastName: formData.lastName,
        city: formData.city,
        email: formData.email,
        profession: formData.profession,
      };
      console.log("form Data", data);
      alert("form submitted successfully");
    } else {
      console.log("formErrors", formErrors);
      setFormErrors(errors);
    }
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "135vh",
      }}
    >
      <Card
        style={{
          padding: "50px",
          borderRadius: 8,
          width: "100%",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography variant="h4">Diplomats Sign Up</Typography>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                type="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                margin="normal"
              />
              {formErrors.firstName && <span>{formErrors.firstName}</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                type="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            {formErrors.lastName && <span>{formErrors.lastName}</span>}
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="City"
                variant="outlined"
                name="city"
                value={formData.city}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            {formErrors.city && <span>{formErrors.city}</span>}
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            {formErrors.email && <span>{formErrors.email}</span>}
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Country"
                variant="outlined"
                name="country"
                value={formData.country}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            {formErrors.country && <span>{formErrors.country}</span>}
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            {formErrors.phoneNumber && <span>{formErrors.phoneNumber}</span>}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Profession"
                variant="outlined"
                type="profession"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            {formErrors.profession && <span>{formErrors.profession}</span>}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Social Media Handle"
                variant="outlined"
                type="mediaHandle"
                name="mediaHandle"
                value={formData.mediaHandle}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            {formErrors.mediaHandle && <span>{formErrors.mediaHandle}</span>}
            <Grid item xs={12}>
              <div style={{ background: "red" }}>
                <TextField
                  fullWidth
                  style={{
                    color: "white",
                    fontSize: 14,
                    fontFamily: "Cardium B",
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                  type="submit"
                  value="Submit"
                />
              </div>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Container>
  );
};

export default RegistrationForm;
