import { Request, Response } from "express"
import { products } from "../models/porductModel"


export const getProducts = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: "Products retrieved successfully",
        products: products
    })
}       