import React, { useEffect, useRef, useCallback } from 'react';
import { getAll, isLoaded, setPageNumber, sortingParams } from '../../Redux/Products/ProductsSlice';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { IProduct } from '../../Interfaces/interfaces';
import { getAllProducts } from '../../Redux/Products/ProductsActions';
import { SortAndFilterForm } from '../../components/SortAndFilterForm/SortAndFilterForm';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { CLoadingMoreProducts } from '../../components/common/CLoadingMoreProducts/CLoadingMoreProducts';
import { CLoader } from '../../components/common/CLoader/CLoader';
import { getAllCategories } from '../../Redux/Categories/CategoriesActions';
import './MainPage.scss';

interface MainPageProps { }

export const MainPage: React.FC<MainPageProps> = () => {

    const dispatch = useAppDispatch();
    const prooductsList: IProduct[] = useAppSelector(getAll);
    const isLoading = useAppSelector(isLoaded);
    const params = useAppSelector(sortingParams)
    const observer = useRef();

    const loadMore = useCallback((node: any) => {
        if (isLoading) {
            return
        };
        // @ts-expect-error
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                dispatch(setPageNumber());
            }
        })
        if (node) {
            // @ts-expect-error
            observer.current.observe(node);
        };
    }, [])

    useEffect(() => {
        dispatch(getAllProducts(params));
        dispatch(getAllCategories());
    }, [params])

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
                            params.pageNumber < 25
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
