import "./App.css";
import Navbar from "./components/Navbar/navbar";
import ProductList from "./components/ProductList/ProductList";
import React, {useState} from "react";
// import footer from './components/Footer/footer';

function App() {
  const productList = [
    {
      price: 99999,
      name: "IPHONE 10S MAX",
      quantity: 0,
    },
    {
      price: 9999,
      name: "redmi 10S MAX",
      quantity: 0,
    }
  ]

  let [ , setproductList] = useState(productList)
 
   const incrementQuantity = (index) => {
      let newProductList=[...productList];
      newProductList[index].quantity++;
      setproductList(newProductList);
   }




  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList productList={productList}  incrementQuantity={this.incrementQuantity} />
      </main>
    </>
  );
}

export default App;
