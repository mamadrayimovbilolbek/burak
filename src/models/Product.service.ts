import ProductModel from "../schema/Product.model";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { Product, ProductInput } from "../libs/types/product";

class ProductService {
    private readonly productModel;

    constructor() {
        this.productModel = ProductModel;
    }


    /** SPA */

    /** SSR */
    public async createNewProduct(input: ProductInput): Promise<Product> {
        try {
            return await this.productModel.create(input);
        } catch (err) {
            console.error("Error, model:createNewProduct:", err);
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }
    }
}


export default ProductService;

function createNewProduct(input: any, ProductInput: any) {
    throw new Error("Function not implemented.");
}
