export type productType = {
    id: string;
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


export type productsResponseType = {
    success: boolean;
    message: string;
    products: productType[];
};