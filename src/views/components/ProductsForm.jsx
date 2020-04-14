import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 800,
    margin: "0 auto",
    padding: 20,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  field: {
    width: "31%",
    margin: "10px 1%",
  },
  saveButton: {
    marginRight: "1%",
    alignSelf: "flex-end",
  },
  checkbox: {
    marginLeft: "1%",
  },
}));

const ProductsForm = (props) => {
  const { product, setProduct, handleSubmit, title } = props;
  const classes = useStyles();

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  const handleCheck = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.checked });
  };

  const fields = [
    { name: "name" },
    { name: "ean" },
    { name: "type" },
    { name: "weight" },
    { name: "color" },
    { name: "quantity", type: "number" },
    { name: "price", type: "number" },
  ];

  return (
    <Paper className={classes.root} elevation={5}>
      {title && (
        <Typography variant="h3" component="h1">
          {title}
        </Typography>
      )}
      <form
        className={classes.form}
        id="products-form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <div className={classes.container}>
          {fields.map((field) => (
            <TextField
              key={field.name}
              className={classes.field}
              onChange={handleChange}
              value={product[field.name]}
              name={field.name}
              // first letter should be uppercase
              label={field.name.charAt(0).toUpperCase() + field.name.slice(1)}
            />
          ))}
          <FormControlLabel
            className={classes.checkbox}
            control={
              <Checkbox
                checked={product.active}
                onChange={handleCheck}
                color="primary"
                name="active"
              />
            }
            label="Active"
          />
        </div>
        <Button className={classes.saveButton} type="submit" color="primary" variant="contained">
          Save
        </Button>
      </form>
    </Paper>
  );
};

export default ProductsForm;
