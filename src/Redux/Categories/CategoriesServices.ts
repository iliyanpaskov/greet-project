import axios from "axios";
import { ICategoriesData } from "../../Interfaces/interfaces";

const url = `https://greet.bg/wp-json/wc/store/products/categories`;

export const getCategories = async (): Promise<ICategoriesData> => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error: any) {
        throw error.response.data.message;
    }
}

