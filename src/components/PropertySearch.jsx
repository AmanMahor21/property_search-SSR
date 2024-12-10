import React from "react";

const PropertySearch = () => {
  return (
    <form action="/properties" method="get">
      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        name="location"
        placeholder="Enter location"
      />

      {/* <label htmlFor="minPrice">Min Price:</label>
      <input
        type="number"
        id="minPrice"
        name="minPrice"
        placeholder="Enter minimum price"
      />

      <label htmlFor="maxPrice">Max Price:</label>
      <input
        type="number"
        id="maxPrice"
        name="maxPrice"
        placeholder="Enter maximum price"
      /> */}

      <button type="submit">Search</button>
    </form>
  );
};

export default PropertySearch;
