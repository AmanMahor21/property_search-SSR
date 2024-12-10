import React from "react";
import PropertySearch from "../components/PropertySearch";

const HtmlLayout = ({ children, title, description }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="description" content={description} />
        <title>{title}</title>
      </head>
      <body>
        <div id="app">{children}</div>
      </body>
    </html>
  );
};

export default HtmlLayout;
