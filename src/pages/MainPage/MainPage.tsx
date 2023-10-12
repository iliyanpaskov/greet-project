import React, { useEffect } from 'react';
import { getAll } from '../../Redux/Products/ProductsSlice';
import { IProduct } from '../../Interfaces/interfaces';
import { getAllProducts } from '../../Redux/Products/ProductsActions';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { SortAndFilterForm } from '../../components/SortAndFilterForm/SortAndFilterForm';
import './MainPage.scss';
import { ProductCard } from '../../components/ProductCard/ProductCard';

interface MainPageProps { }

export const MainPage: React.FC<MainPageProps> = () => {
    const dispatch = useAppDispatch();
    const prooductsList: IProduct[] = useAppSelector(getAll);

    useEffect(() => {
        dispatch(getAllProducts({
            products: [],
        }))
    }, [])

    return (
        <main className='main'>
            <section className='main__form__wrapper'>
                <SortAndFilterForm />
            </section>
            <section className='main__products__list'>
                {
                    prooductsList.map((x) => <ProductCard key={x.id} product={x} />)
                }
            </section>
        </main>
    )
}
