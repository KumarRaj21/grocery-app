import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fake-store-api.mock.beeceptor.com/api/products')
      .then(response => {setProducts(response.data)
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const addProduct = product => {
    setProducts([...products, product])
    toast.success("Product added successfully")
    console.log(products)
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(products.map(product => (product.id === id ? updatedProduct : product)));
  };

  useEffect(()=>{
  console.log(products)
  }, [products])

  const deleteProduct = id => {
    setProducts(products.filter(product => product.product_id !== id))
    toast.error("product deleted successfully ")
    console.log(products)
  };

  const getProductById = (id) => {
    return products.find((product) => product.product_id === parseInt(id));
  };

  return (
    <ProductContext.Provider value={{ products,getProductById, addProduct, updateProduct, deleteProduct, loading }}>
      {children}
    </ProductContext.Provider>
  );
};
