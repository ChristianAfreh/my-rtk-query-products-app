import React from 'react';
import {useAddNewProductMutation} from '../app/services/productsApi';

const AddNewProduct = () => {
    const [addNewProduct,{data,isError,isLoading}] = useAddNewProductMutation();
    console.log(data);

    if(isLoading){
        return <div>
            <h1>Adding New Product...</h1>
        </div>
    }

    if(isError){
        return <div>
            <h1>Error Adding New Product</h1>
        </div>
    }

    const handleAddProduct = async () => {
        try {
            const newProductData = {
                id:1,
                title: "A Nice Club T-Shirt",
                description: "A nice and affordable lacoste branded shirt for all occasions."
            }

            await addNewProduct(newProductData);
        } catch (err) {
            console.log("Error adding new product:",err);
        }
    }
    
  return (
    <div>
    <h3>{data?.id}</h3>
    <h2>{data?.title}</h2>
    <h4>{data?.description}</h4>
        <button onClick={handleAddProduct} disabled={isLoading}>Add New Product</button>
    </div>
  )
}


export default AddNewProduct;