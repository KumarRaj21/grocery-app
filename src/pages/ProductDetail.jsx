import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import CustomButton from '../components/CustomButton'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const ProductDetail = () => {
  const { product_id } = useParams();
  const { getProductById } = useContext(ProductContext);
  const [product, setProduct] = useState(null);

  const nav = useNavigate()
  const handlenav = () => {
    nav(`/products/${product_id}/edit`)
  }
  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProductById(product_id);
      setProduct(productData);
    };
    fetchProduct();
  }, [product_id, getProductById]);

  if (!product) return <p>Loading product details...</p>;

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center w-full mt-10 p-8">
      <div className="flex flex-col w-full p-6 sm:p-20 rounded-[12px] md:flex-row gap-8 shadow-xl border-[2px] border-black">
        <div className="image-section md:w-1/2">
          <img
            // src={product.image || "https://via.placeholder.com/500"}
            src={"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/9345/media-gallery/touch/gray/notebook-xps-13-9345-t-gray-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=679&qlt=100,1&resMode=sharp2&size=679,402&chrss=full"} 
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="info-section md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-lg text-gray-700">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600">${product.price}</p>
          <p className="text-md text-gray-500">Available: {product.availability ? "In stock" : "Out of stock"}</p>
          {product.discount && (
            <p className="text-md text-red-500">Discount: {product.discount}%</p>
          )}
          <div className="flex items-center gap-4">
          <CustomButton
              textColor="white"
              bgColor="red-500"
              buttonText="Edit Details"
              onClick={handlenav}
            />
            <CustomButton
              textColor="white"
              bgColor="blue-500"
              buttonText="Add to Cart"
              onClick={() => toast.success("Added to cart")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
