import React, { useState } from 'react';
import ProductsForm from './components/ProductsForm.jsx';
import { getProduct, editProduct } from './../services/productsService.js'

const CreateProducts = (props) => {
    const [ product, setProduct ] = useState(getProduct(props.match.params.id));
    
    const handleSubmit = (e) => {
        e.preventDefault();
        editProduct(product);
        props.history.push('/products');
    }

    return (
        <ProductsForm title="Edit product" product={product} handleSubmit={handleSubmit} setProduct={setProduct} />
    )
}

export default CreateProducts;