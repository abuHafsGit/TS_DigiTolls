import { useState } from 'react';
import type { productType } from '../types/productType';


type PramsType = {
    product: productType;
    carts: productType[];
    setCarts: React.Dispatch<React.SetStateAction<productType[]>>;
}

const Product = ({ product, carts, setCarts }: PramsType) => {

    const [isSubcribed, setIsSubcribed] = useState(false);

    const handleSubscribe = (product: productType) => {
        setIsSubcribed(!isSubcribed);
        setCarts([...carts, product]);
    };

    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-sm">

                <div className="card-body hover:scale-105 duration-75">
                    <div className=' flex justify-between '>
                        <img src={product.img} alt="" />
                        <span className="badge badge-xs badge-warning">{product.tag}</span>

                    </div>
                    <div>
                        <h2 className="card-title">{product.name}</h2>
                        <p>{product.description}</p>
                        <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
                        <div>
                            {product.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="text-green-500">✓ {feature}</span>
                                </div>
                            ))}

                        </div>

                        <div className="mt-6">
                            <button onClick={() => handleSubscribe(product)} className={`btn btn-primary btn-block ${isSubcribed ? 'bg-green-500' : ''}`} >
                                {isSubcribed ? '✓ Add to Cart' : 'Buy Now'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;