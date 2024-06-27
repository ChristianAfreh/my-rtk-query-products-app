import React from "react";
import { useUpdateProductMutation } from "../app/services/productsApi";

const UpdateProduct = ({ productId }) => {
  const [updateProduct, { data, isLoading, isError }] =
    useUpdateProductMutation();

  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        "title": "Nice black Polo T-Shirt updated",
      };

      await updateProduct({ id: productId, updatedProduct: updatedProductData });
      console.log(data);
    } catch (err) {
      console.log(`Updating product failed with error: ${err}`);
    }
  };
  if (isLoading) {
    return (
      <div>
        <h1>Updating Product...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>{`Attempt to update product failed.`}</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{data?.title}</h1>
      <button onClick={handleUpdateProduct} disabled={isLoading}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
