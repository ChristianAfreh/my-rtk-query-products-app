import React from "react";
import { useGetAllProductsQuery } from "../app/services/productsApi";

const AllProducts = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery();

  if (isError) {
    return <h1>Oh noooo. There is an error in the code.</h1>;
  }

  if (isLoading) {
    return <h1>Data is loading...</h1>;
  }

  return (
    <div>
      {data?.products.map((p) => (
        <div key={p.id}>
          <h1>{p.title}</h1>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
