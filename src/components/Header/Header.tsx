import React from 'react';
import { useAppSelector } from '../../Redux/hooks';
import { getAllSaved } from '../../Redux/Products/ProductsSlice';
import { IProduct } from '../../Interfaces/interfaces';
import { CHeagerImage } from '../common/CHeagerImage/CHeagerImage';
import { headerCategory } from '../../Redux/Categories/CategoriesSlice';
import './Header.scss';

interface HeaderProps { }

export const Header: React.FC<HeaderProps> = () => {

    const products = useAppSelector(getAllSaved);
    const headerTitle = useAppSelector(headerCategory)[0];
    let headerImages: IProduct[] = []
    if (products.length < 100) {
        headerImages = products.slice(3, 8);
    } else {
        headerImages = products.slice(89, 94);
    }

    return (
        <header id='header'>
            <section className='image__wrapper'>
                {
                    headerImages.map((x: IProduct) => <CHeagerImage key={x.images[0].srcset} imageUrl={x.images[0].src} altText={x.images[0].alt} />)
                }
                <h1>{headerTitle?.name}</h1>
            </section>
        </header>
    )
}
