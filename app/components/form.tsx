"use client";

import { useState } from "react";
import { DataItem } from "../api/getPlants/route";

const ColorForm = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    color: "",
    agree: false,
  });

  // State to store fetched plants
  const [plants, setPlants] = useState<DataItem[]>([]);

  // Handle changes to select and checkbox
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission (for now it just logs data)
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`../api/getPlants?color=${formData.color}&isEdible=${formData.agree}`)
      .then((response) => response.json())
      // .then(data => console.log(data));
      .then((data) => {
        setPlants(data);
      })
      .catch((error) => console.log("error fetching data:", error));

    //console.log('Form submitted:', formData);
    //alert('Form submitted');
  };

  return (
    <div className="container mx-auto p-4">
  <form onSubmit={handleSubmit} className="mb-8 space-y-6">
    {/* Color Selection */}
    <div>
      <label htmlFor="color" className="block text-sm font-medium text-black flex justify-center">
        Choose a color:
      </label>
      <select
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
        required
        className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 
focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
    </div>

    {/* Checkbox */}
    <div className="flex justify-center">
      <input
        type="checkbox"
        id="agree"
        name="agree"
        checked={formData.agree}
        onChange={handleChange}
        required
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
      />
      <label htmlFor="agree" className="ml-2 block text-sm font-medium text-black">
        Is eatable
      </label>
    </div>

<div className="flex justify-center">
    <button
      type="submit"
      className="rounded-full bg-green-600 hover:bg-blue-700 text-white px-4 py-2 transition-colors 
duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
    >
      Submit
    </button>
    </div>
  </form>

  {/* Display the fetched plants as an unordered list */}
  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {plants.map((plant) => (
      <li
        key={plant.id}
        className="bg-green-600 rounded-lg overflow-hidden shadow-md flex items-center space-x-4 p-6"
      >
        <h3 className="text-xl font-semibold">{plant.common_name}</h3>
        {plant.image_url && (
          <img
            src={plant.image_url}
            alt={plant.common_name}
            className="w-20 h-20 object-cover rounded"
          />
        )}
      </li>
    ))}
  </ul>
</div>

  );
};

export default ColorForm;
