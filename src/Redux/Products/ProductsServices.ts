import axios from "axios";
import { IProductsData } from "../../Interfaces/interfaces";

const url = 'https://greet.bg/wp-json/wc/store/products?page=';

export const getProducts = async (pageNumber:number): Promise<IProductsData> => {
    try {
        const response = await axios.get(`${url}${pageNumber}`);
        return response.data;
    } catch (error: any) {
        throw error.response.data.message;
    }
}