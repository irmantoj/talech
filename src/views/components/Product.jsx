import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
  },
  dataTitle: {
      fontWeight : 700,
  },
}));

const Product = (props) => {
  const classes = useStyles();
  const { name, ean, type, weight, color, active, quantity, price } = props.product;

  const productData = [
    { name: "Name", value: name},
    { name: "Ean", value: ean},
    { name: "Type", value: type},
    { name: "Weight", value: weight},
    { name: "Color", value: color},
    { name: "Quantity", value: quantity},
    { name: "Price", value: price},
  ]

  return (
    <div className={classes.root}>
      <Typography align="center" variant="h3" component="h1">
        {name}
      </Typography>
      <div className={classes}>
        
        {productData.map(data => 
            <Typography>
              <span className={classes.dataTitle}>{data.name}:</span> {data.value}
            </Typography>
        )}
        <FormControlLabel
          control={<Checkbox checked={active} name="checkedB" color="primary" readOnly />}
          label="Active"
        />
      </div>
    </div>
  );
};

export default Product;
