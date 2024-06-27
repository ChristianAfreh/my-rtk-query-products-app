import React from "react";
import { useDeleteProductMutation } from "../app/services/productsApi";

const DeleteProduct = ({ productId }) => {
  const [deleteProduct, { data, isLoading, isError }] =
    useDeleteProductMutation();

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(productId);
    } catch (err) {
      console.log("Delete product failed with error",err);
    }
  };
  if (isLoading) {
    return (
      <div>
        <h1>Deleting product...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Attempt to delete product failed.</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{data && `${data?.title} was deleted successfully.`}</h1>
      <button onClick={handleDeleteProduct} disabled={isLoading}>
        Delete Product
      </button>
    </div>
  );
};

export default DeleteProduct;
