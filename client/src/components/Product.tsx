import type { productType } from '../App';

const Product = ({ product }: { product: productType }) => {
    return (
        <div>
            {product.name}
        </div>
    );
};

export default Product;