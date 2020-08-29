import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Grid, Button } from "@material-ui/core";

import { useStyles } from "./styles";

function AddressForm({ handleNext, handleBack }) {
  const styles = useStyles();

  const { register, errors, handleSubmit } = useForm();

  return (
    <div>
      <Grid container spacing={3} className={styles.grid}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            autoComplete="off"
            inputRef={register({ required: true })}
            name="recipientName"
            label="Recipient's Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            autoComplete="off"
            type="number"
            inputRef={register({ required: true })}
            name="pincode"
            label="Pin Code"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            autoComplete="off"
            inputRef={register({
              required: true,
            })}
            name="locality"
            label="Locality"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            autoComplete="off"
            inputRef={register({
              required: true,
            })}
            name="addressLine1"
            label="Address Line 1 (house number/flat number)"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            autoComplete="off"
            inputRef={register({
              required: true,
            })}
            name="addressLine2"
            label="Address Line 2 (by lane/apartment name)"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            autoComplete="off"
            inputRef={register({
              required: true,
            })}
            name="state"
            label="State"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            autoComplete="off"
            inputRef={register({
              required: true,
            })}
            name="city"
            label="City"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            autoComplete="off"
            inputRef={register}
            name="landmark"
            label="Landmark"
            variant="outlined"
            helperText="Optional"
          />
        </Grid>
      </Grid>
      <Button onClick={handleBack} className={styles.button}>
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

export default AddressForm;
