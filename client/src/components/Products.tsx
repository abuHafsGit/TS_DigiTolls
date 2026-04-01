import type { productType } from "../App";
import Product from "./Product";

type PramsType = {
    products: productType[];
}

const Products = ({ products }: PramsType) => {
    console.log(products);
    return (
        <div>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products;