import "./App.css";
import AddNewProduct from "./components/AddNewProduct";
import  AllProducts  from "./components/AllProducts";
import DeleteProduct from "./components/DeleteProduct";
import Product from "./components/Product";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <>
      {/* <AllProducts /> */}
      {/* <Product /> */}
      {/* <AddNewProduct /> */}
      {/* <UpdateProduct productId={2}/> */}
      <DeleteProduct productId={5}/>
    </>
  );
}

export default App;
