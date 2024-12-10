import React from "react";

const PropertyList = ({ properties }) => (
  <div>
    {properties.map((property) => (
      <div
        key={property.id}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          margin: "10px 0",
        }}
      >
        <h2>{property.name}</h2>
        <p>Location: {property.location}</p>
        <p>Price: {property.price}</p>
      </div>
    ))}
  </div>
);

export default PropertyList;
