// src/server/routes/propertyRoutes.js
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import HtmlLayout from "../../layouts/HtmlLayout";
import SearchListingPage from "../../pages/SearchListingPage";
import mockPropertyData from "../services/mockPropertyData";

const router = express.Router();

// Route to render search input and display all property listings

router.get("/", (req, res) => {
  const { location } = req.query;
  const properties = mockPropertyData();
  const title = "Property Listings - Find Your Dream Property";
  const description =
    "Browse our listings of properties for sale or rent. Find the best deals on homes, apartments, and commercial spaces.";

  const reactApp = renderToString(
    <HtmlLayout title={title} description={description}>
      <SearchListingPage location={location} properties={properties} />
    </HtmlLayout>
  );

  res.send(`<!DOCTYPE html>${reactApp}`);
});

// Route to render search input and display properties matching the location
router.get("/properties", (req, res) => {
  const { location } = req.query;

  const title = `Properties for Sale or Rent in ${location}`;
  const description = `Explore the best property listings in ${location}. Find homes, apartments, and commercial spaces for sale or rent in your desired area.`;
  const properties = mockPropertyData();

  const filteredProperties = location
    ? properties.filter((property) =>
        property.location.toLowerCase().includes(location.toLowerCase())
      )
    : [];

  const reactApp = renderToString(
    <HtmlLayout title={title} description={description}>
      <SearchListingPage location={location} properties={filteredProperties} />
    </HtmlLayout>
  );

  res.send(`<!DOCTYPE html>${reactApp}`);
});

export default router;
