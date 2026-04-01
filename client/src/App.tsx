import { useEffect, useState } from "react";
import Products from "./components/Products";
import axios from "axios";


export type productType = {
  id: number;
  name: string;
  description: string;
  price: number;
  period: "one-time" | "monthly" | "yearly";
  tag: string;
  tagType: string;
  features: string[];
  icon: string;
  img: string;
};

type productsResponseType = {
  success: boolean;
  message: string;
  products: productType[];
};

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
  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default App;