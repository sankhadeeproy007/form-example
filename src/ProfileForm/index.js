import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Grid, Button } from "@material-ui/core";

import { useStyles } from "./styles";

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function ProfileForm({ handleNext }) {
  const styles = useStyles();

  const { register, errors, handleSubmit } = useForm();

  const isPhoneNumberError = Boolean(
    errors.phoneNumber?.type === "minLength" ||
      errors.phoneNumber?.type === "maxLength"
  );

  return (
    <div>
      <Grid container spacing={3} className={styles.grid}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            autoComplete="off"
            inputRef={register({ required: true })}
            name="firstName"
            label="First Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            autoComplete="off"
            inputRef={register({ required: true })}
            name="lastName"
            label="Last Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            error={Boolean(errors.email?.type === "pattern")}
            autoComplete="off"
            inputRef={register({
              required: true,
              pattern: {
                value: EMAIL_REGEX,
                message: "Not a valid email",
              },
            })}
            name="email"
            label="Email"
            variant="outlined"
            helperText={
              Boolean(errors.email?.type === "pattern") && errors.email?.message
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            error={isPhoneNumberError}
            autoComplete="off"
            type="number"
            inputRef={register({
              required: true,
              maxLength: 10,
              minLength: 10,
            })}
            name="phoneNumber"
            label="Phone Number"
            variant="outlined"
            helperText={
              isPhoneNumberError && "Phone number should be 10 digits"
            }
          />
        </Grid>
      </Grid>
      <Button disabled className={styles.button}>
        Back
      </Button>
      <Button
        onClick={handleSubmit(handleNext)}
        variant="contained"
        color="primary"
      >
        Next
      </Button>
    </div>
  );
}

export default ProfileForm;
