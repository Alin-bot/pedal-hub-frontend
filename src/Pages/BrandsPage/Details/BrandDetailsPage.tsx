import React from "react";
import { useParams } from "react-router-dom";
import { IBrand } from "../../../api/model/Brand";

function lowercaseFirstLetter(string: string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

const BrandDetailsPage = () => {
  const { brandName } = useParams<{ brandName: string }>();
  const brandDetails: IBrand = require(`../../../data/${lowercaseFirstLetter(
    brandName!
  )}.json`);

  return (
    <div>
      <h1>{brandDetails?.name}</h1>
      <p>{brandDetails?.description}</p>
    </div>
  );
};

export default BrandDetailsPage;
