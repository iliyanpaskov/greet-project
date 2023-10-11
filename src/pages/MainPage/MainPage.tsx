import React, { useEffect } from 'react';
import { getAll } from '../../Redux/Products/ProductsSlice';
import { IProduct } from '../../Interfaces/interfaces';
import { getAllProducts } from '../../Redux/Products/ProductsActions';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';

interface MainPageProps { }

export const MainPage: React.FC<MainPageProps> = () => {
    const dispatch = useAppDispatch();
    const prooductsList: IProduct[] = useAppSelector(getAll);
    
    useEffect(()=>{
        dispatch(getAllProducts({
            products: [],
        }))
    },[])
    
    return (
        <main>
            {
                prooductsList.map((x) => <div key={x.id}>{x.id}</div>)
            }
        </main>
    )
}
