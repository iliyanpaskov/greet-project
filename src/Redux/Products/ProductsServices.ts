import axios from "axios";
import { IProductsData } from "../../Interfaces/interfaces";

const url = 'https://greet.bg/wp-json/wc/store/products?page=1';

export const getProducts = async (): Promise<IProductsData> => {
    try {
        const response = await axios.get(`${url}`);
        console.log(response.data);
        return response.data;

    } catch (error: any) {
        throw error.response.data.message;
    }
}