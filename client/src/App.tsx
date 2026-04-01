import { useEffect, useState } from "react";
import Products from "./components/Products";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import type { productsResponseType, productType } from "./types/productType";





const App = () => {
  const [products, setProducts] = useState<productType[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get<productsResponseType>('http://localhost:5000/api/products');
      setProducts(response.data.products);
    };
    fetchProducts();
  }, []);
  // console.log(products);
  const [isActive, setIsActive] = useState(true);
  const [carts, setCarts] = useState<productType[]>([]);
  console.log(carts);
  return (

    <div>
      <Navbar />
      <div>
        <button onClick={() => setIsActive(true)} className={`btn btn-primary ${isActive ? 'bg-green-500' : ''}`}>product</button>
        <button onClick={() => setIsActive(false)} className={`btn btn-primary ${!isActive ? 'bg-green-500' : ''}`}>cart</button>
      </div>
      {
        isActive ?
          <Products products={products} carts={carts} setCarts={setCarts} />
          :
          <Cart carts={carts} setCarts={setCarts} />
      }
      <Footer />
    </div>
  );
};

export default App;