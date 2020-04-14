import moment from 'moment';
import _ from 'lodash';

export function getProducts() {
  const products =  JSON.parse(localStorage.getItem("products"));
  return _.sortBy(products, 'id')
}


export function saveProduct(product) {
  const products = getProducts();

  if(products === null ) {
    product.id = 1;
    localStorage.setItem('products', JSON.stringify([product]));
    return;
  }

  product.priceHistory = [{ updatedAt : moment().format("YYYY-MM-DD HH:mm:ss"), value : product.price }]
  product.quantityHistory = [{ updatedAt : moment().format("YYYY-MM-DD HH:mm:ss"), value : product.quantity }]

  product.id = Math.random * 100000000;
  products.push(product);
  localStorage.setItem('products', JSON.stringify(products));
}


export function deleteProduct(product) {
  const products = getProducts();

  let filtered = products.filter(p => p.id != product.id);

  localStorage.setItem('products', JSON.stringify(filtered));
}


export function getProduct(id) {
  const products = getProducts();
  const product = products.find(entry => id == entry.id);
  return product;
}


export function editProduct(product) {
  const products = getProducts();

  const productToUpdate = products.find(entry => entry.id == product.id);

  if((product.price != productToUpdate.price)) {
    productToUpdate.priceHistory = [...product.priceHistory, { updatedAt : moment().format("YYYY-MM-DD HH:mm:ss"), value : product.price }]
  }

  if((product.quantity != productToUpdate.quantity)) {
    productToUpdate.quantityHistory = [...product.quantityHistory, { updatedAt : moment().format("YYYY-MM-DD HH:mm:ss"), value : product.quantity}]
  }

  productToUpdate.name = product.name;
  productToUpdate.ean = product.ean;
  productToUpdate.weight = product.weight;
  productToUpdate.color = product.color;
  productToUpdate.quantity = product.quantity;
  productToUpdate.price = product.price;
  productToUpdate.active = product.active;

  localStorage.setItem('products', JSON.stringify(products));
}
