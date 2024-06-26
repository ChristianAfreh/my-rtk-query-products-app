import React from "react";
import { useGetAllProductsQuery } from "../app/services/productsApi";

const AllProducts = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery();

  if (isError) {
    return <h1>Oh noooo. There is an error in the code.</h1>;
  }

  if(isLoading){
    return <h1>Data is loading...</h1>
  }
  return <div>All Products</div>;
};

export default AllProducts;
