import React from "react";
import { Helmet } from "react-helmet";

function HelmetComponent({ category }) {
  return (
    <Helmet>
      <title>Images - {category}</title>
    </Helmet>
  );
}

export default HelmetComponent;
