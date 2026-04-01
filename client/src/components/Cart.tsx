import { ShoppingCart } from "lucide-react";
import type { productType } from "../types/productType";


type PramsType = {
    carts: productType[];
    setCarts: React.Dispatch<React.SetStateAction<productType[]>>;
}

const Cart = ({ carts, setCarts }: PramsType) => {

    return (
        <div className=" p-10 max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold">Your Cart</h1>

            {carts.length === 0 ? (
                <div className=" flex flex-col border rounded-md justify-center items-center h-50">
                    <ShoppingCart className=" w-16" />
                    <p className="text-gray-500 mt-4 text-center p-2">Your cart is empty. Start adding products to your cart!</p>
                </div>
            ) : (
                <>
                    <div className="space-y-5 mt-4">
                        {carts.map((item) => (
                            <div
                                className="flex items-center justify-between border rounded-lg p-3"
                                key={item.id}
                            >
                                <div className="flex  items-center gap-2">
                                    <div className=" flex gap-2 justify-center items-center">
                                        <img
                                            className="h-10 w-10 object-contain"
                                            src={item.img}
                                        />
                                        <div >
                                            <h2 className="text-xl font-bold">{item.name}</h2>
                                            <div className="text-base ">${item.price}/month</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-10">

                                    <button
                                        // onClick={() => handleDelete(item)}
                                        className=" text-red-500"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className=" flex justify-between my-3">
                        <div>Total:</div>
                        <div>$ {0}</div>
                    </div>

                    <button
                        // onClick={handlePayment}
                        className="btn  w-full text-2xl text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] my-3"
                    >
                        Proceed to Checkout
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;