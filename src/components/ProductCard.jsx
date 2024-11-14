import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';

const ProductCard = ({ product, deleteProduct }) => {

  const nav = useNavigate()
  const handlenav = () => {
    nav(`/products/${product.product_id}`)
  }
  return (
    <div className="border p-4 rounded-md shadow-md hover:bg-blue-300">
      {/* <img src={product.image} alt=''/> */}
      <img src={"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/9345/media-gallery/touch/gray/notebook-xps-13-9345-t-gray-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=679&qlt=100,1&resMode=sharp2&size=679,402&chrss=full"} alt={product.name} />
      <div className='gap-2 pl-2 w-full flex-col flex justify-center items-start m-2'>
        <h2 className='text-sm sm:text-lg font-bold'>{product.name}</h2>
        <p className='text-sm sm:text-md text-slate-400'>{product.description}</p>
        <p className='text-sm sm:text-lg font-bold'>${product.price}</p>
      </div>

      <div className='flex flex-col sm:flex-row w-full justify-start items-center'>
        <CustomButton textColor={"white"} onClick={handlenav} bgColor={'blue-500'} buttonText={'View Details'} />
        <CustomButton onClick={() => deleteProduct(product.product_id)} textColor={"white"} bgColor={"red-500"} buttonText={'Delete'} />
      </div>

    </div>
  );
}
export default ProductCard;
