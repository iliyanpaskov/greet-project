import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import { changeCategory, fillterByCategory, getAll, showAll } from '../../../Redux/Products/ProductsSlice';
import { ICategoryFilter, IProduct } from '../../../Interfaces/interfaces';
import { BiFilter } from 'react-icons/bi'
import { filterCategories } from '../../../Utils/utils';
import { setCategory } from '../../../Redux/Categories/CategoriesSlice';
import './CFilter.scss';

interface CFilterProps { }

export const CFilter: React.FC<CFilterProps> = () => {

    const [currentCategories, setCurrentCategories] = useState<ICategoryFilter[]>([]);
    const products: IProduct[] = useAppSelector(getAll);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setCurrentCategories(filterCategories(products));
    }, [products])

    const changeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
        dispatch(changeCategory(Number(e.currentTarget.value)));
        dispatch(showAll());
        dispatch(fillterByCategory(Number(e.currentTarget.value)));
        dispatch(setCategory(Number(e.currentTarget.value)));
        if (Number(e.currentTarget.value) === 15) {
            dispatch(showAll());
        }
    }

    return (
        <label htmlFor="category" className='category__filter'> <h4>категории<BiFilter /></h4>

            <select name='category' id='category' onChange={changeHandler}>
                <option value="15" >Всички</option>
                {
                    currentCategories.map((x: ICategoryFilter) => <option key={x.id} value={x.id} >{x.name}</option>)
                }
            </select>
        </label>
    )
}
