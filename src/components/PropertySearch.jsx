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

      <button type="submit">Search</button>
    </form>
  );
};

export default PropertySearch;
