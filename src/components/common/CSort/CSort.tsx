import React from 'react';
import { useAppDispatch } from '../../../Redux/hooks';
import { sortProducts } from '../../../Redux/Products/ProductsSlice';
import { BiSortDown } from 'react-icons/bi';
import './CSort.scss';

interface CSortProps { }

export const CSort: React.FC<CSortProps> = () => {

    const dispatch = useAppDispatch();

    const changeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
        dispatch(sortProducts(e.currentTarget.value));
    }

    return (
        <label htmlFor="sort" className='sort'> <h4>сортирай <BiSortDown /></h4>
            <select name='sort' id='sort' onChange={changeHandler}>
                <option value="slug-asc"></option>
                <option value="slug-asc">Азбучен ред А&rarr;Я</option>
                <option value="slug-desc">Азбучен ред Я&rarr;А</option>
                <option value="price-asc">Цена нарастваща &uarr;</option>
                <option value="price-desc">Цена намаляваща &darr;</option>
            </select>
        </label>
    )
}
