import React from "react";
import { useGetProductByIdQuery } from "../app/services/productsApi";

const Product = () => {
  const { data, isLoading, isError } = useGetProductByIdQuery(18);
  console.log(data);

  if (isLoading) {
    return (
      <div>
        <h1>Loading data...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Error Loading Data...</h1>
      </div>
    );
  }
  return (
    <div>
      {data && (
        <div>
          <h1>{data.brand}</h1>
          <h2>{data.availabilityStatus}</h2>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <img src={data.images[0]} width={480} />
        </div>
      )}
    </div>
  );
};

export default Product;
