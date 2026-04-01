
import type { productType } from "../types/productType";
import Product from "./Product";

 type PramsType = {
    products: productType[];
    carts: productType[];
    setCarts:React.Dispatch<React.SetStateAction<productType[]>>;
}

const Products = ({ products ,carts,setCarts }: PramsType) => {
    console.log(products);
    return (
        <div className=" grid grid-cols-3">
            {products.map((product) => (
                <Product key={product.id} product={product} carts={carts} setCarts={setCarts} />
            ))}
        </div>
    );
};

export default Products;