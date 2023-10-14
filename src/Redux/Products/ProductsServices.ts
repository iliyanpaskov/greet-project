import axios from "axios";
import { IProductsData, ISortParams } from "../../Interfaces/interfaces";

const url = 'https://greet.bg/wp-json/wc/store/products?page=';

export const getProducts = async (params:ISortParams): Promise<IProductsData> => {
    try {
        const response = await axios.get(`${url}${params.pageNumber}&orderby=${params.orderby}&order=${params.odrer}`);
        return response.data;
    } catch (error: any) {
        throw error.response.data.message;
    }
}

// export const getSortProducts = async (): Promise<IProductsData> => {
//     try {

//     } catch (error) {
//         throw error.response.data.message;

//     }
// }