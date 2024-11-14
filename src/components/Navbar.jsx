import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="p-4 w-full bg-slate-400 border-b-[1px] border-gray-400 text-white flex justify-around">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/products">Products</NavLink>
    <NavLink to="/about">About Us</NavLink>
    <NavLink to="/contact">Contact Us</NavLink>
  </nav>
);

export default Navbar;
