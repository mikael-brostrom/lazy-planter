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
    <div>
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

        <button
          type="submit"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          Submit
        </button>
      </form>

      {/* Display the fetched plants as an unordered list */}
      <ul className="flex flex-col space-y-4 bg-slate-500">
        {plants.map((plant) => (
          <li
            key={plant.id}
            className="gap-4 space p-6 rounded-lg shadow-md flex items-center space-x-4 space-y-4"
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
