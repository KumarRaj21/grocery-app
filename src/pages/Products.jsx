import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import CustomButton from '../components/CustomButton';
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
const Products = () => {
  const { products, deleteProduct } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const nav =  useNavigate()
  const handlenav = ()=>{
    nav(`/add-product`)
  }
  return (
    <div className='w-full flex flex-col justify-start items-start'>
      <div className='w-full flex justify-center items-center'>
       <SearchBar setSearchTerm={setSearchTerm} />
       </div>
       <div className='w-full flex justify-end items-center'>
       <CustomButton buttonText={'Add Product'} Icon={FaPlus} onClick={handlenav} textColor={"white"} bgColor={"blue-500"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {
          filteredProducts.length >0 ?
        <>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} deleteProduct={deleteProduct} />
        ))}
        </>: <h2 className='text-md sm:text-lg font-semibold'>No Result Found</h2>
        }
      </div>
    </div>
  );
};

export default Products;
