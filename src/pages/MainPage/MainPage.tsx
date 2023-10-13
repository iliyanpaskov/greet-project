import React, { useEffect, useState, useRef, useCallback } from 'react';
import { getAll, isLoaded } from '../../Redux/Products/ProductsSlice';
import { IProduct } from '../../Interfaces/interfaces';
import { getAllProducts } from '../../Redux/Products/ProductsActions';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { SortAndFilterForm } from '../../components/SortAndFilterForm/SortAndFilterForm';
import './MainPage.scss';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { CLoadingMoreProducts } from '../../components/common/CLoadingMoreProducts/CLoadingMoreProducts';
import { CLoader } from '../../components/common/CLoader/CLoader';

interface MainPageProps { }

export const MainPage: React.FC<MainPageProps> = () => {

    const [pageNumber, setPageNumber] = useState(1);
    const dispatch = useAppDispatch();
    const prooductsList: IProduct[] = useAppSelector(getAll);
    const isLoading = useAppSelector(isLoaded);
    const observer = useRef();

    const loadMore = useCallback((node: any) => {
        if (isLoading) return;
        // @ts-expect-error
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPageNumber(num => num + 1);
            }
        })
        if (node) {
            // @ts-expect-error
            observer.current.observe(node);
        };
    }, [isLoading])

    useEffect(() => {
        dispatch(getAllProducts(pageNumber))
    }, [pageNumber])

    return (
        <div className='main__wrapper'>
            {
                prooductsList.length > 0
                    ? < main className='main' >
                        <section className='main__form__wrapper'>
                            <SortAndFilterForm />
                        </section>
                        <section className='main__products__list'>
                            {
                                prooductsList.map((x) => <ProductCard key={x.id} product={x} />)
                            }
                        </section>
                        {
                            pageNumber < 25
                                ? <div className='main__load__more__wrapper' ref={loadMore}>
                                    {
                                        isLoading
                                            ? <CLoadingMoreProducts />
                                            : null
                                    }
                                </div>
                                : null
                        }
                    </main >
                    : <CLoader />
            }
        </div>
    )
}
