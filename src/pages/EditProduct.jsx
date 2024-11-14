import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext'; 
import { toast } from 'react-toastify';

const EditProduct = () => {
  const { product_id } = useParams(); 
  const { products, updateProduct } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({}); 
  const navigate = useNavigate();

  useEffect(() => {
    const currentProduct = products.find(product => product.product_id === parseInt(product_id));
    if (currentProduct) {
      setProduct(currentProduct);
      setFormData({
        name: currentProduct.name,
        description: currentProduct.description,
        price: currentProduct.price,
        availability: currentProduct.availability,
        discount: currentProduct.discount || '',
        image: currentProduct.image || '',
      });
    }
  }, [product_id, products]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.description && formData.price) {
      const updatedProduct = {
        ...product,
        ...formData,
      };
      updateProduct(product.product_id, updatedProduct);
      navigate(`/products/${product.product_id}`);
    } else {
      toast.error("Please fill out all required fields.");
    }
  };

  if (!product) return <p>Product not found</p>;

  return (
    <div className="flex flex-col justify-center items-center w-full mt-10 p-8">
      <h2 className="text-2xl font-bold">Edit Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mt-6 w-full sm:w-1/2">
        <div>
          <label htmlFor="name" className="block text-sm">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name || ''}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description || ''}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-sm">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price || ''}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="discount" className="block text-sm">Discount (%)</label>
          <input
            type="number"
            id="discount"
            name="discount"
            value={formData.discount || ''}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-sm">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image || ''}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-md"
          >
            Update Product
          </button>
          <button
            type="button"
            onClick={() => navigate(`/products/${product.product_id}`)}
            className="px-6 py-3 bg-gray-500 text-white rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
