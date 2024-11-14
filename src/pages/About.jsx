import React from 'react';

const About = () => {
  return (
    <div className="p-8 flex w-full justify-center mt-10 flex-col items-start">
      <h1 className="text-lg sm:text-4xl font-bold mb-4 pb-4 border-b-[1px]">About Us</h1>
      <p className="text-sm sm:text-lg mb-6 ">
        Welcome to GroCart! We are dedicated to providing the best
        services and solutions tailored to meet your needs. Our mission is to
        bring excellence and innovation to everything we do.
      </p>

      <h2 className="text-sm sm:text-2xl font-semibold mb-3">Our Mission</h2>
      <p className="mb-6">
        To deliver high-quality products that enhance the lives of our
        customers, foster growth, and inspire creativity. We strive to make a
        positive impact by constantly improving and evolving.
      </p>

      <h2 className="text-sm sm:text-2xl font-semibold mb-3">Our Values</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Commitment to Quality</li>
        <li>Customer-Centric Approach</li>
        <li>Innovation and Creativity</li>
        <li>Integrity and Transparency</li>
        <li>Sustainability and Responsibility</li>
      </ul>
    </div>
  );
};

export default About;
