// src/pages/SearchListingPage.jsx
import React from "react";
import PropertyList from "../components/PropertyList";
import PropertySearch from "../components/PropertySearch";

const SearchListingPage = ({ location, properties }) => {
  return (
    <div className="flex bg-slate-600">
      <h1>{location ? `Properties in ${location}` : "All Properties"}</h1>
      <PropertySearch /> {/* Search component to allow filtering */}
      {properties.length === 0 ? (
        <p>No properties found</p> // Message when no properties match the criteria
      ) : (
        <PropertyList properties={properties} />
      )}
    </div>
  );
};

export default SearchListingPage;

