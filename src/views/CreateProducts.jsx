import React, { useState } from 'react';

import { saveProduct } from './../services/productsService';
import ProductsForm from './components/ProductsForm.jsx';

const CreateProducts = (props) => {
    const [ product, setProduct ] = useState({
        name: "",
        ean: "",
        type: "",
        weight: "",
        color: "",
        quantity: 0,
        price: 0,
        active: false
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        saveProduct(product);
        props.history.push('/products');
    }

    return (
        <ProductsForm title="Create new product" product={product} handleSubmit={handleSubmit} setProduct={setProduct} />
    )
}

export default CreateProducts;