import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import { getProducts, deleteProduct, editProduct } from "./../services/productsService";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  outOfStock: {
    backgroundColor: theme.palette.warning.light,
  },
  input: {
    maxWidth: "60px",
  },
  createButton: {
    marginTop: 10,
  },
  tableButton: {
    marginRight: 5,
  },
  theadCell: {
    fontWeight: 700
  }
}));

const Products = () => {
  const [products, setProducts] = useState(getProducts());

  const classes = useStyles();

  const handleDelete = (product) => {
    const filtered = products.filter((p) => p != product);
    setProducts(filtered);
    deleteProduct(product);
  };

  const handleCheck = (event, product) => {
    product[event.target.name] = event.target.checked;
    setProducts([...products]);
    editProduct(product);
  };

  const handleBlur = (product) => (event) => {
    product[event.target.name] = event.target.value;
    setProducts([...products]);
    editProduct(product);
  };

  const columns = ["Name", "EAN", "Type", "Weight", "Color", "Quantity", "Price", "Active", ""];

  return (
    <React.Fragment>
      <div className={classes.root}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {columns.map((columnName) => (
                  <TableCell className={classes.theadCell} key={columnName}>{columnName}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {products &&
                products.map((product) => (
                  <TableRow
                    className={product.quantity == 0 ? classes.outOfStock : ""}
                    key={product.id}
                  >
                    <TableCell component="th" scope="row">
                      {product.name}
                    </TableCell>
                    <TableCell>{product.ean}</TableCell>
                    <TableCell>{product.type}</TableCell>
                    <TableCell>{product.weight}</TableCell>
                    <TableCell>{product.color}</TableCell>
                    <TableCell>
                      <TextField
                        className={classes.input}
                        onBlur={handleBlur(product)}
                        defaultValue={product.quantity}
                        name="quantity"
                        type="number"
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        className={classes.input}
                        onBlur={handleBlur(product)}
                        defaultValue={product.price}
                        name="price"
                        type="number"
                      ></TextField>
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={(event) => handleCheck(event, product)}
                            checked={product.active}
                            color="primary"
                            name="active"
                          />
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Link to={`/products/${product.id}`}>
                        <Button className={classes.tableButton} variant="contained">
                          VIEW
                        </Button>
                      </Link>
                      <Link to={`/products/${product.id}/edit`}>
                        <Button className={classes.tableButton} variant="contained" color="primary">
                          EDIT
                        </Button>
                      </Link>
                      <Button
                        className={classes.tableButton}
                        onClick={() => handleDelete(product)}
                        variant="contained"
                        color="secondary"
                        href="#contained-buttons"
                      >
                        DELETE
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Link to="/products/create">
          <Button className={classes.createButton} variant="contained" color="primary">
            Create product
          </Button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Products;
