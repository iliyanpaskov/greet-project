import { ICategories, ICategoryFilter, IProduct } from "../Interfaces/interfaces";

export const filterCategories = (arr: IProduct[]) => {
    let allCategories:string[] = [];
    let result:ICategoryFilter[] = [];
    arr.forEach(x => {
        x.categories.forEach((y:ICategories) => {
          if(allCategories.includes(y.name)) return;
          allCategories.push(y.name);
          result.push(y);
        })
    })
    return result;
}