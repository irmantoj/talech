import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Products from "./../views/Products.jsx"
import CreateProducts from "./../views/CreateProducts.jsx"
import EditProducts from "./../views/EditProducts.jsx"
import ViewProduct from "./../views/ViewProduct.jsx"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/products/:id/edit" component={EditProducts}></Route>
                <Route path="/products/create" component={CreateProducts}></Route>
                <Route path="/products/:id" component={ViewProduct}></Route>
                <Route path="/products" component={Products}></Route>
                <Redirect from="/" to="/products" />
          />
            </Switch> 
        </BrowserRouter>
    )
}

export default Router;
