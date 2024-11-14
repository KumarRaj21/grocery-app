import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const nav = useNavigate()
  return (
    <div className="h-[100vh] bg-green-100 p-10 w-full flex flex-col md:flex-row items-start pt-20 justify-between">
    <div className="text-content md:w-1/2 h-[80%] space-y-4  p-10 flex justify-start gap-5 items-start flex-col">
      <h1 className="text-md sm:text-4xl md:text-5xl font-bold text-green-800">
        New Products Delivered to Your Doorstep
      </h1>
      <p className="text-sm sm:text-lg text-gray-700">
        Get all your daily essentials, fresh produce, and groceries in one
        place. Enjoy fast, convenient delivery with just a few clicks.
      </p>
      <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
      onClick={()=> {nav('/products')}}
      >
        Shop Now
      </button>
    </div>

    <div className="image-content md:w-1/2 mt-6 md:mt-0">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY9X2N55PPyaUEUxC-Nv-o3k0COdqy4ZObJw&s"
        alt="Groceries"
        className="w-full rounded-lg shadow-lg"
      />
    </div>
  </div>
  )
}

export default Home