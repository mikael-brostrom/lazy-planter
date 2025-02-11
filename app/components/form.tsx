'use client';

import { useState } from 'react';

const ColorForm = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    color: '',
    agree: false,
  });

  // Handle changes to select and checkbox
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission (for now it just logs data)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Color Selection */}
      <div>
        <label htmlFor="color">Choose a color:</label>
        <select
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
          required
        >
          <option value="">Select a color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
      </div>

      {/* Checkbox */}
      <div>
        <label htmlFor="agree">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />
          Is eatable
        </label>
      </div>

      <button type="submit" className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">Submit</button>
    </form>
  );
};

export default ColorForm;
