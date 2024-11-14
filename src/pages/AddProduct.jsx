import React, { useState, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { toast } from 'react-toastify';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';
const AddProduct = () => {
  const { addProduct } = useContext(ProductContext);
  const nav = useNavigate()

  const [Inputs, setInputs] = useState({
    name: '',
    description: '',
    price: '',
    unit: '',
    image: '',
    discount: '',
    availability: false,
    rating: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInputs({
      ...Inputs,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!Inputs.name || !Inputs.description || !Inputs.price) {
      toast.error("Please provide all required fields.");
    } else {
      addProduct({ ...Inputs, product_id: Date.now() });
      nav(`/products`)
    }
  };

  return (
    <form onSubmit={handleSubmit} className='h-[80%] w-[50%] flex flex-col justify-center items-start mt-10 gap-5'>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={Inputs.name}
        onChange={handleChange}
        className='w-full pl-5 border-[1px] border-black '
      />
      <textarea
        name="description"
        placeholder="Description"
        value={Inputs.description}
        onChange={handleChange}
        className='w-full min-h-[100px] pl-5 border-[1px] border-black '
      ></textarea>
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={Inputs.price}
        onChange={handleChange}
        className='w-full pl-5 border-[1px] border-black '
      />
      <input
        type="text"
        name="unit"
        placeholder="Unit"
        value={Inputs.unit}
        onChange={handleChange}
        className='w-full pl-5 border-[1px] border-black '
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={Inputs.image}
        onChange={handleChange}
        className='w-full pl-5 border-[1px] border-black '
      />
      <input
        type="number"
        name="discount"
        placeholder="Discount (%)"
        value={Inputs.discount}
        onChange={handleChange}
        className='w-full pl-5 border-[1px] border-black '
      />
      <div className='w-full gap-2'>
        <label>
          Availability:
          <input
            type="checkbox"
            name="availability"
            checked={Inputs.availability}
            onChange={handleChange}
          />
        </label>
      </div>
      <input
        type="number"
        name="rating"
        placeholder="Rating (1-5)"
        value={Inputs.rating}
        onChange={handleChange}
        className='w-full pl-5 border-[1px] border-black'
      />
      <CustomButton onClick={handleSubmit} buttonText={'Add Product'} textColor={'white'} bgColor={'red-500'} />
    </form>
  );
};

export default AddProduct;
