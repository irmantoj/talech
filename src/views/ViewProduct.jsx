import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './components/TabPanel.jsx';
import Product from './components/Product.jsx';
import Chart from './components/Chart.jsx';
import { getProduct } from './../services/productsService.js';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  }
}));

const ViewProducts = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [product, setProduct] = useState(getProduct(props.match.params.id));

  const handleChangeIndex = (index, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChangeIndex}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs"
        >
          <Tab label="Product details"  />
          <Tab label="Price history"  />
          <Tab label="Quantity History"  />
        </Tabs>
      </AppBar>
        <TabPanel value={value} index={0}>
          <Product product={product} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Chart chartData={product.priceHistory} yAxisTitle="Price" title="Price history"/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Chart chartData={product.quantityHistory} yAxisTitle="Quantity" title="Quantity History"/>
        </TabPanel>
    </div>
  );
}
export default ViewProducts;