import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
    } else {
      // Here you can send formData to a server or email service
      console.log('Form submitted:', formData);
      alert('Thank you for reaching out! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    }
  };

  return (
    <div className="w-full mt-10 flex  flex-col gap-5 justify-center items-center">
      <h2 className='text-sm sm:text-lg font-bold'>Contact Us</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-[50%]">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="p-2 border rounded h-32"
          required
        ></textarea>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
